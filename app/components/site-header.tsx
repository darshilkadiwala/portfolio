import { Link, useLocation } from 'react-router';

import { GitHubIcon, LinkedinIcon } from '@/components/icons';
import { navLinks, personal } from '@/data/portfolio';
import { cn } from '@/lib/utils';

import { SocialIconLink } from './social-icon-link';

export function SiteHeader() {
  const location = useLocation();

  return (
    <header className='border-border/40 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link
          to='/'
          className='font-heading text-foreground hover:text-primary group flex items-center gap-2 text-lg font-bold tracking-tight underline-offset-4 transition-colors hover:underline'
          aria-label='Home'>
          <span className='text-foreground'>{personal.initials}</span>
          <span className='bg-primary size-1.5 animate-pulse rounded-full' aria-hidden='true' />
        </Link>

        {/* Nav */}
        <nav aria-label='Main navigation'>
          <ul className='flex flex-wrap items-center gap-1'>
            {navLinks.map(({ label, href }) => {
              const { pathname, hash } = location;
              let isActive = false;
              if (href === '/') {
                isActive = pathname === '/' && !hash;
              } else if (href.startsWith('/#')) {
                const targetHash = href.replace('/', '');
                isActive = pathname === '/' && hash === targetHash;
              } else {
                isActive = pathname === href;
              }
              return (
                <li key={href}>
                  <Link
                    to={href}
                    className={cn(
                      'text-muted-foreground hover:text-foreground rounded-sm px-3 py-1.5 font-mono text-sm font-medium transition-colors',
                      isActive && 'text-foreground',
                    )}>
                    {label}
                  </Link>
                </li>
              );
            })}
            <SocialIconLink
              href={personal.github}
              className='ms-2 lg:ms-3'
              name='GitHub'
              icon={<GitHubIcon className='size-5' />}
            />
            <SocialIconLink
              href={personal.linkedin}
              className='ms-2 lg:ms-3'
              name='Linkedin'
              icon={<LinkedinIcon className='size-5' />}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
