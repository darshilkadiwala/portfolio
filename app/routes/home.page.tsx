import type { ReactNode } from 'react';

import { ArrowUpRight, CloudIcon, DatabaseIcon, LayoutGridIcon, MonitorIcon } from 'lucide-react';
import { Link } from 'react-router';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import type { HomeSkillCategory } from '@/data/portfolio';
import { experience, homeMission, homeSkillCategories, personal, projects, siteConfig } from '@/data/portfolio';

import type { Route } from './+types/home.page';

// ─── Meta ────────────────────────────────────────────────────────────────────

export function meta(): Route.MetaDescriptors {
  return [{ title: `${personal.name} - ${personal.title}` }, { name: 'description', content: personal.shortBio }];
}

// ─── Hoisted static JSX (rendering-hoist-jsx) ────────────────────────────────

const ScrollIndicator = () => {
  return (
    <div className='flex justify-center py-20' aria-hidden='true'>
      <div className='flex flex-col items-center gap-4'>
        <span className='text-muted-foreground font-mono text-[10px] font-bold tracking-[0.3em]'>
          {siteConfig.home.scrollLabel}
        </span>
        <div className='from-primary h-24 w-px bg-linear-to-b to-transparent' />
      </div>
    </div>
  );
};
// ─── Icon resolver (avoids a switch/case inline in JSX) ──────────────────────

const SKILL_ICONS: Record<HomeSkillCategory['icon'], ReactNode> = {
  monitor: <MonitorIcon className='size-8 shrink-0' aria-hidden='true' />,
  database: <DatabaseIcon className='size-8 shrink-0' aria-hidden='true' />,
  cloud: <CloudIcon className='size-8 shrink-0' aria-hidden='true' />,
  'layout-grid': <LayoutGridIcon className='size-8 shrink-0' aria-hidden='true' />,
};

// ─── Section components (rerender-no-inline-components) ──────────────────────

function HeroSection() {
  const cfg = siteConfig.home;

  return (
    <section className='grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-12 lg:px-12'>
      {/* Left col */}
      <div className='flex flex-col items-start gap-6 lg:col-span-7'>
        {/* Availability badge */}
        <Badge variant='secondary' className='flex items-center gap-2 font-mono text-xs tracking-widest uppercase'>
          <span className='bg-primary size-2 animate-pulse rounded-full' aria-hidden='true' />
          {cfg.availableBadge}
        </Badge>

        {/* Name */}
        <h1 className='font-heading text-foreground text-7xl leading-[0.9] font-black tracking-tighter md:text-9xl'>
          {personal.name.split(' ')[0]}
          <br />
          {personal.name.split(' ')[1]}
        </h1>

        {/* Role */}
        <div className='flex items-center gap-3'>
          <span className='text-muted-foreground font-mono text-2xl font-light'>{cfg.rolePrefix}</span>
          <p className='text-primary font-mono text-2xl tracking-tight'>
            {personal.title}
            <span className='animate-ping' aria-hidden='true'>
              |
            </span>
          </p>
        </div>

        {/* Bio */}
        <p className='text-muted-foreground max-w-xl text-lg/relaxed font-light'>{cfg.heroBio}</p>

        {/* Tech stack */}
        <div className='flex flex-wrap gap-2'>
          {cfg.techStack.map((tech) => (
            <Badge key={tech} variant='secondary' className='font-mono text-xs tracking-wider'>
              {tech}
            </Badge>
          ))}
        </div>

        {/* CTA row */}
        <div className='flex flex-wrap gap-3 pt-2'>
          <Button asChild size='lg'>
            <Link to='/resume'>{cfg.viewResume}</Link>
          </Button>
          <Button asChild size='lg' variant='outline'>
            <Link to='/contact'>{cfg.getInTouch}</Link>
          </Button>
        </div>
      </div>

      {/* Right col — hero image */}
      <div className='relative mt-8 p-5 lg:col-span-5 lg:mt-0'>
        <div className='bg-muted flex aspect-square w-full items-center justify-center overflow-hidden'>
          <img
            src={personal.photo}
            alt={`${personal.name} — ${personal.title}`}
            className='size-full object-cover opacity-80 mix-blend-multiply grayscale'
          />
          {/* Border frame */}
          <div className='absolute inset-0 size-24 border-s-5 border-t-5' aria-hidden='true' />
          <div className='absolute right-0 bottom-0 size-24 border-e-5 border-b-5' aria-hidden='true' />
        </div>
        {/* Offset accent square */}
        <div className='bg-primary/20 absolute -right-8 -bottom-8 -z-10 hidden size-48 xl:block' aria-hidden='true' />
      </div>
    </section>
  );
}

function TerminalSection() {
  const cfg = siteConfig.home;
  const mission = homeMission;

  return (
    <section className='bg-card px-8 py-24 lg:px-12' aria-label='Terminal — mission statement'>
      <div className='mx-auto max-w-6xl'>
        <div className='bg-primary overflow-hidden shadow-2xl'>
          {/* Title bar */}
          <div className='bg-primary/80 flex items-center justify-between px-4 py-3'>
            <div className='flex gap-2' aria-hidden='true'>
              <div className='bg-primary-foreground/30 size-3' />
              <div className='bg-primary-foreground/30 size-3' />
              <div className='bg-primary-foreground/30 size-3' />
            </div>
            <span className='text-primary-foreground/50 font-mono text-[10px] tracking-widest'>
              {cfg.terminalTitle}
            </span>
            <div className='w-12' aria-hidden='true' />
          </div>

          {/* Terminal body */}
          <div
            className='text-muted-foreground bg-background h-100 overflow-y-auto p-8 font-mono text-sm/relaxed'
            style={{ scrollbarWidth: 'none' }}
            role='log'
            aria-live='off'>
            {/* Build command */}
            <p className='mb-2'>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              <span className='text-muted-foreground'>
                {'$ '}
                {cfg.terminalCmd1}
              </span>
            </p>
            <p className='text-muted-foreground/60 mb-4'>{cfg.terminalBuild}</p>

            {/* Build log lines */}
            {cfg.terminalLogs.map((line) => (
              <p key={line} className='text-muted-foreground/70 mb-1'>
                {line}
              </p>
            ))}

            {/* Mission statement command */}
            <p className='mt-4 mb-2'>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              {'$ '}
              {cfg.terminalCmd2}
            </p>
            <p className='text-muted-foreground bg-primary-foreground/5 mb-4 inline-block px-2 italic'>
              {mission.quote}
            </p>

            {/* Deployment details */}
            <p className='text-muted-foreground/70 mb-2'>{cfg.terminalDeployLabel}</p>
            <p className='mb-1'>Location: {mission.location}</p>
            <p className='mb-1'>Current_Sprint: &apos;{mission.currentSprint}&apos;</p>
            <p className='mb-4'>Availability: {mission.availability}</p>

            {/* Blinking prompt */}
            <p className='animate-pulse'>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              {'$ _'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='about'
      className='grid grid-cols-1 gap-12 px-8 py-32 lg:grid-cols-12 lg:px-12'
      aria-labelledby='about-heading'>
      {/* Sticky headline */}
      <div className='lg:col-span-4'>
        <h2
          id='about-heading'
          className='font-heading text-foreground sticky top-24 text-5xl font-black tracking-tighter whitespace-pre-line uppercase'>
          {cfg.aboutSectionLabel}
        </h2>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-8 lg:col-span-8'>
        <p className='text-foreground text-3xl/snug font-light tracking-tight'>{cfg.aboutBio}</p>

        <Separator />

        <div className='grid grid-cols-1 gap-8 pt-4 md:grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-foreground font-mono text-xs font-bold tracking-widest uppercase'>
              {cfg.philosophyLabel}
            </h3>
            <p className='text-muted-foreground text-sm/relaxed'>{cfg.philosophyText}</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-foreground font-mono text-xs font-bold tracking-widest uppercase'>
              {cfg.methodologyLabel}
            </h3>
            <p className='text-muted-foreground text-sm/relaxed'>{cfg.methodologyText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='experience'
      className='bg-muted px-8 py-32 lg:px-12'
      aria-labelledby='experience-heading'
      style={{ contentVisibility: 'auto' }}>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        {/* Sticky headline */}
        <div className='lg:col-span-4'>
          <h2
            id='experience-heading'
            className='font-heading text-foreground sticky top-24 text-5xl font-black tracking-tighter whitespace-pre-line uppercase'>
            {cfg.experienceSectionLabel}
          </h2>
        </div>

        <div className='flex flex-col gap-24 lg:col-span-8'>
          {/* Capabilities grid */}
          <div>
            <p className='text-muted-foreground mb-8 font-mono text-xs font-bold tracking-[0.3em] uppercase'>
              {cfg.capabilitiesLabel}
            </p>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
              {homeSkillCategories.map((skill) => (
                <Card
                  key={skill.id}
                  className='border-primary flex flex-col gap-4 rounded-none border-0 border-l-4 p-6'>
                  {SKILL_ICONS[skill.icon]}
                  <span className='font-mono text-[10px] font-bold'>{skill.label}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience timeline */}
          <div className='flex flex-col gap-0'>
            <p className='text-muted-foreground mb-8 font-mono text-xs font-bold tracking-[0.3em] uppercase'>
              {cfg.historyLabel}
            </p>
            {experience.map((entry, i) => (
              <div
                key={i}
                className='group hover:bg-background -mx-4 flex flex-col items-start justify-between px-4 py-8 transition-colors md:flex-row md:items-center'>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-foreground text-2xl font-bold tracking-tight'>{entry.role}</h3>
                  <p className='text-muted-foreground font-mono text-sm uppercase'>{entry.company}</p>
                </div>
                <span className='text-muted-foreground mt-4 font-mono text-xs font-bold md:mt-0'>{entry.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='projects'
      className='bg-background px-8 py-32 lg:px-12'
      aria-labelledby='projects-heading'
      style={{ contentVisibility: 'auto' }}>
      {/* Section header */}
      <div className='mb-12 flex items-end justify-between'>
        <h2
          id='projects-heading'
          className='font-heading text-foreground text-5xl font-black tracking-tighter uppercase'>
          {cfg.projectsSectionLabel.split('\n').map((line, i) => (
            <span key={i} className='block leading-tight'>
              {line}
            </span>
          ))}
        </h2>
        <span className='text-muted-foreground mb-2 font-mono text-xs'>{cfg.projectsCountLabel}</span>
      </div>

      {/* 2 × 2 card grid */}
      <div className='border-border/20 grid grid-cols-1 gap-px border md:grid-cols-2'>
        {projects.map((project) => (
          <Card key={project.id} className='group border-border/10 relative rounded-none border p-10 transition-colors'>
            <CardHeader className='mb-6 p-0'>
              {/* Shimmer aspect-video placeholder (rendering-hoist-jsx would apply for static shimmer but each card shimmer is the same so no memo needed) */}
              <div className='bg-card mb-6 flex aspect-video items-center justify-center overflow-hidden'>
                <Skeleton className='size-full rounded-none opacity-60 transition-opacity duration-500 group-hover:opacity-30' />
              </div>
              <span className='text-muted-foreground mb-2 block font-mono text-[10px]'>{project.version}</span>
              <CardTitle className='font-heading text-foreground text-3xl font-bold transition-transform duration-300 group-hover:translate-x-2'>
                {project.name}
              </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col gap-6 p-0'>
              <p className='text-muted-foreground max-w-sm text-sm/relaxed'>{project.description}</p>
              <div className='flex items-center gap-4'>
                <ArrowUpRight className='text-muted-foreground size-5 shrink-0' aria-hidden='true' />
                <a
                  href={project.href}
                  className='text-foreground hover:text-primary font-mono text-[10px] font-bold tracking-widest uppercase transition-colors'
                  aria-label={`${project.linkLabel} for ${project.name}`}>
                  {project.linkLabel}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  const cfg = siteConfig.home;

  return (
    <section
      id='contact'
      className='bg-secondary relative overflow-hidden px-8 py-32 lg:px-12'
      aria-labelledby='cta-heading'>
      {/* Decorative watermark */}
      <div className='absolute -right-25 -bottom-12.5 opacity-[0.04] select-none' aria-hidden='true'>
        <span className='font-heading text-[200px] leading-none font-black tracking-tighter'>CONTACT</span>
      </div>

      <div className='relative z-10 max-w-4xl'>
        <h2
          id='cta-heading'
          className='font-heading text-foreground mb-6 text-5xl font-black tracking-tighter whitespace-pre-line uppercase'>
          {cfg.contactSectionLabel}
        </h2>
        <p className='text-muted-foreground mb-12 max-w-2xl text-xl font-light'>{cfg.contactSubheading}</p>

        <Button asChild size='lg'>
          <Link to='/contact'>{cfg.contactCTA}</Link>
        </Button>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <SiteHeader />

      <main id='main-content'>
        <HeroSection />
        <ScrollIndicator />
        <TerminalSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}
