import { AboutSection } from '@/components/home/about-section';
import { ContactCTA } from '@/components/home/contact-cta';
import { ExperienceSection } from '@/components/home/experience-section';
import { HeroSection } from '@/components/home/hero-section';
import { ProjectsSection } from '@/components/home/projects-section';
import { ScrollIndicator } from '@/components/home/scroll-indicator';
import { TerminalSection } from '@/components/home/terminal-section';
import { personal } from '@/data/portfolio';

import type { Route } from './+types/home.page';

// ─── Meta ────────────────────────────────────────────────────────────────────

export function meta(): Route.MetaDescriptors {
  return [{ title: `${personal.name} - ${personal.title}` }, { name: 'description', content: personal.shortBio }];
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <main id='main-content'>
        <HeroSection />
        <ScrollIndicator />
        <TerminalSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactCTA />
      </main>
    </div>
  );
}
