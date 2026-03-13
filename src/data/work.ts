export interface WorkItem {
  slug: string
  year: string
  role: string
  company: string
  description: string
  tech: readonly string[]
  url: string
  keywords?: string
  tagline?: string
  longDescription?: string
  highlights?: readonly string[]
}

export const workItems: WorkItem[] = [
  {
    slug: 'caselib',
    year: '2025',
    role: 'Co-Founder',
    company: 'Caselib',
    tagline: 'Manage your case files efficiently',
    description: 'Digital case management platform for lawyers—real-time notifications, integrated calendar, and full control over your court cases.',
    longDescription:
      'Caselib is a digital platform designed by lawyers for lawyers. It transforms legal practice by streamlining case management, eliminating manual portal checks, and keeping you ahead of deadlines. All case data from Romanian court portals is integrated in one place—web and mobile—so you can focus on clients instead of administration.',
    tech: ['React', 'Typescript', 'NestJS', 'FastAPI', 'PostgreSQL'],
    url: 'https://caselib.ro',
    keywords: 'case management, legal tech, lawyers, Caselib, law firm software',
    highlights: [
      'Real-time notifications for case updates, deadlines, and solutions',
      'Integrated calendar—never miss a court date',
      'Party monitoring across all your followed cases',
      'Web and mobile app with sync across devices',
      'Coverage of all Romanian courts via official portals',
    ],
  },
  {
    slug: 'lightningaddon',
    year: '2025',
    role: 'Founder',
    company: 'LightningAddon',
    tagline: 'Ship a Browser Extension SaaS in Days, Not Months',
    description: 'Production-ready browser extension boilerplate—auth, billing, and 6-browser support built-in from day one.',
    longDescription:
      'Building a browser extension SaaS usually means solving the same problems over and over: auth, billing, multi-browser builds, typed messaging. LightningAddon ships all of it—so the first line of code you write is the one that makes your extension unique. One codebase targets Chrome, Brave, Edge, Opera, Firefox, and Zen. Choose Firebase or Supabase, drop in Stripe, and you\'re done.',
    tech: ['React 19', 'TypeScript', 'Turborepo', 'Firebase', 'Supabase', 'Stripe', 'Tailwind', '6 Browsers'],
    url: 'https://www.lightningaddon.com',
    keywords: 'browser extension boilerplate, Chrome extension, Firefox, SaaS, Stripe, React',
    highlights: [
      'One codebase, six browsers—Chrome, Firefox, Brave, Edge, Opera, Zen',
      'Provider-agnostic auth—Firebase or Supabase with full parity',
      'Stripe billing in the service worker—no CORS, keys stay server-side',
      'Typed runtime messaging across popup, content script, and background',
      'Clone, configure, and have a loadable extension in 15 minutes',
    ],
  },
  {
    slug: 'siteblocker',
    year: '2024',
    role: 'Founder',
    company: 'SiteBlocker',
    tagline: 'Block distractions and stay focused',
    description: 'Browser extension to block distracting websites, manage blocklists, and schedule when restrictions apply—free and privacy-first.',
    longDescription:
      'SiteBlocker helps you take back control of your browsing. Block distracting sites with one click, create custom blocklists, and set smart schedules so you stay focused during work or study. Your data stays yours—no tracking, no collection of browsing habits. Available as a Chrome and Firefox extension, completely free.',
    tech: ['React', 'Typescript', 'Node.js', 'PostgreSQL'],
    url: 'https://siteblocker.app',
    keywords: 'website blocker, productivity, focus, block distractions, browsing habits',
    highlights: [
      'One-click website blocking with customizable lists',
      'Smart scheduling—block sites during work or study hours',
      'Privacy-first—no collection or sharing of browsing data',
      'Sync across devices and dark mode',
      'Free to use—all features included at no cost',
    ],
  },
]

export type WorkSlug = (typeof workItems)[number]['slug']

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug)
}
