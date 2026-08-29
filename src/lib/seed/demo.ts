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

export const DEMO_PRODUCTS = [
  {
    title: 'FormFlow for WordPress',
    slug: 'demo-formflow-wordpress',
    productType: 'wordpress-plugin',
    platforms: ['wordpress'],
    availability: 'live',
    order: 1,
    featured: true,
    tagline: 'Conditional forms that do not need a page builder',
    summary:
      'A WordPress form plugin with real conditional logic, multi-step flows, and submissions stored in your own database rather than a third-party service.',
    body: rt(
      p(
        'Most WordPress form plugins either do too little or turn into a page builder. FormFlow does one thing: complex forms, stored on your own server.',
      ),
      h(2, 'Why we built it'),
      p(
        'We kept writing the same conditional-logic workarounds for client sites. Eventually it was cheaper to build the plugin properly than to keep patching around the gaps.',
      ),
    ),
    features: [
      {
        title: 'Real conditional logic',
        description: 'Show, hide, require, or skip fields based on any previous answer, nested to any depth.',
      },
      {
        title: 'Multi-step forms',
        description: 'Break long forms into steps with progress saved to the browser, so a refresh does not lose the entry.',
      },
      {
        title: 'Your database, your data',
        description: 'Submissions stay in your WordPress install. No external service, no per-submission fee.',
      },
      {
        title: 'Spam handling without CAPTCHA',
        description: 'Honeypots, timing checks, and rate limits — no puzzles for legitimate users to solve.',
      },
    ],
    specs: [
      { label: 'Version', value: '2.4.1' },
      { label: 'Requires WordPress', value: '6.2 or later' },
      { label: 'Requires PHP', value: '8.1 or later' },
      { label: 'Licence', value: 'GPLv2 or later' },
      { label: 'Updates', value: '1 year included' },
    ],
    pricing: {
      currency: 'USD',
      note: 'Prices exclude VAT. 14-day refund, no questions asked. Renewals are optional — the plugin keeps working.',
      tiers: [
        {
          name: 'Free',
          priceType: 'free',
          description: 'The core form builder, on one site.',
          features: ['Unlimited forms', 'Basic conditional logic', 'Community support'],
          ctaLabel: 'Download',
          ctaHref: '',
        },
        {
          name: 'Pro',
          priceType: 'fixed',
          price: 79,
          period: 'year',
          priceNote: 'up to 5 sites',
          highlighted: true,
          badge: 'Most popular',
          description: 'Everything most agencies need.',
          features: [
            'Multi-step forms',
            'Nested conditional logic',
            'Payment gateway fields',
            'Priority email support',
            'One year of updates',
          ],
          ctaLabel: 'Buy Pro',
          ctaHref: '',
        },
        {
          name: 'Agency',
          priceType: 'fixed',
          price: 249,
          period: 'year',
          priceNote: 'unlimited sites',
          description: 'For teams shipping many client sites.',
          features: [
            'Everything in Pro',
            'Unlimited sites',
            'White-label option',
            'Same-day support response',
          ],
          ctaLabel: 'Buy Agency',
          ctaHref: '',
        },
      ],
    },
    links: { website: 'https://example.com/formflow', docs: 'https://example.com/formflow/docs' },
    faqs: [
      {
        question: 'Does the plugin stop working if I do not renew?',
        answer:
          'No. The plugin keeps working indefinitely. Renewing only continues updates and support.',
      },
      {
        question: 'Can I migrate from another form plugin?',
        answer:
          'There is an importer for the three most common plugins. Fields and submissions come across; custom add-ons do not.',
      },
    ],
  },
  {
    title: 'Ledgerly',
    slug: 'demo-ledgerly',
    productType: 'web-app',
    platforms: ['web'],
    availability: 'beta',
    order: 2,
    featured: true,
    tagline: 'Invoicing and VAT returns for small firms',
    summary:
      'A hosted invoicing and bookkeeping app built around how small firms actually file — recurring invoices, expense capture, and a VAT return that reconciles itself.',
    body: rt(
      p(
        'Ledgerly came out of doing our own books badly for two years. It handles the parts that are tedious and error-prone, and stays out of the way for everything else.',
      ),
    ),
    features: [
      {
        title: 'Recurring invoices',
        description: 'Set a schedule once; reminders and late fees follow your rules without supervision.',
      },
      {
        title: 'Expense capture',
        description: 'Photograph a receipt and the line item is extracted, categorised, and attached.',
      },
      {
        title: 'VAT returns that reconcile',
        description: 'The return is built from the ledger, so the figures always match what you filed.',
      },
      {
        title: 'Accountant access',
        description: 'Give your accountant their own read-only login instead of emailing spreadsheets.',
      },
    ],
    specs: [
      { label: 'Hosting', value: 'Managed, EU and Singapore regions' },
      { label: 'Data export', value: 'CSV and JSON, any time' },
      { label: 'Uptime target', value: '99.9%' },
    ],
    pricing: {
      currency: 'USD',
      note: 'Billed monthly, cancel any time. Annual billing saves two months.',
      tiers: [
        {
          name: 'Solo',
          priceType: 'fixed',
          price: 9,
          period: 'month',
          priceNote: '1 user',
          description: 'For sole traders and freelancers.',
          features: ['Unlimited invoices', '50 expenses per month', 'Email support'],
          ctaLabel: 'Start free trial',
          ctaHref: '',
        },
        {
          name: 'Team',
          priceType: 'fixed',
          price: 29,
          period: 'month',
          priceNote: 'up to 5 users',
          highlighted: true,
          badge: 'Most popular',
          description: 'For small firms with a bookkeeper.',
          features: [
            'Everything in Solo',
            'Unlimited expenses',
            'Accountant access',
            'VAT return builder',
            'Priority support',
          ],
          ctaLabel: 'Start free trial',
          ctaHref: '',
        },
        {
          name: 'Enterprise',
          priceType: 'custom',
          description: 'Self-hosted, SSO, and a contract.',
          features: ['Self-hosted option', 'SSO / SAML', 'Custom SLA', 'Onboarding included'],
          ctaLabel: 'Talk to us',
          ctaHref: '/contact',
        },
      ],
    },
    links: { website: 'https://example.com/ledgerly', demo: 'https://example.com/ledgerly/demo' },
    faqs: [
      {
        question: 'It says beta — is it safe to use for real books?',
        answer:
          'Yes. Beta means the feature set is still moving, not that data is at risk. Backups run hourly and export is always available.',
      },
    ],
  },
  {
    title: 'ShiftBoard',
    slug: 'demo-shiftboard',
    productType: 'mobile-app',
    platforms: ['ios', 'android'],
    availability: 'live',
    order: 3,
    featured: false,
    tagline: 'Rota and shift swaps for shift-based teams',
    summary:
      'A staff scheduling app for restaurants, clinics, and retail — published rotas, swap requests that need approval, and a clock-in that works without signal.',
    body: rt(
      p(
        'Built for managers who currently run the rota on a group chat and a printed sheet. It replaces both without asking anyone to learn a system.',
      ),
    ),
    features: [
      {
        title: 'Publish and notify',
        description: 'Publishing a rota pushes it to everyone at once, with read receipts so you know it landed.',
      },
      {
        title: 'Swaps with approval',
        description: 'Staff arrange cover between themselves; nothing takes effect until a manager approves it.',
      },
      {
        title: 'Offline clock-in',
        description: 'Clock-ins queue locally and sync when signal returns — basements and stockrooms included.',
      },
    ],
    specs: [
      { label: 'Requires iOS', value: '16.0 or later' },
      { label: 'Requires Android', value: '10 or later' },
      { label: 'Size', value: 'About 24 MB' },
    ],
    pricing: {
      currency: 'USD',
      note: 'Priced per active staff member per month. Inactive staff are not billed.',
      tiers: [
        {
          name: 'Standard',
          priceType: 'fixed',
          price: 2,
          period: 'month',
          priceNote: 'per active staff member',
          highlighted: true,
          description: 'Everything, for teams up to 50.',
          features: ['Unlimited rotas', 'Shift swaps', 'Offline clock-in', 'Export to payroll'],
          ctaLabel: 'Start free trial',
          ctaHref: '',
        },
        {
          name: 'Multi-site',
          priceType: 'custom',
          description: 'For groups running several locations.',
          features: ['Everything in Standard', 'Cross-site staff pooling', 'Consolidated reporting'],
          ctaLabel: 'Talk to us',
          ctaHref: '/contact',
        },
      ],
    },
    links: { appStore: 'https://example.com/shiftboard/ios', playStore: 'https://example.com/shiftboard/android' },
    faqs: [],
  },
  {
    title: 'Retail POS Suite',
    slug: 'demo-retail-pos-suite',
    productType: 'solution',
    platforms: ['windows', 'web', 'self-hosted'],
    availability: 'live',
    order: 4,
    featured: false,
    tagline: 'A ready-made till, stock, and reporting system',
    summary:
      'A retail system we deploy and tailor rather than build from scratch — till, stock control, supplier orders, and reporting, configured to your catalogue in about two weeks.',
    body: rt(
      p(
        'Most retail businesses need the same eighty per cent. This is that eighty per cent, already built and tested, with the remaining twenty configured for you.',
      ),
      h(2, 'What gets tailored'),
      ul([
        'Your product catalogue, pricing rules, and tax setup',
        'Receipt and label layouts',
        'Integration with your existing accounting system',
        'Staff roles and till permissions',
      ]),
    ),
    features: [
      {
        title: 'Offline-first till',
        description: 'Keeps selling through an internet outage and reconciles automatically afterwards.',
      },
      {
        title: 'Stock across locations',
        description: 'One stock figure per product across every shop and the stockroom.',
      },
      {
        title: 'Supplier ordering',
        description: 'Reorder points generate draft purchase orders you review rather than write.',
      },
    ],
    specs: [
      { label: 'Deployment', value: 'On-premise or managed hosting' },
      { label: 'Typical setup', value: '2–3 weeks' },
      { label: 'Training', value: 'Included' },
    ],
    pricing: {
      currency: 'USD',
      note: 'Licence is one-time per till. Support and hosting are quoted separately.',
      tiers: [
        {
          name: 'Single shop',
          priceType: 'fixed',
          price: 1200,
          period: 'once',
          priceNote: 'one till, plus setup',
          description: 'One location, one till.',
          features: ['Full system', 'Catalogue setup', 'Staff training', '3 months support'],
          ctaLabel: 'Request a quote',
          ctaHref: '/quote',
        },
        {
          name: 'Multi-shop',
          priceType: 'custom',
          highlighted: true,
          description: 'Several locations and tills.',
          features: [
            'Everything in Single shop',
            'Cross-location stock',
            'Consolidated reporting',
            'Ongoing support contract',
          ],
          ctaLabel: 'Request a quote',
          ctaHref: '/quote',
        },
      ],
    },
    links: {},
    faqs: [
      {
        question: 'Can it run our existing barcode scanners and printers?',
        answer:
          'Almost certainly. We check your hardware list during scoping and tell you before you commit if something needs replacing.',
      },
    ],
  },
]
