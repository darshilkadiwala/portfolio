import { FileTextIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router';

import { GitHubIcon, LinkedinIcon } from '@/components/icons';
import { SocialIconLink } from '@/components/social-icon-link';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Separator } from '@/components/ui/separator';
import { personal, siteConfig } from '@/data/portfolio';
import { TypewriterStatus, useRolesTypewriter } from '@/hooks/use-roles-typewriter';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const cfg = siteConfig.home;

  return (
    <section className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-8 md:px-8 md:py-16 lg:grid-cols-12 lg:px-12'>
      {/* Left col */}
      <div className='flex flex-col items-start gap-6 lg:col-span-7'>
        {/* Availability badge */}
        <Badge variant='secondary' className='gap-2 font-mono tracking-widest uppercase'>
          <span className='bg-primary size-2 animate-pulse rounded-full' aria-hidden='true' />
          {cfg.availableBadge}
        </Badge>

        {/* Name */}
        <h1 className='font-heading text-foreground text-fluid-hero leading-[0.9] font-black tracking-tighter'>
          {personal.name.split(' ')[0]}
          <br />
          {personal.name.split(' ').slice(1).join(' ')}
        </h1>

        {/* Role */}
        <div className='flex items-center gap-3'>
          <span className='text-muted-foreground font-mono text-xl font-light md:text-2xl'>{cfg.rolePrefix}</span>
          <RoleTypewriter />
        </div>

        {/* Bio */}
        <p className='text-muted-foreground max-w-xl text-base font-light md:text-lg/relaxed'>{cfg.heroBio}</p>

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
            <Link to='/resume'>
              <FileTextIcon className='size-4' />
              {cfg.viewResume}
            </Link>
          </Button>
          <Button asChild size='lg' variant='outline'>
            <Link to='/contact'>
              <MailIcon className='size-4' />
              {cfg.getInTouch}
            </Link>
          </Button>
        </div>
        <div className='flex items-center gap-4 pt-1 md:gap-5'>
          <SocialIconLink href={personal.github} name='GitHub' icon={<GitHubIcon className='size-5' />} />
          <SocialIconLink href={personal.linkedin} name='Linkedin' icon={<LinkedinIcon className='size-5' />} />
          <Separator orientation='vertical' />
          <span className='text-muted-foreground font-mono text-xs'>{personal.handle}</span>
        </div>
      </div>

      {/* Right col — hero image */}
      <div className='relative mx-auto mt-8 w-full max-w-sm p-4 sm:max-w-md md:p-5 lg:col-span-5 lg:mx-0 lg:mt-0 lg:max-w-none'>
        <div className='bg-muted flex aspect-square w-full items-center justify-center overflow-hidden'>
          <img
            src={personal.photo}
            alt={`${personal.name} — ${personal.title}`}
            className='size-full object-cover opacity-80 mix-blend-multiply grayscale'
          />
          {/* Border frame */}
          <div className='absolute inset-0 size-16 border-s-5 border-t-5 md:size-24' aria-hidden='true' />
          <div className='absolute right-0 bottom-0 size-16 border-e-5 border-b-5 md:size-24' aria-hidden='true' />
        </div>
        {/* Offset accent square */}
        <div
          className='bg-primary/20 absolute -right-4 -bottom-4 -z-10 hidden size-32 md:-right-8 md:-bottom-8 md:size-48 xl:block'
          aria-hidden='true'
        />
      </div>
    </section>
  );
}

function RoleTypewriter() {
  const { status, role } = useRolesTypewriter();
  return (
    <p className='text-primary font-mono text-xl tracking-tight md:text-2xl'>
      {role}
      <span className={cn(status === TypewriterStatus.DISPLAYED && 'animate-ping')} aria-hidden='true'>
        |
      </span>
    </p>
  );
}
