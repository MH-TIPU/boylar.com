# Deployment

Self-hosted on a VPS via Docker Compose: the Next.js app, PostgreSQL 16, and
Caddy as a TLS-terminating reverse proxy.

---

## Prerequisites

- A VPS with Docker Engine and the Compose plugin
- A domain with an **A record already pointing at the server** — Caddy requests
  a certificate on first start and will fail if DNS has not propagated
- Ports 80 and 443 open

---

## First deploy

```bash
git clone https://github.com/MH-TIPU/boylar.com.git
cd boylar.com
cp .env.example .env
```

Edit `.env`. These have no safe defaults and the stack refuses to start without
them:

```bash
SITE_DOMAIN=boylar.com
NEXT_PUBLIC_SITE_URL=https://boylar.com
POSTGRES_PASSWORD=<openssl rand -base64 24>
PAYLOAD_SECRET=<openssl rand -base64 32>
REVALIDATION_SECRET=<openssl rand -hex 24>
```

Then bring it up:

```bash
docker compose up -d --build
docker compose exec app node -e "process.exit(0)"   # confirm the app is alive
```

Payload creates its schema on first connection. Seed the real content:

```bash
docker compose exec app npx tsx src/lib/seed/run.ts
```

That prints a generated admin password **once**. Sign in at
`https://your-domain/admin` and change it immediately.

Do **not** run `seed:demo` in production — it inserts fabricated case studies
and testimonials.

---

## Updating

```bash
git pull
docker compose up -d --build
```

Schema changes are applied automatically on start. Take a backup first (below)
if the change touches existing columns.

---

## Backups

Two things must be backed up: the database, and uploaded media.

```bash
# Database
docker compose exec -T db pg_dump -U boylar boylar | gzip > backup-$(date +%F).sql.gz

# Uploaded media
docker run --rm -v boylarcom_media:/media -v "$PWD":/backup alpine \
  tar czf /backup/media-$(date +%F).tar.gz -C /media .
```

A nightly cron entry:

```bash
0 3 * * * cd /srv/boylar.com && docker compose exec -T db pg_dump -U boylar boylar | gzip > /srv/backups/db-$(date +\%F).sql.gz
```

**Restore is not a backup until you have tested it.** Restore into a throwaway
database and confirm the site runs against it before you need to do it for real.

```bash
gunzip -c backup-2026-08-29.sql.gz | docker compose exec -T db psql -U boylar boylar
```

---

## Cache invalidation

Pages are cached with ISR — services and case studies revalidate hourly,
careers and insights every 15 minutes. To publish immediately:

```bash
curl -X POST https://boylar.com/api/revalidate \
  -H 'Content-Type: application/json' \
  -d '{"secret":"<REVALIDATION_SECRET>","path":"/services"}'
```

---

## Email

Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` in `.env`.

With `SMTP_HOST` empty, Payload logs emails to the container output instead of
sending them. Enquiries are still saved to the CMS, so nothing is lost — but
nobody is notified. Configure SMTP before launch.

Send a test through the live contact form and confirm it arrives at
`EMAIL_TO_ADDRESS`. Check spam: a new domain sending its first mail usually
needs SPF and DKIM records before it lands in an inbox.

---

## Operations

```bash
docker compose logs -f app          # application logs
docker compose logs -f caddy        # TLS and access logs
docker compose ps                   # health status
docker compose restart app          # restart just the app
```

The app container has a healthcheck against `/robots.txt`. `docker compose ps`
showing `unhealthy` means the app is up but not serving.

Postgres is **not** published to the host — it is reachable only from the app
container on the internal network. Keep it that way.

---

## Launch checklist

- [ ] `pnpm seed:demo:clear` — remove all placeholder case studies and testimonials
- [ ] Real logo uploaded in Site Settings → Brand
- [ ] Phone, address, legal name, and registration number filled in
- [ ] `/privacy`, `/terms`, `/cookies` reviewed by a legal adviser, placeholder notice removed
- [ ] SMTP configured and a test enquiry received
- [ ] SPF and DKIM DNS records published
- [ ] Google Analytics ID and Search Console token added in Site Settings → Analytics
- [ ] `https://boylar.com/sitemap.xml` submitted to Search Console
- [ ] Admin password changed from the seeded one
- [ ] A database backup taken **and test-restored**
- [ ] `NEXT_PUBLIC_SITE_URL` set to the real https origin
