/**
 * Real client work and published articles. Seeded by `pnpm seed` so a fresh
 * production database comes up with the same content the CMS holds here.
 *
 * Case study copy describes what was delivered and what the client does. No
 * performance figures are claimed unless the client has supplied and approved
 * them — add those through the CMS `metrics` field rather than inventing them.
 */
import { h, p, rt, ul } from './lexical'

export const PROJECTS = [
  {
    slug: 'mediastar-limited',
    title: 'Corporate site for the parent of Prothom Alo',
    client: 'Mediastar Limited',
    summary:
      'A corporate identity site for the media group behind Prothom Alo — seven business units, nearly a thousand employees, and a publishing history going back to 1998 — presented in one place for advertisers, partners, and recruits.',
    industry: 'Media & Entertainment' as const,
    serviceSlugs: ['software-development', 'design-branding'],
    url: 'https://www.mediastarbd.com/',
    featured: true,
    techStack: ['Next.js', 'Responsive layout', 'CMS-managed content'],
    challenge: rt(
      p(
        'Mediastar Limited is the holding company behind Prothom Alo, the largest Bengali-language news brand in the world, read in print by around five million people a day. The group also runs six further business units.',
      ),
      p(
        'The brands were well known. The company behind them was not. Advertisers, prospective partners, and job candidates researching Mediastar found the newspapers easily and the parent organisation barely at all — which made the group look smaller than it is.',
      ),
    ),
    solution: rt(
      p(
        'A corporate site organised around the group rather than around any single title: what Mediastar owns, how long it has been operating, and who runs it.',
      ),
      ul([
        'A business-unit structure that gives each of the seven divisions its own space without burying the others',
        'Company facts — founding year, headcount, unit count — presented as verifiable figures rather than marketing adjectives',
        'An awards section covering the group’s WAN-IFRA South Asian Digital Media recognitions',
        'A leadership section carrying the editor’s statement of direction',
      ]),
    ),
    results: rt(
      p(
        'Mediastar now has a single corporate address on the web that stands separately from its mastheads. Advertisers and partners researching the group land on the company rather than on one of its newspapers.',
      ),
    ),
  },
  {
    slug: 'prothoma-prokashan',
    title: 'Bengali book catalogue and online storefront',
    client: 'Prothoma Prokashan',
    summary:
      'A browsable catalogue and storefront for one of Bangladesh’s significant publishing houses — hundreds of titles across a dozen categories, with author pages, pre-orders, and a fully Bengali reading experience.',
    industry: 'Retail & E-Commerce' as const,
    serviceSlugs: ['ecommerce-erp', 'software-development'],
    url: 'https://www.prothomaprokashan.com/',
    featured: true,
    techStack: ['E-commerce storefront', 'Bengali typography', 'Catalogue search'],
    challenge: rt(
      p(
        'Prothoma Prokashan publishes across history, liberation-war writing, fiction, essays and research, science, and children’s books — a catalogue in the hundreds of titles, with a roster of authors readers search for by name.',
      ),
      p(
        'A catalogue that size is only useful if a reader can get to the one book they want. It also had to work in Bengali throughout: not an English site with Bengali pasted in, but correct type, correct numerals, and category and author names that read naturally.',
      ),
    ),
    solution: rt(
      ul([
        'A category system covering the full catalogue, with live title counts so readers can see the depth of each section',
        'Author pages that collect every title by a writer in one place',
        'A recently-published shelf and pre-order support for titles ahead of release',
        'Bengali typography and Bengali numerals used consistently across the interface, not only in body copy',
        'A publisher blog and a stockist page for readers who buy in person',
      ]),
    ),
    results: rt(
      p(
        'The full catalogue is now navigable by category, by author, and by release date, and the storefront reads as a Bengali publication rather than as a translated template.',
      ),
    ),
  },
  {
    slug: 'millionx-bangladesh',
    title: 'Digital home for a national AI capability initiative',
    client: 'MillionX Bangladesh',
    summary:
      'The public platform for an independent national initiative working to build AI capability across Bangladesh — connecting government, industry, academia, and the diaspora around one agenda.',
    industry: 'Government & NGO' as const,
    serviceSlugs: ['software-development', 'design-branding'],
    url: 'https://millionxbangladesh.org/',
    featured: true,
    techStack: ['Next.js', 'Editorial content model', 'Document publishing'],
    challenge: rt(
      p(
        'MillionX Bangladesh set out to move the country from AI awareness to AI capability, with a stated ambition of reaching a million learners, builders, and leaders.',
      ),
      p(
        'An initiative that asks government, universities, industry, and the diaspora to act together has to be legible to all four at once. A policymaker, a university dean, a founder, and a student each arrive with a different question, and a single brochure page answers none of them.',
      ),
    ),
    solution: rt(
      ul([
        'An Action Charter presented as a citable public document rather than a downloadable file nobody opens',
        'A structured explanation of the initiative’s framework — exposure, anomaly, curiosity, prepared mind, experiment, impact — so the central idea is teachable, not just stated',
        'Separate paths for the initiative’s five activities: convening, education, talent discovery, knowledge publishing, and catalysing action',
        'A Knowledge Hub built to carry proceedings, reports, white papers, and position papers as they are produced',
        'An events section for the inaugural programme',
      ]),
    ),
    results: rt(
      p(
        'The initiative has a public reference point that works for a policymaker and a student on the same visit, and a publishing structure that can absorb its output as the programme runs.',
      ),
    ),
  },
  {
    slug: 'csl-technologies',
    title: 'Web presence for an enterprise ICT system integrator',
    client: 'CSL Technologies Limited',
    summary:
      'A solution-portfolio site for a CMMI-certified system integrator whose delivered work includes storage and backup for Dutch-Bangla Bank, server virtualisation for Banglalink, and private cloud for Grameenphone.',
    serviceSlugs: ['software-development', 'design-branding'],
    url: 'https://csltechltd.com/',
    techStack: ['Corporate CMS', 'Solution taxonomy', 'Newsroom'],
    challenge: rt(
      p(
        'CSL Technologies sells data centre infrastructure, enterprise storage, network security, virtualisation, and enterprise content management, and operates its own certification authority and colocation service.',
      ),
      p(
        'Enterprise infrastructure is bought by committee. A bank’s IT director, its procurement team, and its risk officer all need different evidence from the same website — and the strongest evidence CSL had, its delivered work for the country’s largest banks and telecoms, was the hardest thing to find on the old site.',
      ),
    ),
    solution: rt(
      ul([
        'A solution portfolio broken into the six practice areas CSL actually sells, each standing on its own',
        'Success stories surfaced as a first-class section — named deployments at recognisable institutions, not anonymous claims',
        'A newsroom for signings, ceremonies, and partner announcements',
        'Certification and accreditation presented where procurement teams look for it',
      ]),
    ),
    results: rt(
      p(
        'CSL’s delivered work for named enterprise clients is now the first thing an evaluating buyer encounters, and each practice area can be sent as its own link during a procurement conversation.',
      ),
    ),
  },
  {
    slug: 'hycean-ltd',
    title: 'Group site for a multi-division conglomerate',
    client: 'Hycean Ltd.',
    summary:
      'A single site covering five unrelated business lines — engineering and construction, ICT system integration, international trading, turnkey implementation, and real estate development.',
    serviceSlugs: ['software-development', 'design-branding'],
    url: 'https://hyceanltd.com/',
    techStack: ['Corporate CMS', 'Multi-division information architecture'],
    challenge: rt(
      p(
        'Hycean operates across engineering, procurement and construction; ICT system integration; export, import and trading; turnkey solution implementation; and real estate development.',
      ),
      p(
        'Conglomerate sites usually fail in one of two directions. They flatten every division into vague language about excellence and synergy, or they read as five separate companies that happen to share a logo. Neither helps a visitor who came for one specific division.',
      ),
    ),
    solution: rt(
      ul([
        'A service architecture that gives each of the five divisions its own substantive description rather than a shared paragraph',
        'A group-level identity that holds the divisions together without diluting any of them',
        'Entry points that let a visitor reach the division they came for without reading about the other four',
      ]),
    ),
    results: rt(
      p(
        'Each division can be described, linked to, and pitched on its own terms while still reading as part of one group.',
      ),
    ),
  },
  {
    slug: 'asif-u-ahmed',
    title: 'Personal platform for an educator and strategy consultant',
    client: 'Asif U Ahmed',
    summary:
      'A personal site for a consultant working across international development, higher education, and strategy — structured around three professional roles that share one body of writing.',
    industry: 'Education' as const,
    serviceSlugs: ['software-development', 'design-branding', 'digital-marketing'],
    url: 'https://asifuahmed.me/',
    techStack: ['Next.js', 'Editorial blog', 'Consulting enquiry flow'],
    challenge: rt(
      p(
        'Asif U Ahmed works as an educator, a consultant, and a writer. The three are connected in practice but are hired for separately: a university invites the educator, a nonprofit engages the consultant, a publication approaches the writer.',
      ),
      p(
        'A single biography serving all three audiences dilutes each of them. The site had to let each visitor find the relevant person quickly without fragmenting into three disconnected sites.',
      ),
    ),
    solution: rt(
      ul([
        'Three clearly separated roles — educator, consultant, storyteller — each with its own framing of the same career',
        'A dedicated consulting section for organisations arriving with a live engagement in mind',
        'A blog as the connective tissue, since the writing is what draws all three audiences in',
        'An annual impact section for work worth recording year by year',
      ]),
    ),
    results: rt(
      p(
        'Each audience reaches the version of the work relevant to them within a click, while the writing stays central rather than being pushed to a back page.',
      ),
    ),
  },
  {
    slug: 'ark-power',
    title: 'Corporate site for ARK Power Ltd',
    client: 'ARK Power Ltd.',
    summary:
      'Corporate web presence for ARK Power Ltd. Draft — the live site was not reachable at the time of writing, so details need confirming before this is published.',
    serviceSlugs: ['software-development', 'design-branding'],
    techStack: ['Corporate CMS'],
    challenge: rt(
      p(
        'Draft. Replace this with the brief ARK Power came to us with before publishing — this entry was written without access to the live site.',
      ),
    ),
    solution: rt(p('Draft — describe the delivered scope.')),
    results: rt(p('Draft — describe the outcome.')),
  },
]

export const POSTS = [
  {
    slug: 'what-software-costs-in-year-two',
    title: 'The bill you do not see until year two',
    excerpt:
      'Quotes cover the build. They rarely cover the hosting, the renewals, the dependency upgrades, and the small changes that arrive every month afterwards. Here is what to budget.',
    tags: ['Budgeting', 'Software'],
    featured: true,
    content: rt(
      p(
        'Most software quotes describe one thing: getting to launch. That is the number that gets compared across vendors, and it is the number that gets approved. It is also the smaller half of what the system will cost you.',
      ),
      h(2, 'What actually recurs'),
      p(
        'A running system carries costs whether or not anyone is actively working on it. In rough order of how often they surprise people:',
      ),
      ul([
        'Hosting and database — modest for a brochure site, meaningful the moment you have real traffic or real data',
        'Domain and TLS certificate renewals, which are small but cause outages when missed',
        'Third-party services — payment gateways, SMS and email delivery, mapping, analytics — each with their own pricing curve',
        'Dependency and framework upgrades, which are not optional: unpatched libraries are how most sites get compromised',
        'Backups, and the storage they consume, which grows every month',
        'The steady trickle of small changes — a new field, a changed price, a report someone now needs',
      ]),
      h(2, 'A usable rule of thumb'),
      p(
        'For a custom-built system, budget fifteen to twenty-five per cent of the original build cost per year to keep it healthy. Below that figure you are not maintaining the system, you are deferring its maintenance, and deferred maintenance is paid later with interest.',
      ),
      p(
        'That percentage is not a support retainer somebody invented. It is roughly what it costs to keep dependencies current, respond to the platform changes that arrive uninvited, and absorb the small change requests that every working system generates.',
      ),
      h(2, 'What to ask before you sign'),
      ul([
        'What does hosting cost per month, at the traffic we expect in year two — not year one?',
        'Which third-party services does this depend on, and what do they charge as we grow?',
        'Who applies security updates, how often, and is that inside or outside the quoted price?',
        'What happens to the code if we stop working with you?',
      ]),
      p(
        'A vendor who cannot answer the last question quickly is telling you something important about the second year.',
      ),
    ),
  },
  {
    slug: 'wordpress-or-custom-build',
    title: 'WordPress or a custom build: an honest decision guide',
    excerpt:
      'The answer is not always custom, and a firm that says otherwise is selling hours. A practical test for which side of the line your project falls on.',
    tags: ['Software', 'Decisions'],
    featured: true,
    content: rt(
      p(
        'We build both. That is the only reason this comparison is worth reading — a shop that only does custom development will always find a reason your project needs custom development.',
      ),
      h(2, 'WordPress is the right answer when'),
      ul([
        'The site is mostly pages and posts, and the shape of that content is stable',
        'Non-technical staff will do the day-to-day editing',
        'A standard e-commerce flow covers your selling: catalogue, cart, checkout, shipping',
        'You need to be live in weeks, not quarters',
        'The budget is better spent on content and photography than on engineering',
      ]),
      h(2, 'A custom build earns its cost when'),
      ul([
        'Your business logic is genuinely yours — pricing rules, approval chains, allocation, scheduling',
        'The system must talk to an ERP, an accounting package, or a warehouse in real time',
        'You expect load that shared hosting and a plugin stack will not survive',
        'Your data model does not fit posts and pages without a fight',
        'The application is the product, not the marketing for the product',
      ]),
      h(2, 'The test that usually settles it'),
      p(
        'Describe the single most important thing the system must do, in one sentence, without using the words "page" or "post". If that sentence is comfortable, you probably need custom software. If you found yourself reaching for those words anyway, WordPress will serve you well and cost a fraction of the alternative.',
      ),
      h(2, 'The expensive middle'),
      p(
        'The costliest projects we see are WordPress installations pushed years past their natural limits — forty plugins, a page builder, and custom PHP wedged into a theme to make it behave like an application. It is slow, it cannot be upgraded safely, and rebuilding it costs more than building correctly would have.',
      ),
      p(
        'If you are adding plugins to make WordPress stop behaving like WordPress, the decision has already been made for you.',
      ),
    ),
  },
  {
    slug: 'your-backup-is-a-guess',
    title: 'Your backup is a guess until you have restored it',
    excerpt:
      'Backups that have never been restored are not backups. They are an assumption with a monthly invoice attached. The drill takes an afternoon.',
    tags: ['Infrastructure', 'Security'],
    content: rt(
      p(
        'Every organisation we audit has backups. A green tick in a dashboard, a nightly job, a retention policy written down somewhere. Far fewer have ever restored one.',
      ),
      p(
        'Those are different states. The first is a belief. Only the second is a capability.',
      ),
      h(2, 'How backups fail quietly'),
      ul([
        'The job has been erroring for months and the alert goes to an inbox nobody reads',
        'The database dumps fine but the uploaded files were never included',
        'Everything is backed up to the same server that fails',
        'The archive is encrypted and the key lives only on the laptop that died',
        'The restore works, but takes eleven hours — and you needed it in one',
      ]),
      p(
        'Every one of these passes a dashboard check. Every one is discovered at the worst possible moment.',
      ),
      h(2, 'The drill'),
      p('Twice a year, block an afternoon and do this properly:'),
      ul([
        'Pick a real backup at random — not the newest one',
        'Restore it to a clean machine that is not your production server',
        'Start the application and sign in',
        'Open the five records that matter most and check them against what you expect',
        'Write down how long the whole thing took, from start to working system',
      ]),
      h(2, 'The number that matters'),
      p(
        'That last figure is your real recovery time. Not the one in the contract — the one you measured. Compare it against how long the business can actually be down. If measured recovery is longer than tolerable downtime, you do not have a backup problem, you have an architecture problem, and no amount of extra backup frequency will fix it.',
      ),
      p(
        'Restore drills are boring, which is why they get skipped. They are also the only thing separating a bad afternoon from a closed business.',
      ),
    ),
  },
  {
    slug: 'handover-checklist',
    title: 'What to demand when a vendor hands over your system',
    excerpt:
      'The moment a project ends is the only moment you have leverage. This is the list to work through before the final invoice is paid.',
    tags: ['Process', 'Procurement'],
    content: rt(
      p(
        'The most expensive situation in business technology is a working system nobody can touch. It happens gradually: the vendor relationship ends, the documentation was never written, and two years later a change that should take a day takes a month of reverse-engineering.',
      ),
      p(
        'The cure is a handover done while you still hold the final payment.',
      ),
      h(2, 'Code and accounts'),
      ul([
        'A repository you own, with full history — not a zip file emailed at the end',
        'Domain registrar access in your company’s name, not your vendor’s',
        'Hosting, database, and DNS accounts registered to your company email',
        'Every third-party account — payment gateway, mail service, analytics — owned by you, with the vendor added as a user rather than the other way round',
      ]),
      h(2, 'Documentation that is actually usable'),
      ul([
        'A written explanation of how to run the system locally, tested by someone who did not build it',
        'Deployment steps, written out — including how to roll back',
        'Environment variables listed, with what each one does',
        'For infrastructure work: network diagram, IP allocations, and an asset register',
        'Credentials delivered into your password manager, not pasted into a chat thread',
      ]),
      h(2, 'The test'),
      p(
        'Hand the documentation to a technical person who has never seen the project, and ask them to get it running. If they cannot, the handover is not finished — regardless of what the contract says.',
      ),
      p(
        'Good vendors welcome this. It is the clearest proof that the work was done properly. A vendor who resists it is protecting a dependency, and that dependency is yours to pay for later.',
      ),
    ),
  },
  {
    slug: 'stock-never-matches-accounts',
    title: 'Why your stock figure never matches your accounts',
    excerpt:
      'If someone reconciles inventory against the books by hand each month, the problem is not diligence. It is that two systems are both being told the truth separately.',
    tags: ['E-Commerce', 'ERP'],
    content: rt(
      p(
        'A familiar monthly ritual: someone exports the store’s stock report, someone else exports the accounting figures, and the two are reconciled by hand in a spreadsheet. The gap is never zero. Everyone has stopped expecting it to be.',
      ),
      h(2, 'Where the drift comes from'),
      ul([
        'A sale on the website decrements stock; the same sale is entered in accounting separately, at a different moment',
        'Returns are processed in one system and remembered in the other',
        'A walk-in sale never touches the online catalogue at all',
        'Stock adjustments after a physical count are applied to one side only',
        'Cancelled orders release inventory but leave the invoice behind',
      ]),
      p(
        'None of these is an error by anyone. They are the predictable result of two systems each holding their own version of the same fact.',
      ),
      h(2, 'What integration actually means'),
      p(
        'The fix is deciding which system owns each fact, and making every other system ask rather than remember.',
      ),
      ul([
        'One system owns stock levels. Everything else reads from it',
        'One system owns pricing. The storefront displays it; it does not store its own copy',
        'Orders flow one way, on a defined trigger, with a record of what was sent and what came back',
        'Failures are visible — a queue you can see, not a silent skip',
      ]),
      h(2, 'The unglamorous part'),
      p(
        'Most integration work is not the connection. It is deciding what happens when the two sides disagree: a payment that succeeded while the order failed, a product that exists in one catalogue and not the other, a sync that ran twice.',
      ),
      p(
        'Any integration can move data on a good day. The ones worth paying for are the ones that behave correctly on a bad one.',
      ),
    ),
  },
  {
    slug: 'hosting-in-bangladesh',
    title: 'Hosting in Bangladesh or abroad: how to choose',
    excerpt:
      'Latency, cost, payment friction, support hours, and where your data is legally allowed to sit. The trade-offs are real in both directions.',
    tags: ['Infrastructure', 'Bangladesh'],
    content: rt(
      p(
        'This decision gets made by habit far more often than by analysis. Both options are defensible; which one is right depends on facts specific to your organisation.',
      ),
      h(2, 'The case for hosting locally'),
      ul([
        'Lowest latency for users inside Bangladesh, which is most of them for most businesses here',
        'Billing in taka, without international card or forex friction',
        'Support in the same timezone and the same language',
        'Straightforward answers when a regulator asks where data is stored',
      ]),
      h(2, 'The case for hosting abroad'),
      ul([
        'Mature managed services — databases, object storage, queues — that reduce how much you have to operate yourself',
        'Genuine redundancy across multiple regions',
        'Better price-to-performance at larger scale',
        'Deeper documentation and a much larger pool of engineers who know the platform',
      ]),
      h(2, 'What actually decides it'),
      p(
        'Answer these three before comparing prices. First: where do your users physically sit? If they are overwhelmingly domestic, local hosting removes a latency penalty no amount of optimisation recovers. Second: does any regulation or client contract dictate where data resides? That is a constraint, not a preference. Third: who operates this at three in the morning? A cheaper server you have to administer yourself is not cheaper if nobody on staff can administer it.',
      ),
      h(2, 'The middle path'),
      p(
        'Split by workload rather than choosing one for everything. A CDN in front of static assets makes origin location far less important for page speed. Keep the database near your users, keep backups in a different country, and stop treating it as a single decision.',
      ),
      p(
        'Whatever you choose, make sure the accounts are in your company’s name. Hosting registered to a vendor is a hostage situation waiting for a disagreement.',
      ),
    ),
  },
  {
    slug: 'bengali-on-the-web',
    title: 'Building for Bengali properly',
    excerpt:
      'A Bengali site is not an English site with the text swapped. Type, numerals, search, and line breaking all need attention, and most templates get them wrong.',
    tags: ['Design', 'Bangladesh'],
    content: rt(
      p(
        'Plenty of Bangladeshi sites are built as English sites with Bengali poured in. They work, roughly. They also look subtly wrong to every reader, in ways that are hard to name and easy to feel.',
      ),
      h(2, 'Type is the first problem'),
      p(
        'Bengali script carries conjuncts, matras above and below the baseline, and a taller effective line height than Latin text. A font stack tuned for English produces cramped lines and clipped marks. Line height and letter spacing need setting for Bengali specifically, not inherited from a Latin default.',
      ),
      p(
        'Font weight is the second trap. Many Bengali webfonts ship two or three real weights and the browser fakes the rest. Synthesised bold on conjunct characters is visibly poor. Use the weights the font actually contains.',
      ),
      h(2, 'Numerals need a decision'),
      p(
        'Bengali numerals or Western digits is a choice you should make deliberately and then apply everywhere. Mixing them — Bengali in body copy, Western in prices and pagination — is the most common tell that a template was adapted rather than designed.',
      ),
      h(2, 'Search has to be forgiving'),
      p(
        'Readers type Bengali in several ways: phonetic keyboards, fixed layouts, and sometimes transliterated Latin. Exact string matching fails a large share of real queries. Normalisation and tolerant matching are not enhancements here; they are the difference between a catalogue that can be searched and one that cannot.',
      ),
      h(2, 'The small things that add up'),
      ul([
        'Set the lang attribute correctly so browsers select the right font and hyphenation behaviour',
        'Check line breaking on long conjunct words at phone width',
        'Test form validation messages in Bengali — they are usually the last strings anyone translates',
        'Confirm your database and connection are genuinely UTF-8 end to end before launch, not after',
      ]),
      p(
        'None of this is difficult. It is simply skipped when Bengali is treated as a translation layer instead of as the language the site is written in.',
      ),
    ),
  },
  {
    slug: 'site-speed-that-matters',
    title: 'The parts of site speed that actually affect your business',
    excerpt:
      'Perfect scores are a vanity metric. Three measurements predict whether visitors stay, and they are not the ones most reports lead with.',
    tags: ['Performance', 'SEO'],
    content: rt(
      p(
        'Performance reports produce a single number out of a hundred, and that number becomes the goal. It is a poor proxy. A site can score in the nineties on a developer’s laptop and feel broken on a mid-range phone on mobile data.',
      ),
      h(2, 'Measure on the device people use'),
      p(
        'Test on a mid-range Android handset over a throttled mobile connection. That is the honest baseline for most of the traffic reaching a Bangladeshi business. Desktop-on-fibre numbers describe an audience you mostly do not have.',
      ),
      h(2, 'The three that count'),
      ul([
        'Largest Contentful Paint — when the main thing on the page is visible. Under about 2.5 seconds on mobile',
        'Interaction to Next Paint — how long the page takes to respond when tapped. Under about 200 milliseconds',
        'Cumulative Layout Shift — how much the page moves while loading. Near zero',
      ]),
      p(
        'The third causes the most damage per unit of engineering effort. A layout that shifts as images and ads load makes people tap the wrong thing, and they blame the business rather than the site.',
      ),
      h(2, 'Where the time usually goes'),
      ul([
        'Uncompressed images — still the single biggest win on most sites we audit',
        'Third-party scripts: chat widgets, tag managers, ad pixels, each loading more of its own',
        'Webfonts loading without a fallback, leaving text invisible while they arrive',
        'Images and embeds with no dimensions, which is what causes the layout to jump',
      ]),
      h(2, 'What to do first'),
      p(
        'Compress and correctly size your images. Set explicit width and height on everything. Then audit your third-party scripts and remove the ones nobody can name an owner for — there are usually two or three.',
      ),
      p(
        'That list is unglamorous and it will get you most of the available improvement. The remaining points cost far more per point and almost never change what a customer does.',
      ),
    ),
  },
  {
    slug: 'security-basics-for-smes',
    title: 'Five security measures worth more than everything else combined',
    excerpt:
      'Smaller organisations are not targeted by sophisticated attackers. They are caught by automated ones, and these five measures stop most of that.',
    tags: ['Security', 'Infrastructure'],
    content: rt(
      p(
        'Most breaches at small and mid-sized companies involve nothing clever. Automated scanners find an unpatched system, a reused password, or a mailbox with no second factor, and the rest follows.',
      ),
      p('In order of value returned per hour spent:'),
      h(2, '1. Multi-factor authentication on email'),
      p(
        'Email is the master key: every password reset in your organisation arrives there. Enable MFA on business email before anything else on this list, starting with finance and the directors. Use an authenticator app rather than SMS where the option exists.',
      ),
      h(2, '2. Patch on a schedule, not on alarm'),
      p(
        'Operating systems, CMS installations, plugins, and libraries. A monthly window with a written owner beats reacting to whichever vulnerability made the news. Unpatched plugins are the most common way a Bangladeshi SME website gets compromised, and it is rarely personal — a scanner found a known version number.',
      ),
      h(2, '3. Configure SPF, DKIM, and DMARC'),
      p(
        'Without these records, anyone can send email claiming to be your domain, and invoice fraud against your customers becomes trivial. The records take an afternoon to set up correctly. Start DMARC in monitoring mode, read the reports for a month, then enforce.',
      ),
      h(2, '4. Remove accounts when people leave'),
      p(
        'Keep a list of every system with logins — email, hosting, CMS, payment gateway, bank portal, social accounts. Work through it on someone’s last day, not the following quarter. Ex-staff accounts are a standing risk that costs nothing to close.',
      ),
      h(2, '5. Test your restore'),
      p(
        'Ransomware turns into an outage rather than a catastrophe if, and only if, you can restore. An untested backup is not a control. Restore one twice a year and time it.',
      ),
      h(2, 'What this deliberately leaves out'),
      p(
        'No penetration test, no security appliance, no monitoring platform. Those have their place once the five above are genuinely in place. Buying them first is paying for a lock while the window is open.',
      ),
    ),
  },
  {
    slug: 'office-network-for-growing-teams',
    title: 'The office network decisions that get expensive later',
    excerpt:
      'Networks are usually assembled rather than designed. A few choices made early save years of intermittent faults nobody can trace.',
    tags: ['Infrastructure', 'Hardware'],
    content: rt(
      p(
        'Office networks tend to grow by accretion. A switch here, a consumer router there, a run of cable to the new desks. It works until roughly the thirtieth person, and then it produces intermittent faults that are extremely difficult to diagnose.',
      ),
      h(2, 'Decisions worth making deliberately'),
      ul([
        'Structured cabling over daisy-chained switches. Cable is cheap while the office is empty and disruptive once it is full',
        'Business-grade access points rather than consumer routers. The difference shows when forty devices are connected, not four',
        'Separate networks for staff, guests, and any card payment or CCTV equipment. Segmentation costs nothing at setup and contains problems later',
        'Static addresses for anything other devices need to find — printers, servers, network storage',
        'An uninterruptible power supply for network equipment, not only for servers. A router that reboots on every outage looks exactly like an internet fault',
      ]),
      h(2, 'Write it down while you still remember'),
      p(
        'The single most valuable artefact is a current diagram: what connects to what, which port, which address range, which credentials. It takes an hour during installation and saves days two years on, when the person who set it up has moved on.',
      ),
      p(
        'Photograph the rack and the patch panel labels. Keep the diagram somewhere other than that same server.',
      ),
      h(2, 'The pattern behind most complaints'),
      p(
        'When people say the internet is slow, the cause is usually inside the building: an overloaded access point, a duplex mismatch, one machine saturating the uplink with an unattended sync. Without monitoring you cannot tell, so you escalate to the provider and lose a week.',
      ),
      p(
        'Basic monitoring on the gateway — throughput and uptime, nothing exotic — converts that week into a ten-minute answer.',
      ),
    ),
  },
]
