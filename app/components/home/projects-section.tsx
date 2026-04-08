import { ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { projects, siteConfig } from '@/data/portfolio';

export function ProjectsSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='projects'
      className='bg-background px-4 py-16 md:px-8 md:py-32 lg:px-12'
      aria-labelledby='projects-heading'
      style={{ contentVisibility: 'auto' }}>
      {/* Section header */}
      <div className='mb-12 flex items-end justify-between'>
        <h2
          id='projects-heading'
          className='font-heading text-foreground text-4xl font-black tracking-tighter uppercase md:text-5xl'>
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
          <Card
            key={project.id}
            className='group border-border/10 relative rounded-none border p-6 transition-colors md:p-10'>
            <CardHeader className='mb-6 p-0'>
              {/* Shimmer aspect-video placeholder */}
              <div className='bg-card mb-6 flex aspect-video items-center justify-center overflow-hidden'>
                <Skeleton className='size-full rounded-none opacity-60 transition-opacity duration-500 group-hover:opacity-30' />
              </div>
              <span className='text-muted-foreground mb-2 block font-mono text-[10px]'>{project.version}</span>
              <CardTitle className='font-heading text-foreground text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2 md:text-3xl'>
                {project.name}
              </CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col gap-6 p-0'>
              <CardDescription className='max-w-sm text-sm/relaxed'>{project.description}</CardDescription>
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
