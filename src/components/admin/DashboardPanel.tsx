import type { ServerProps, Where } from 'payload'

import Link from 'next/link'

/**
 * Replaces the blank space above Payload's default dashboard with the two
 * things an editor actually opens the CMS to find out: what is waiting for
 * them, and what is still unfinished.
 */

const card: React.CSSProperties = {
  background: 'var(--theme-elevation-50)',
  border: '1px solid var(--theme-elevation-100)',
  borderRadius: '4px',
  padding: 'calc(var(--base) * 0.75)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  textDecoration: 'none',
  color: 'inherit',
}

const figure: React.CSSProperties = {
  fontSize: '1.75rem',
  fontWeight: 600,
  lineHeight: 1.1,
}

const caption: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'var(--theme-elevation-600)',
}

function Tile({
  href,
  value,
  label,
  accent,
}: {
  href: string
  value: number
  label: string
  accent?: boolean
}) {
  return (
    <Link href={href} style={{ ...card, ...(accent && value > 0 ? { borderColor: '#7F77DD' } : {}) }}>
      <span style={{ ...figure, color: accent && value > 0 ? '#7F77DD' : undefined }}>{value}</span>
      <span style={caption}>{label}</span>
    </Link>
  )
}

export async function DashboardPanel({ payload, user }: ServerProps) {
  if (!payload) return null

  const count = async (
    collection: 'contact-submissions' | 'projects' | 'posts' | 'products' | 'services' | 'subscribers',
    where: Where = {},
  ) => (await payload.count({ collection, where })).totalDocs

  const [newEnquiries, draftProjects, draftPosts, projects, posts, services, subscribers] =
    await Promise.all([
      count('contact-submissions', { status: { equals: 'new' } }),
      count('projects', { _status: { equals: 'draft' } }),
      count('posts', { _status: { equals: 'draft' } }),
      count('projects', { _status: { equals: 'published' } }),
      count('posts', { _status: { equals: 'published' } }),
      count('services'),
      count('subscribers', { unsubscribedAt: { equals: null } }),
    ])

  const firstName = typeof user?.name === 'string' ? user.name.split(' ')[0] : null
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return (
    <div style={{ marginBottom: 'calc(var(--base) * 1.5)' }}>
      <h2 style={{ margin: '0 0 calc(var(--base) * 0.25)' }}>
        {firstName ? `Welcome back, ${firstName}` : 'boylar CMS'}
      </h2>
      <p style={{ ...caption, margin: '0 0 var(--base)' }}>
        Everything published here is live on the public site within the hour.
      </p>

      <div
        style={{
          display: 'grid',
          gap: 'calc(var(--base) * 0.5)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        }}
      >
        <Tile
          href="/admin/collections/contact-submissions?where[status][equals]=new"
          value={newEnquiries}
          label="New enquiries"
          accent
        />
        <Tile
          href="/admin/collections/projects?where[_status][equals]=draft"
          value={draftProjects + draftPosts}
          label="Unpublished drafts"
          accent
        />
        <Tile href="/admin/collections/projects" value={projects} label="Case studies live" />
        <Tile href="/admin/collections/posts" value={posts} label="Articles live" />
        <Tile href="/admin/collections/services" value={services} label="Services" />
        <Tile href="/admin/collections/subscribers" value={subscribers} label="Subscribers" />
      </div>

      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'calc(var(--base) * 0.5)',
          marginTop: 'var(--base)',
          fontSize: '0.8rem',
        }}
      >
        <Link href="/admin/collections/projects/create">+ New case study</Link>
        <Link href="/admin/collections/posts/create">+ New article</Link>
        <Link href="/admin/globals/site-settings">Site settings</Link>
        <Link href="/admin/globals/navigation">Navigation</Link>
        <a href={siteUrl} target="_blank" rel="noreferrer">
          View live site ↗
        </a>
      </nav>
    </div>
  )
}
