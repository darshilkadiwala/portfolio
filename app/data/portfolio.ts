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

// ─── UI Strings & Configuration ──────────────────────────────────────────────

export const siteConfig = {
  home: {
    viewResume: 'View Resume',
    getInTouch: 'Get in touch',
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
