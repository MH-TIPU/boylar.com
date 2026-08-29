import { h, p, rt, ul } from './lexical'

/**
 * PLACEHOLDER CONTENT — for design review only.
 *
 * Every client name, quote, and metric below is invented. Publishing fabricated
 * case studies and testimonials is both misleading and, for testimonials,
 * unlawful in most jurisdictions. Run `pnpm seed:demo:clear` before launch.
 */

export const DEMO_PROJECTS = [
  {
    title: 'Warehouse portal and ERP integration',
    slug: 'demo-warehouse-portal',
    client: 'Northwind Logistics',
    industry: 'Logistics & Supply Chain',
    year: 2025,
    featured: true,
    summary:
      'A custom operations portal replacing a spreadsheet-driven despatch process, wired directly into the existing ERP so stock and billing reconcile without manual re-keying.',
    metrics: [
      { value: '−41%', label: 'despatch errors' },
      { value: '3.2×', label: 'faster order processing' },
      { value: '12hrs', label: 'saved per week' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    challenge: rt(
      p(
        'Despatch ran on a shared spreadsheet that three teams edited simultaneously. Orders were re-keyed into the ERP by hand each evening, and reconciliation errors surfaced days later at the invoicing stage.',
      ),
    ),
    solution: rt(
      p(
        'We built an operations portal as the single point of entry for despatch, syncing bidirectionally with the ERP over its existing API.',
      ),
      h(2, 'Key decisions'),
      ul([
        'Kept the ERP as the system of record rather than migrating off it',
        'Made the sync idempotent so a failed run could be safely retried',
        'Shipped a read-only view first, so staff trusted the data before relying on it',
      ]),
    ),
    results: rt(
      p(
        'Manual re-keying was eliminated entirely. Reconciliation moved from a weekly exception process to a daily automatic one.',
      ),
    ),
  },
  {
    title: 'Head office network and server rebuild',
    slug: 'demo-office-network-rebuild',
    client: 'Apex Financial',
    industry: 'Finance & Fintech',
    year: 2025,
    featured: true,
    summary:
      'A full infrastructure rebuild across two floors — segmented network, virtualised servers, and a backup regime that had actually been restore-tested.',
    metrics: [
      { value: '99.98%', label: 'uptime since cutover' },
      { value: '0', label: 'unplanned outages' },
      { value: '18min', label: 'verified restore time' },
    ],
    techStack: ['Proxmox', 'pfSense', 'Ubiquiti', 'Veeam', 'Zabbix'],
    challenge: rt(
      p(
        'A flat network with no segmentation, undocumented cabling, and a backup job that had been failing silently for seven months.',
      ),
    ),
    solution: rt(
      p(
        'We audited and documented the existing estate, then rebuilt it in stages over four weekends to avoid business disruption.',
      ),
      ul([
        'VLAN segmentation isolating finance systems from general office traffic',
        'Virtualised servers with documented failover',
        'Monitored backups with a scheduled quarterly restore drill',
      ]),
    ),
    results: rt(
      p(
        'The estate is now fully documented, monitored, and covered by a tested recovery procedure with a measured restore time.',
      ),
    ),
  },
  {
    title: 'Brand system and product interface',
    slug: 'demo-brand-and-product-design',
    client: 'Nova Health',
    industry: 'Healthcare',
    year: 2024,
    featured: true,
    summary:
      'A complete brand identity and an accessible design system for a patient-facing mobile product, delivered as buildable components rather than flat mockups.',
    metrics: [
      { value: 'AA', label: 'WCAG conformance' },
      { value: '54', label: 'documented components' },
      { value: '−60%', label: 'design-to-build time' },
    ],
    techStack: ['Figma', 'Storybook', 'React Native'],
    challenge: rt(
      p(
        'Every new screen required a bespoke design round, and accessibility issues were being found only after release.',
      ),
    ),
    solution: rt(
      p(
        'We replaced one-off screen design with a tokenised component library, specified for engineering handoff and audited for contrast and focus behaviour up front.',
      ),
    ),
    results: rt(
      p(
        'The product team now assembles most new screens from existing components without commissioning new design work.',
      ),
    ),
  },
]

export const DEMO_TESTIMONIALS = [
  {
    name: 'Michael Chen',
    role: 'Managing Director',
    company: 'Northwind Logistics',
    featured: true,
    quote:
      'They pushed back on half of what we asked for and were right every time. The portal does less than we originally specified and works far better for it.',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Head of Operations',
    company: 'Nova Health',
    featured: true,
    quote:
      'The design system paid for itself within two months. Our engineers stopped waiting on design for routine screens entirely.',
  },
  {
    name: 'David Wilson',
    role: 'Chief Executive',
    company: 'Apex Financial',
    featured: true,
    quote:
      'The first thing they did was tell us our backups had not worked since March. Nobody else had checked. That set the tone for the whole engagement.',
  },
]

export const DEMO_POSTS = [
  {
    title: 'Your backup is a guess until you have restored it',
    slug: 'demo-restore-drills',
    excerpt:
      'Most organisations we audit have backups running and no evidence any of them work. Here is the drill we run, and what it usually turns up.',
    tags: ['Infrastructure', 'Security'],
    content: rt(
      p(
        'A backup job reporting success tells you a file was written. It does not tell you the file is complete, readable, or recent enough to be useful.',
      ),
      h(2, 'What a restore drill involves'),
      ul([
        'Pick a system at random, not the one you are confident about',
        'Restore it to isolated hardware, not over the live copy',
        'Time it, and record who was needed to do it',
        'Verify the data is current, not just present',
      ]),
      p(
        'The number that matters is not whether the restore worked. It is how long it took and whether it needed one specific person to be reachable.',
      ),
    ),
  },
  {
    title: 'The second year is where software gets expensive',
    slug: 'demo-second-year-cost',
    excerpt:
      'Launch cost is the number everyone negotiates. Maintenance cost is the number that decides whether the project was worth doing.',
    tags: ['Engineering'],
    content: rt(
      p(
        'Software is usually priced on the effort to reach launch. That framing hides where the money actually goes.',
      ),
      h(2, 'What drives year-two cost'),
      ul([
        'How much of the system a new developer can understand without help',
        'Whether tests catch regressions or merely exist',
        'Whether deployment is a routine action or an event',
      ]),
      p(
        'None of these are visible at launch, which is exactly why they get traded away during the build.',
      ),
    ),
  },
]

export const DEMO_CAREERS = [
  {
    title: 'Senior Full-Stack Engineer',
    slug: 'demo-senior-fullstack-engineer',
    department: 'Engineering' as const,
    location: 'Dhaka, Bangladesh',
    workplace: 'hybrid' as const,
    employmentType: 'full-time' as const,
    level: 'Senior' as const,
    summary:
      'Build and own client systems end to end, from data model to deployment, with direct client contact and no layers of account management in between.',
    responsibilities: [
      'Design and build web applications in TypeScript across the stack',
      'Own deployment, monitoring, and the production behaviour of what you ship',
      'Work directly with clients to turn vague requirements into concrete scope',
      'Review other engineers’ work and be reviewed in turn',
    ],
    requirements: [
      'Five or more years building production web applications',
      'Strong TypeScript, React, and SQL',
      'Comfortable owning infrastructure — containers, CI, and observability',
      'Able to explain technical trade-offs to a non-technical client',
    ],
    benefits: [
      'Direct client contact, no account-manager relay',
      'Hardware and tooling budget',
      'Paid learning time and conference attendance',
    ],
  },
  {
    title: 'Infrastructure Engineer',
    slug: 'demo-infrastructure-engineer',
    department: 'Infrastructure' as const,
    location: 'Dhaka, Bangladesh',
    workplace: 'on-site' as const,
    employmentType: 'full-time' as const,
    level: 'Mid-level' as const,
    summary:
      'Design, deploy, and document client infrastructure — networks, servers, and the monitoring that keeps them honest.',
    responsibilities: [
      'Specify and deploy server and network infrastructure',
      'Build and verify backup and recovery procedures',
      'Document estates so they are maintainable by someone other than you',
      'Respond to incidents under a defined SLA',
    ],
    requirements: [
      'Three or more years in infrastructure or systems administration',
      'Solid Linux, virtualisation, and network fundamentals',
      'Experience with monitoring and alerting in production',
    ],
    benefits: ['On-call compensated separately', 'Certification funding', 'Hardware budget'],
  },
]
