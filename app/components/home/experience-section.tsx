import type { ReactNode } from 'react';

import { CloudIcon, DatabaseIcon, LayoutGridIcon, MonitorIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import type { HomeSkillCategory } from '@/data/portfolio';
import { experience, homeSkillCategories, siteConfig } from '@/data/portfolio';

// ─── Icon resolver (avoids a switch/case inline in JSX) ──────────────────────

const SKILL_ICONS: Record<HomeSkillCategory['icon'], ReactNode> = {
  monitor: <MonitorIcon className='size-8 shrink-0' aria-hidden='true' />,
  database: <DatabaseIcon className='size-8 shrink-0' aria-hidden='true' />,
  cloud: <CloudIcon className='size-8 shrink-0' aria-hidden='true' />,
  'layout-grid': <LayoutGridIcon className='size-8 shrink-0' aria-hidden='true' />,
};

export function ExperienceSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='experience'
      className='bg-muted px-4 py-16 md:px-8 md:py-32 lg:px-12'
      aria-labelledby='experience-heading'
      style={{ contentVisibility: 'auto' }}>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        {/* Sticky headline */}
        <div className='lg:col-span-4'>
          <h2
            id='experience-heading'
            className='font-heading text-foreground text-4xl font-black tracking-tighter whitespace-pre-line uppercase md:text-5xl lg:sticky lg:top-24'>
            {cfg.experienceSectionLabel}
          </h2>
        </div>

        <div className='flex flex-col gap-16 md:gap-24 lg:col-span-8'>
          {/* Capabilities grid */}
          <div className='flex flex-col gap-8'>
            <p className='text-muted-foreground font-mono text-xs font-bold tracking-[0.3em] uppercase'>
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
          <div className='flex flex-col gap-8'>
            <p className='text-muted-foreground font-mono text-xs font-bold tracking-[0.3em] uppercase'>
              {cfg.historyLabel}
            </p>
            <div className='flex flex-col gap-0'>
              {experience.map((entry, i) => (
                <div
                  key={i}
                  className='group hover:bg-background flex flex-col items-start justify-between px-4 py-6 transition-colors sm:flex-row sm:items-center sm:py-8 md:-mx-4'>
                  <div className='flex flex-col gap-1'>
                    <h3 className='text-foreground text-xl font-bold tracking-tight md:text-2xl'>{entry.role}</h3>
                    <p className='text-muted-foreground font-mono text-sm uppercase'>{entry.company}</p>
                  </div>
                  <span className='text-muted-foreground mt-4 font-mono text-xs font-bold sm:mt-0'>{entry.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
