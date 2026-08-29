import { h, p, rt, ul } from './lexical'

export const CATEGORIES = [
  { name: 'Software & App Development', slug: 'software-development' },
  { name: 'IT Hardware & Infrastructure', slug: 'hardware-infrastructure' },
  { name: 'Creative Design & Branding', slug: 'creative-design' },
  { name: 'Digital Content & Services', slug: 'digital-content' },
  { name: 'E-Commerce & Enterprise', slug: 'e-commerce-enterprise' },
  { name: 'Managed IT & Security', slug: 'managed-it-security' },
]

export const SERVICES = [
  {
    title: 'Software & App Development',
    slug: 'software-development',
    categorySlug: 'software-development',
    icon: 'code-2',
    order: 1,
    featured: true,
    tagline: 'Custom systems built to outlive the problem they solve',
    summary:
      'Web applications, cross-platform mobile apps, and the APIs that hold them together — engineered for the load you will have in three years, not the one you have today.',
    body: rt(
      p(
        'Most business software fails slowly. It works on launch day, then accumulates workarounds until nobody trusts it. We build the other kind: systems with a clear domain model, a test suite that actually runs, and documentation a new developer can follow.',
      ),
      h(2, 'How we work'),
      p(
        'Two-week sprints with a working demo at the end of each one. You see progress continuously rather than waiting months for a reveal. Your team gets direct access to the engineers writing the code — no account manager in the middle relaying requirements.',
      ),
      h(2, 'What you own at the end'),
      p(
        'The source code, the infrastructure definitions, the deployment pipeline, and the documentation. No vendor lock-in and no proprietary framework you can only maintain through us.',
      ),
    ),
    features: [
      {
        title: 'Custom web applications',
        description:
          'Internal tools, customer portals, dashboards, and workflow systems built on modern, well-supported frameworks.',
      },
      {
        title: 'Cross-platform mobile apps',
        description:
          'One codebase shipping to both iOS and Android via React Native or Flutter, with native modules where performance demands them.',
      },
      {
        title: 'API & integration engineering',
        description:
          'REST and GraphQL services, third-party integrations, and the message queues that keep them reliable under load.',
      },
      {
        title: 'Legacy modernisation',
        description:
          'Incremental migration off ageing systems, keeping the business running throughout rather than betting on a big-bang cutover.',
      },
      {
        title: 'Automated testing & CI/CD',
        description:
          'Test coverage and deployment pipelines from day one, so shipping stays cheap as the codebase grows.',
      },
    ],
    deliverables: [
      'Working software, deployed and monitored',
      'Full source code in your own repository',
      'Infrastructure-as-code and deployment pipeline',
      'Technical documentation and architecture notes',
      'Handover sessions with your in-house team',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Laravel',
      'Python',
      'React Native',
      'Flutter',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    faqs: [
      {
        question: 'How long does a typical project take?',
        answer:
          'A focused MVP usually runs 8–14 weeks. A full enterprise platform is typically 4–9 months. We scope precisely after a discovery phase rather than quoting a number before we understand the problem.',
      },
      {
        question: 'Can you work alongside our existing development team?',
        answer:
          'Yes. We regularly embed with in-house teams, either taking a defined workstream or supplying specific expertise your team does not have on staff.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'You can take the system in-house — everything is documented and yours — or keep us on a support retainer. Both are common; neither is compulsory.',
      },
    ],
  },
  {
    title: 'IT Hardware & Infrastructure',
    slug: 'it-infrastructure',
    categorySlug: 'hardware-infrastructure',
    icon: 'server',
    order: 2,
    featured: true,
    tagline: 'The layer everything else depends on',
    summary:
      'Servers, networks, and workstations specified, installed, and documented — so your infrastructure is something you understand rather than something you hope keeps working.',
    body: rt(
      p(
        'Infrastructure only gets attention when it breaks. We design it so that it does not, and so that when something does fail, the fix is obvious rather than archaeological.',
      ),
      h(2, 'Specified for your actual load'),
      p(
        'We size hardware against measured requirements, not vendor upsell. That often means spending less than you expected on servers and more than you expected on backup and redundancy — which is the correct trade.',
      ),
      h(2, 'Documented as we go'),
      p(
        'Every deployment ships with network diagrams, an asset register, IP allocations, and credentials handed over in your password manager. Your infrastructure should not live in one engineer’s memory.',
      ),
    ),
    features: [
      {
        title: 'Server deployment & virtualisation',
        description:
          'Physical and virtualised server environments, sized against real workload measurements and built for maintenance access.',
      },
      {
        title: 'Structured network design',
        description:
          'Switching, routing, VLAN segmentation, and structured cabling that a future engineer can trace without guesswork.',
      },
      {
        title: 'Firewall & perimeter security',
        description:
          'Firewall configuration, VPN access for remote staff, and network segmentation that contains an incident rather than spreading it.',
      },
      {
        title: 'Workstation procurement & rollout',
        description:
          'Hardware specified for the work being done, imaged consistently, and tracked in an asset register.',
      },
      {
        title: 'Backup & disaster recovery',
        description:
          'Automated, monitored, off-site backups — and restore drills, because an untested backup is a guess.',
      },
    ],
    deliverables: [
      'Installed and configured hardware',
      'Network topology diagrams and IP schedule',
      'Asset register with warranty and lifecycle dates',
      'Tested backup and recovery procedure',
      'Runbooks for routine operations',
    ],
    techStack: [
      'VMware',
      'Proxmox',
      'Ubuntu Server',
      'Windows Server',
      'pfSense',
      'MikroTik',
      'Ubiquiti',
      'Veeam',
      'Zabbix',
    ],
    faqs: [
      {
        question: 'Do you supply the hardware or do we buy it ourselves?',
        answer:
          'Either. We can procure through our supplier accounts, or specify exactly what to buy and let you purchase it directly. We tell you which is cheaper for your case.',
      },
      {
        question: 'Can you support infrastructure you did not install?',
        answer:
          'Yes, after an audit. We document what exists, flag the risks, and agree a remediation plan before taking on support.',
      },
    ],
  },
  {
    title: 'Creative Design & Branding',
    slug: 'design-branding',
    categorySlug: 'creative-design',
    icon: 'palette',
    order: 3,
    featured: true,
    tagline: 'Design that survives contact with engineering',
    summary:
      'Brand identity, product UI, and design systems produced as buildable specifications — not as pretty pictures that fall apart the moment a developer opens them.',
    body: rt(
      p(
        'A lot of design work looks excellent in a presentation and becomes unbuildable in a sprint. Because our designers sit next to our engineers, what you approve is what gets shipped.',
      ),
      h(2, 'Systems, not screens'),
      p(
        'We deliver components, tokens, and rules — so your team can build the twentieth screen without commissioning a twentieth design.',
      ),
      h(2, 'Accessibility is part of the spec'),
      p(
        'Contrast ratios, focus states, and keyboard paths are designed deliberately rather than retrofitted after an audit fails.',
      ),
    ),
    features: [
      {
        title: 'Brand identity',
        description:
          'Logo, colour, typography, and usage guidelines, delivered in every format your team and printers will need.',
      },
      {
        title: 'Product UI/UX design',
        description:
          'Research, user flows, wireframes, and high-fidelity interfaces built as reusable components in Figma.',
      },
      {
        title: 'Design systems',
        description:
          'Tokenised components documented for engineering handoff, so design and code stay in sync as the product grows.',
      },
      {
        title: 'Marketing collateral',
        description:
          'Pitch decks, brochures, signage, and social templates that hold the brand together across every touchpoint.',
      },
      {
        title: 'Accessibility review',
        description:
          'WCAG AA audits against real assistive technology, with prioritised, specific remediation notes.',
      },
    ],
    deliverables: [
      'Brand guidelines document',
      'Logo suite in vector and raster formats',
      'Figma component library with tokens',
      'Engineering handoff specifications',
      'Editable source files, fully owned by you',
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Storybook'],
    faqs: [
      {
        question: 'Do we own the design files?',
        answer:
          'Completely. You receive the editable source files and full rights on final payment. Nothing is withheld to keep you dependent on us.',
      },
      {
        question: 'Can you redesign without rebuilding everything?',
        answer:
          'Usually yes. We often re-skin an existing product by replacing the design layer while the underlying application stays untouched.',
      },
    ],
  },
  {
    title: 'Digital Services & Content',
    slug: 'digital-marketing',
    categorySlug: 'digital-content',
    icon: 'megaphone',
    order: 4,
    featured: false,
    tagline: 'Measured growth, not vanity metrics',
    summary:
      'Technical SEO, content strategy, and campaign production tied to pipeline — reported against leads and revenue rather than impressions.',
    body: rt(
      p(
        'Marketing reports are easy to make flattering. We report on the numbers that map to money: qualified enquiries, cost per lead, and which channel produced them.',
      ),
      h(2, 'Technical SEO first'),
      p(
        'Content cannot rescue a site that renders slowly, blocks crawlers, or has no coherent internal structure. We fix the foundation before commissioning a single article.',
      ),
    ),
    features: [
      {
        title: 'Technical SEO',
        description:
          'Core Web Vitals, crawlability, structured data, and information architecture — measured before and after.',
      },
      {
        title: 'Content strategy & production',
        description:
          'Keyword and intent research, editorial planning, and writing by people who understand the technical subject matter.',
      },
      {
        title: 'Social media management',
        description:
          'Channel strategy, content calendars, and community management on the platforms your buyers actually use.',
      },
      {
        title: 'Video & motion production',
        description:
          'Product demos, explainers, and testimonial films, from script through to final edit.',
      },
      {
        title: 'Analytics & attribution',
        description:
          'Correct tracking, honest dashboards, and reporting that connects spend to pipeline.',
      },
    ],
    deliverables: [
      'Technical SEO audit with prioritised fixes',
      'Editorial calendar and content briefs',
      'Published content and campaign assets',
      'Analytics dashboard configured to your funnel',
      'Monthly performance reporting',
    ],
    techStack: [
      'Google Analytics 4',
      'Google Search Console',
      'Ahrefs',
      'Screaming Frog',
      'Meta Business Suite',
      'Premiere Pro',
    ],
    faqs: [
      {
        question: 'How quickly does SEO show results?',
        answer:
          'Technical fixes can move rankings within weeks. Content-driven growth typically takes three to six months to compound. Anyone promising page one in thirty days is selling something else.',
      },
    ],
  },
  {
    title: 'E-Commerce & Enterprise ERP',
    slug: 'ecommerce-erp',
    categorySlug: 'e-commerce-enterprise',
    icon: 'shopping-cart',
    order: 5,
    featured: true,
    tagline: 'Storefront and back office as one system',
    summary:
      'Online stores, marketplaces, and ERP integrations where stock, orders, and accounting reconcile automatically instead of through a monthly spreadsheet.',
    body: rt(
      p(
        'The expensive problem in e-commerce is rarely the storefront. It is the gap between the storefront and everything behind it — inventory drifting out of sync, orders re-keyed by hand, finance reconciling by exception.',
      ),
      h(2, 'Integrated from the start'),
      p(
        'We treat the store, the warehouse, and the accounting system as one flow. Stock levels, pricing, orders, and invoices move between them without human intervention.',
      ),
    ),
    features: [
      {
        title: 'Custom e-commerce platforms',
        description:
          'Storefronts built for your catalogue and margins, rather than a template bent until it nearly fits.',
      },
      {
        title: 'Multi-vendor marketplaces',
        description:
          'Vendor onboarding, commission logic, split payouts, and the reporting each side needs.',
      },
      {
        title: 'Payment gateway integration',
        description:
          'Local and international gateways with correct reconciliation, refunds, and failure handling.',
      },
      {
        title: 'ERP customisation & integration',
        description:
          'Connecting inventory, procurement, and finance so each number has exactly one source of truth.',
      },
      {
        title: 'Inventory automation',
        description:
          'Real-time stock sync across channels and warehouses, with reorder points and low-stock alerts.',
      },
    ],
    deliverables: [
      'Live storefront with payment and shipping configured',
      'ERP and accounting integrations',
      'Admin and fulfilment training for your team',
      'Data migration from your existing platform',
      'Operational runbook',
    ],
    techStack: [
      'Next.js',
      'Medusa',
      'WooCommerce',
      'Stripe',
      'SSLCommerz',
      'Odoo',
      'ERPNext',
      'PostgreSQL',
    ],
    faqs: [
      {
        question: 'Can you migrate our existing store without losing SEO?',
        answer:
          'Yes. Migration includes a full URL map and redirects, so existing rankings and inbound links survive the move.',
      },
      {
        question: 'Do you work with our current ERP?',
        answer:
          'If it exposes an API or database access, almost certainly. We audit it first and tell you plainly if integration is not viable.',
      },
    ],
  },
  {
    title: 'Managed IT Support & Security',
    slug: 'managed-it-security',
    categorySlug: 'managed-it-security',
    icon: 'shield-check',
    order: 6,
    featured: false,
    tagline: 'Someone accountable when it breaks',
    summary:
      'Helpdesk, monitoring, patching, and security operations under a defined SLA — so problems are handled before they reach your team.',
    body: rt(
      p(
        'Managed support is judged on the bad day, not the good one. What matters is response time when something is down and whether the backup restores when you finally need it.',
      ),
      h(2, 'Monitored, not just supported'),
      p(
        'We watch systems continuously and act on alerts before users notice. The majority of the work happens before anyone raises a ticket.',
      ),
      h(2, 'Security as routine practice'),
      p(
        'Patching on a schedule, least-privilege access, audited backups, and a written incident plan — the unglamorous work that prevents most breaches.',
      ),
    ),
    features: [
      {
        title: 'Helpdesk with defined SLA',
        description:
          'A named channel with agreed response and resolution targets, reported against honestly each month.',
      },
      {
        title: '24/7 monitoring & alerting',
        description:
          'Servers, networks, and applications watched continuously, with escalation paths that reach a human.',
      },
      {
        title: 'Patch & vulnerability management',
        description:
          'Scheduled patching with a tested rollback path, plus tracking of known vulnerabilities in your stack.',
      },
      {
        title: 'Security audits',
        description:
          'Configuration review, access audits, and penetration testing with a prioritised remediation plan.',
      },
      {
        title: 'Backup verification',
        description:
          'Scheduled restore drills, because a backup nobody has restored is an assumption, not a safeguard.',
      },
    ],
    deliverables: [
      'Signed SLA with response and resolution targets',
      'Monitoring dashboard and alert routing',
      'Monthly service and security report',
      'Incident response plan',
      'Quarterly review with your leadership',
    ],
    techStack: ['Zabbix', 'Grafana', 'Wazuh', 'Ansible', 'Cloudflare', 'Bitwarden', 'Veeam'],
    faqs: [
      {
        question: 'What are your response times?',
        answer:
          'Critical incidents within one hour, high priority within four business hours, standard requests within one business day. Exact targets are set in your SLA.',
      },
      {
        question: 'Is there a minimum contract length?',
        answer:
          'Managed support runs on a twelve-month term with a ninety-day exit clause. Project work has no ongoing commitment at all.',
      },
    ],
  },
]

export const SITE_SETTINGS = {
  siteName: 'boylar',
  tagline: 'Your full-service IT partner',
  description:
    'boylar is a full-service IT firm delivering software development, infrastructure, design, and managed support for businesses that depend on their technology.',
  email: 'hello@boylar.com',
  supportEmail: 'support@boylar.com',
  phone: '',
  legalName: 'boylar',
  businessHours: 'Sunday–Thursday, 9:00–18:00 (GMT+6)',
  address: {
    line1: '',
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  social: [{ platform: 'linkedin' as const, url: 'https://www.linkedin.com/company/boylar' }],
}

export const NAVIGATION = {
  ctaLabel: 'Get a quote',
  ctaHref: '/quote',
  header: [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: [
    {
      heading: 'Services',
      links: [
        { label: 'Software Development', href: '/services/software-development' },
        { label: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { label: 'Design & Branding', href: '/services/design-branding' },
        { label: 'E-Commerce & ERP', href: '/services/ecommerce-erp' },
        { label: 'Managed IT & Security', href: '/services/managed-it-security' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Our Work', href: '/work' },
        { label: 'Insights', href: '/insights' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ],
}

export const LEGAL_PAGES = [
  {
    title: 'Privacy Policy',
    slug: 'privacy',
    subtitle: 'How we collect, use, and protect your information.',
    content: rt(
      p(
        'This template sets out the structure of a privacy policy. Review it with a qualified legal adviser and replace this notice before publishing — it is a starting point, not legal advice.',
      ),
      h(2, 'Information we collect'),
      p(
        'When you submit an enquiry or subscribe to updates, we collect the name, email address, phone number, and company details you provide, along with the content of your message.',
      ),
      h(2, 'How we use your information'),
      ul([
        'To respond to your enquiry and provide the services you request',
        'To send updates you have explicitly subscribed to',
        'To meet our legal, accounting, and contractual obligations',
      ]),
      h(2, 'Sharing'),
      p(
        'We do not sell personal information. We share it only with service providers who process it on our behalf under contract, and where the law requires disclosure.',
      ),
      h(2, 'Retention'),
      p(
        'Enquiries are retained for as long as needed to serve you and to meet record-keeping obligations, after which they are deleted.',
      ),
      h(2, 'Your rights'),
      p(
        'You may request access to, correction of, or deletion of your personal information at any time by contacting us.',
      ),
      h(2, 'Contact'),
      p('Questions about this policy can be sent to hello@boylar.com.'),
    ),
  },
  {
    title: 'Terms of Service',
    slug: 'terms',
    subtitle: 'The terms governing use of this website and our services.',
    content: rt(
      p(
        'This template sets out the structure of a terms of service document. Review it with a qualified legal adviser and replace this notice before publishing.',
      ),
      h(2, 'Use of this website'),
      p(
        'This site is provided for information. You agree not to use it unlawfully or in any way that impairs its availability for others.',
      ),
      h(2, 'Engagements'),
      p(
        'Services are governed by a separate written agreement covering scope, deliverables, timelines, and fees. Nothing on this website constitutes an offer or a contract.',
      ),
      h(2, 'Intellectual property'),
      p(
        'Site content and branding remain our property. Ownership of project deliverables transfers to the client as set out in the relevant engagement agreement.',
      ),
      h(2, 'Limitation of liability'),
      p(
        'To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website.',
      ),
      h(2, 'Contact'),
      p('Questions about these terms can be sent to hello@boylar.com.'),
    ),
  },
  {
    title: 'Cookie Policy',
    slug: 'cookies',
    subtitle: 'What we store in your browser, and why.',
    content: rt(
      p(
        'This template sets out the structure of a cookie policy. Review it with a qualified legal adviser and replace this notice before publishing.',
      ),
      h(2, 'Essential cookies'),
      p(
        'Required for the site to function — for example, keeping an administrator signed in to the content management system. These cannot be disabled.',
      ),
      h(2, 'Analytics cookies'),
      p(
        'If analytics is enabled, we use it to understand which pages are useful. This data is aggregated and is not used to identify individuals.',
      ),
      h(2, 'Managing cookies'),
      p(
        'Your browser can block or delete cookies. Blocking essential cookies may prevent parts of the site from working.',
      ),
    ),
  },
]
