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
  email: 'info@boylar.com',
  phone: '+880 1943-696858',
  legalName: 'boylar',
  businessHours: 'Sunday–Thursday, 9:00–18:00 (GMT+6)',
  address: {
    line1: '',
    city: 'Dhaka',
    country: 'Bangladesh',
  },
  social: [{ platform: 'linkedin' as const, url: 'https://www.linkedin.com/company/boylar' }],
  googleAnalyticsId: 'G-QEH60Y1271',
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
    subtitle: 'What we collect, why we collect it, and what you can ask us to do with it.',
    content: rt(
      p(
        'This policy explains how boylar handles personal information collected through this website and in the course of providing services to clients. It applies to boylar.com and to the enquiry and quote forms on it.',
      ),

      h(2, 'Who we are'),
      p(
        'boylar is an information technology firm based in Dhaka, Bangladesh, providing software development, IT infrastructure, design, digital services, e-commerce and ERP work, and managed IT support. For any question about this policy, or to make a request about your data, write to info@boylar.com.',
      ),

      h(2, 'Information we collect'),
      h(3, 'Information you give us'),
      p(
        'When you submit the contact form or the quote form, we collect the details you enter: your name, email address, and message, and where you choose to provide them, your phone number, company name, the services you are interested in, and your indicated budget and timeline.',
      ),
      p(
        'If you apply for a role or send a speculative application by email, we receive whatever you include in that message, including your CV.',
      ),
      h(3, 'Information collected automatically'),
      p(
        'Like most websites, our hosting infrastructure records standard technical information when you visit: IP address, browser type and version, the pages requested, and the time of the request. We use Google Analytics to understand how the site is used in aggregate — which pages are read, how visitors arrive, and which devices they use.',
      ),
      p(
        'We do not use advertising trackers, we do not build behavioural profiles, and we do not sell data to anyone.',
      ),

      h(2, 'Why we use it'),
      ul([
        'To answer your enquiry — the primary and usually only reason we hold your details',
        'To prepare a proposal or quotation you have asked for',
        'To deliver and support services under a contract with you',
        'To understand, in aggregate, how the website is used so we can improve it',
        'To meet legal, tax, and accounting obligations',
      ]),
      p(
        'We do not send marketing email to people who have only submitted an enquiry. If we ever introduce a mailing list, joining it will be a separate and explicit action on your part.',
      ),

      h(2, 'How long we keep it'),
      ul([
        'Enquiries that do not become projects: retained for up to 24 months, then deleted',
        'Client records: retained for the duration of the engagement and for as long afterwards as tax and accounting law requires',
        'Job applications: retained for up to 12 months unless you ask us to remove them sooner',
        'Website analytics: retained according to the Google Analytics retention setting on our property',
      ]),

      h(2, 'Who else sees your information'),
      p(
        'We do not sell or rent personal information. We share it only where it is necessary to run the business, and only with providers who process it on our instructions:',
      ),
      ul([
        'Our hosting and infrastructure providers, who store the site and its database',
        'Google, for email delivery and website analytics',
        'Our accountants and professional advisers, where a record is relevant to their work',
        'A public authority, where we are required by law to disclose something',
      ]),
      p(
        'Some of these providers operate servers outside Bangladesh. Where that is the case, your information may be stored or processed abroad.',
      ),

      h(2, 'Client data we handle during projects'),
      p(
        'In the course of delivering services we may be given access to systems containing personal data belonging to our clients and their customers. In that situation boylar acts on the client’s instructions, the client remains responsible for that data, and our handling of it is governed by the contract and any confidentiality agreement between us — not by this policy.',
      ),
      p(
        'We limit access to the engineers working on the engagement, we use the client’s own environments where possible rather than copying data to ours, and we return or destroy working copies at the end of the work.',
      ),

      h(2, 'How we protect it'),
      ul([
        'Traffic to this site is encrypted in transit using TLS',
        'Administrative access to the CMS is restricted to named staff accounts',
        'Credentials are held in a password manager, not in shared documents or chat threads',
        'Access is removed when a staff member leaves',
      ]),
      p(
        'No system is perfectly secure. We aim to be honest about that rather than to imply a guarantee we cannot give.',
      ),

      h(2, 'Your choices'),
      p('You may ask us to:'),
      ul([
        'Tell you what personal information we hold about you',
        'Correct anything that is inaccurate',
        'Delete your information, where we are not required to keep it',
        'Stop using your information for a particular purpose',
      ]),
      p(
        'Write to info@boylar.com and we will respond within 30 days. We may ask you to confirm your identity before acting on a request.',
      ),

      h(2, 'Cookies'),
      p(
        'Our use of cookies and similar technologies is described separately in our Cookie Policy.',
      ),

      h(2, 'Children'),
      p(
        'This site is intended for businesses and is not directed at children. We do not knowingly collect information from anyone under 18.',
      ),

      h(2, 'Changes to this policy'),
      p(
        'If we change how we handle personal information, we will update this page and change the date at the top. Material changes will be noted clearly rather than made quietly.',
      ),

      h(2, 'Contact'),
      p(
        'Questions, requests, or complaints about this policy can be sent to info@boylar.com, or by post to boylar, Dhaka, Bangladesh.',
      ),
    ),
  },
  {
    title: 'Terms of Service',
    slug: 'terms',
    subtitle: 'The terms that govern this website and our working relationship.',
    content: rt(
      p(
        'These terms apply to your use of boylar.com. Where we are engaged to deliver work, a separate signed agreement or statement of work governs that engagement, and it takes precedence over anything on this page.',
      ),

      h(2, 'Using this website'),
      p(
        'You may read, print, and share the content of this site for your own business purposes. You may not republish it as your own, resell it, or use it to train a competing service without our written permission.',
      ),
      p('You agree not to:'),
      ul([
        'Attempt to gain unauthorised access to the site, its server, or its database',
        'Probe, scan, or test the vulnerability of the site without our prior written consent',
        'Use automated tools in a way that degrades the service for other visitors',
        'Submit false information, or another person’s details, through our forms',
      ]),

      h(2, 'Enquiries and quotations'),
      p(
        'Submitting an enquiry or quote request does not create a contract. Any figure we give in response is an estimate based on the information available at that point, and remains valid for 30 days unless we state otherwise.',
      ),
      p(
        'Work begins only once scope, price, and timeline are agreed in writing and any required deposit is received.',
      ),

      h(2, 'Content and accuracy'),
      p(
        'We write the material on this site carefully, including the technical articles, but it is general information rather than advice for your specific situation. Acting on it is your decision. Case studies describe work we have delivered; where a client is named, it is with their knowledge.',
      ),

      h(2, 'Intellectual property'),
      p(
        'The boylar name, logo, brand assets, and the text and design of this site belong to boylar unless stated otherwise.',
      ),
      p(
        'For client work, our standard position is that on final payment the client owns the source code, designs, and deliverables produced for them. We retain ownership of any pre-existing tools, libraries, or components we bring to the project, and grant a licence to use them as part of the delivered work. The signed agreement for each engagement sets this out precisely.',
      ),

      h(2, 'Third-party links'),
      p(
        'This site links to client websites and to external resources. We do not control those sites and are not responsible for their content, their availability, or their handling of your data.',
      ),

      h(2, 'Availability'),
      p(
        'We aim to keep this website available and correct, but we do not guarantee uninterrupted access. We may change, suspend, or withdraw any part of it without notice. Service-level commitments for client systems are set out in the relevant support agreement, not here.',
      ),

      h(2, 'Liability'),
      p(
        'To the extent permitted by law, boylar is not liable for indirect or consequential loss — including lost profit, lost revenue, or lost data — arising from your use of this website.',
      ),
      p(
        'Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.',
      ),

      h(2, 'Governing law'),
      p(
        'These terms are governed by the laws of the People’s Republic of Bangladesh, and the courts of Bangladesh have exclusive jurisdiction over any dispute arising from them.',
      ),

      h(2, 'Changes'),
      p(
        'We may update these terms. The version published on this page at the time you use the site is the one that applies.',
      ),

      h(2, 'Contact'),
      p('Questions about these terms can be sent to info@boylar.com.'),
    ),
  },
  {
    title: 'Cookie Policy',
    slug: 'cookies',
    subtitle: 'What this site stores on your device, and how to stop it.',
    content: rt(
      p(
        'A cookie is a small file a website asks your browser to store. This page lists what boylar.com uses and why.',
      ),

      h(2, 'What we use'),
      h(3, 'Strictly necessary'),
      p(
        'These make the site work and cannot be switched off. They handle the signed-in session for staff using the content management system at /admin, and protect forms against cross-site request forgery. They hold no information about you as a visitor.',
      ),
      h(3, 'Analytics'),
      p(
        'We use Google Analytics 4 to understand how the site is used: which pages are read, how visitors arrive, roughly where in the world they are, and what devices they use. These cookies are set by Google and are used to distinguish one visitor from another and to measure how long a session lasts.',
      ),
      p(
        'The reports we look at are aggregated. We do not use them to identify individual visitors, and we have not enabled advertising features or audience sharing on the property.',
      ),
      h(3, 'What we do not use'),
      p(
        'No advertising cookies. No retargeting pixels. No social media tracking widgets. No third-party marketing tags.',
      ),

      h(2, 'How to control cookies'),
      p(
        'Every major browser lets you block or delete cookies, in Settings under Privacy. You can also install Google’s official opt-out browser add-on to prevent Google Analytics from measuring your visits to any site.',
      ),
      p(
        'Blocking analytics cookies will not affect how this site works for you. Blocking strictly necessary cookies will prevent staff from signing in to the CMS, but has no effect on public pages.',
      ),

      h(2, 'Changes'),
      p(
        'If we add or remove a cookie, we will update this page. If we ever introduce a category that requires your consent, we will ask for it before setting anything.',
      ),

      h(2, 'Contact'),
      p('Questions about this policy can be sent to info@boylar.com.'),
    ),
  },
]
