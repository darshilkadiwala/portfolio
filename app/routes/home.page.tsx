import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router';

import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button/button';
import { personal, siteConfig } from '@/data/portfolio';

import type { Route } from './+types/home.page';

export function meta(): Route.MetaDescriptors {
  return [{ title: `${personal.name} - ${personal.title}` }, { name: 'description', content: personal.shortBio }];
}

export default function Home() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <SiteHeader />

      <main className='relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center'>
        {/* Ambient glow */}
        <div
          aria-hidden='true'
          className='from-primary/5 pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,var(--tw-gradient-from),transparent)]'
        />

        <div className='relative mx-auto flex max-w-2xl flex-col items-center gap-8'>
          <div className='flex flex-col gap-3'>
            <p className='text-muted-foreground font-mono text-sm tracking-widest uppercase'>
              {personal.title} &bull; {personal.location}
            </p>
            <h1 className='font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              {personal.name}
            </h1>
            <p className='text-muted-foreground max-w-md text-base/relaxed'>{personal.tagline}</p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-3'>
            <Button asChild size='lg'>
              <Link to='/resume'>
                {siteConfig.home.viewResume}
                <ArrowRightIcon data-icon='inline-end' aria-hidden='true' />
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link to='/contact'>{siteConfig.home.getInTouch}</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
