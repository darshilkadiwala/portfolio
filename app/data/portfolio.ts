// ─── Personal Info ────────────────────────────────────────────────────────────

export const personal = {
  name: 'Darshil Kadiwala',
  initials: 'DK',
  title: 'Full-Stack Engineer',
  tagline: 'Building with intention.',
  shortBio:
    'Full-stack engineer with a focus on crafting fast, accessible, and well-designed products. I care deeply about the details - from architecture to pixel.',
  location: 'India 🇮🇳',
  email: 'hello@darshil.dev',
  calLink: 'https://cal.com/darshil',
  photo: '/me.png',
  github: 'https://github.com/darshilkadiwala',
  githubRepo: 'https://github.com/darshilkadiwala/portfolio',
  linkedin: 'https://linkedin.com/in/darshilkadiwala',
  twitter: 'https://twitter.com/imthedarshil',
  calendly: 'https://calendly.com/darshil',
  github_username: 'darshilkadiwala',
  resumeUrl: '/resume.pdf',
  resumeLastUpdated: 'April 2026',
  availability: 'online' as const,
  availabilityLabel: 'Available for opportunities',
} satisfies {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  calLink: string;
  photo: string;
  github: string;
  githubRepo: string;
  linkedin: string;
  twitter: string;
  calendly: string;
  github_username: string;
  resumeUrl: string;
  resumeLastUpdated: string;
  availability: 'online' | 'offline' | 'maintenance' | 'degraded';
  availabilityLabel: string;
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
] as const;

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Acme Corp',
    companyUrl: 'https://acme.com',
    role: 'Senior Full-Stack Engineer',
    period: '2024 - Present',
    current: true,
    bullets: [
      'Led re-architecture of the main product from a monolith to a micro-services model, reducing p95 API latency by 60%.',
      'Built and shipped a real-time order management dashboard used by 200+ operators daily.',
      'Introduced TypeScript strict mode and enforced code-quality gates via CI - reduced production bugs by 40%.',
    ],
    tags: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Startup XYZ',
    companyUrl: 'https://startupxyz.io',
    role: 'Full-Stack Developer',
    period: '2022 - 2024',
    current: false,
    bullets: [
      'Built a POS system from the ground up, supporting multi-tenant white-label configuration for 50+ restaurant brands.',
      'Designed the database schema and REST API layer powering mobile and web clients.',
      'Collaborated with designers to ship a component library used across 4 internal products.',
    ],
    tags: ['React', 'Express.js', 'MySQL', 'React Native', 'Tailwind CSS'],
  },
  {
    company: 'Freelance',
    role: 'Freelance Developer',
    period: '2020 - 2022',
    current: false,
    bullets: [
      'Delivered 10+ client projects ranging from e-commerce storefronts to SaaS dashboards.',
      'Built a Socket.IO-powered real-time chat system for a logistics client handling 1k+ concurrent users.',
    ],
    tags: ['React', 'Laravel', 'Firebase', 'WordPress'],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'CSS', 'HTML'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'React Router', 'Express.js', 'React Native', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Vite', 'pnpm', 'Figma', 'Prettier', 'ESLint'],
  },
  {
    category: 'Platforms',
    items: ['Vercel', 'Google Cloud', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  notes?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Gujarat Technological University',
    degree: 'B.E. Computer Engineering',
    period: '2019 - 2023',
    notes: 'Graduated with distinction. Coursework in DSA, Distributed Systems, and Software Engineering.',
  },
];

// ─── Contact Options ──────────────────────────────────────────────────────────

export interface ContactOption {
  id: string;
  title: string;
  description: string;
  action: string;
  href: string;
  copyValue?: string;
  external: boolean;
}

export const contactOptions: ContactOption[] = [
  {
    id: 'email',
    title: 'Email',
    description: 'Prefer async? Drop me a message.',
    action: 'Copy email',
    href: `mailto:${personal.email}`,
    copyValue: personal.email,
    external: false,
  },
  {
    id: 'call',
    title: 'Schedule a Call',
    description: 'Book a 30-min intro call.',
    action: 'Book on Cal.com →',
    href: personal.calLink,
    external: true,
  },
  {
    id: 'social',
    title: 'Follow Along',
    description: 'GitHub & LinkedIn',
    action: 'View profiles →',
    href: personal.github,
    external: true,
  },
];

// ─── Footer Links ──────────────────────────────────────────────────────────────

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
  { label: 'GitHub', href: personal.github },
  { label: 'LinkedIn', href: personal.linkedin },
] as const;

// ─── Projects ────────────────────────────────────────────────────────────────

export interface ProjectEntry {
  id: string;
  version: string;
  name: string;
  description: string;
  linkLabel: string;
  href: string;
}

export const projects: ProjectEntry[] = [
  {
    id: 'omni-crm',
    version: 'V.01.2',
    name: 'Omni-Channel CRM',
    description:
      'Enterprise-scale customer relationship management system built with Next.js and PostgreSQL. Features real-time sync and predictive analytics.',
    linkLabel: 'VIEW_CASE_STUDY',
    href: '#',
  },
  {
    id: 'logic-engine',
    version: 'V.04.5',
    name: 'Logic_Engine v4',
    description:
      'A proprietary state management library designed for micro-frontend architectures. Zero dependencies, maximum throughput.',
    linkLabel: 'VIEW_DOCS',
    href: '#',
  },
  {
    id: 'nova-pay',
    version: 'V.02.0',
    name: 'Nova_Pay Mobile',
    description:
      'Fintech application interface focused on rapid transactions and biometric security. Optimized for low-latency networks.',
    linkLabel: 'VIEW_FLOW',
    href: '#',
  },
  {
    id: 'structure-ui',
    version: 'V.09.9',
    name: 'Structure_UI Kit',
    description:
      'A headless UI component library built for rapid prototyping of high-fidelity architectural interfaces.',
    linkLabel: 'VIEW_SOURCE',
    href: '#',
  },
];

// ─── Home Page Skill Categories ───────────────────────────────────────────────

export interface HomeSkillCategory {
  id: string;
  icon: 'monitor' | 'database' | 'cloud' | 'layout-grid';
  label: string;
}

export const homeSkillCategories: HomeSkillCategory[] = [
  { id: 'frontend', icon: 'monitor', label: 'FRONTEND' },
  { id: 'backend', icon: 'database', label: 'BACKEND' },
  { id: 'devops', icon: 'cloud', label: 'DEVOPS' },
  { id: 'systems', icon: 'layout-grid', label: 'SYSTEM_DESIGN' },
];

// ─── Home Mission (terminal content) ──────────────────────────────────────────

export const homeMission = {
  quote:
    '"Code is not just logic; it is the infrastructure of human experience. I build with structural integrity and aesthetic precision."',
  location: 'Mumbai, India (UTC+5:30)',
  currentSprint: 'Open for collaboration',
  availability: 'High',
} as const;

// ─── UI Strings & Configuration ──────────────────────────────────────────────

export const siteConfig = {
  home: {
    viewResume: 'View Resume',
    getInTouch: 'Get in touch',
    // Hero
    availableBadge: 'AVAILABLE FOR HIRE',
    rolePrefix: '/',
    techStack: ['TYPESCRIPT', 'REACT.JS', 'NODE.JS', 'POSTGRESQL', 'DOCKER'],
    heroBio:
      'Building resilient digital infrastructure through intentional design and structural code. Specializing in high-performance web applications and system logic.',
    // Scroll
    scrollLabel: 'SCROLL_FOR_DATA',
    // Terminal
    terminalTitle: 'DARSHIL_SHELL — 80x24',
    terminalPrompt: 'guest@portfolio:',
    terminalHome: '~',
    terminalCmd1: 'npm run build:future',
    terminalBuild: '> Building project modules...',
    terminalLogs: [
      '[OK] Initialized architecture system',
      '[OK] Compiled reactive interfaces',
      '[OK] Optimized database indexing',
      '[OK] Hardened security protocols',
    ],
    terminalCmd2: 'cat mission_statement.md',
    terminalDeployLabel: '# Active Deployment Details:',
    // About
    aboutSectionLabel: '01 /\nSTUDIO_LOGIC',
    aboutBio:
      'I am an engineer focused on the intersection of performance and poetry. My approach is defined by the removal of the unnecessary to highlight the essential.',
    philosophyLabel: 'PHILOSOPHY',
    philosophyText:
      'I believe in the "Brutalist Blueprint"—where the function of a component determines its form. No decorative pixels, no hidden bloat. Just pure, executable intent.',
    methodologyLabel: 'METHODOLOGY',
    methodologyText:
      'Leveraging modern stack architectures to create seamless user journeys. My process starts with rigid data modeling and ends with fluid, responsive interfaces.',
    // Experience
    experienceSectionLabel: '02 /\nTECHNICAL_ROOTS',
    capabilitiesLabel: 'CORE_CAPABILITIES',
    historyLabel: 'HISTORY_LOGS',
    // Projects
    projectsSectionLabel: '03 /\nCONSTRUCTED_WORKS',
    projectsCountLabel: 'COUNT: 04 ACTIVE PROJECTS',
    // Contact CTA
    contactSectionLabel: '04 /\nINITIATE_SESSION',
    contactSubheading:
      "Have a complex problem that requires a structural solution? Let's connect and build something resilient.",
    contactCTA: 'OPEN_CHANNEL →',
  },
  resume: {
    downloadResume: 'Download Resume',
    lastUpdated: 'Last updated',
    experienceHeading: 'Experience',
    skillsHeading: 'Skills',
    educationHeading: 'Education',
    activityHeading: 'Activity',
    currentBadge: 'Current',
    ctaHeading: 'Interested in working together?',
    ctaSubheading: "Let's find out if we're a good fit.",
    ctaButton: 'Get in touch →',
  },
  contact: {
    pageDescription: 'Get in touch with me - open to full-time roles, contracts, and interesting collaborations.',
    heroHeading: "Let's build something.",
    heroSubheading:
      "Open to full-time roles, contracts, and interesting collaborations. If you have something in mind, let's talk.",
    emailCopiedToast: 'Email copied to your clipboard!',
    copyEmail: 'Copy email',
    dropMeAMessage: 'Prefer async? Drop me a message.',
    bookACall: 'Book a 30-min intro call.',
    emailLabel: 'Email',
    scheduleCallLabel: 'Schedule a call',
    followAlongLabel: 'Follow along',
  },
  footer: {
    navigationHeading: 'Navigation',
    builtWithHeading: 'Built with',
    builtWithTech: ['React Router 7', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui'],
    handcraftedIn: 'Handcrafted in',
    allRightsReserved: 'All rights reserved.',
    viewSource: 'View source',
  },
} as const;
