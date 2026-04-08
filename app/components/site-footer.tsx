import { MoonIcon, TerminalIcon } from 'lucide-react';
import { Link } from 'react-router';

import { GitHubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { footerLinks, personal, siteConfig } from '@/data/portfolio';

export function SiteFooter() {
  return (
    <footer aria-label='Site footer' className='bg-card/20 relative w-full overflow-hidden py-24'>
      {/* Decorative watermark */}
      <div className='absolute right-0 -bottom-4 z-0 opacity-[0.04] select-none md:-bottom-12.5' aria-hidden='true'>
        <span className='text-fluid-watermark font-mono leading-none font-black tracking-tighter uppercase'>
          {siteConfig.footer.watermark}
        </span>
      </div>

      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-3'>
        {/* Left: Branding */}
        <div className='space-y-4'>
          <Link
            to='/'
            aria-label='Home'
            className='font-heading text-foreground block text-2xl font-black tracking-tighter uppercase'>
            {personal.initials}
          </Link>
          <p className='text-muted-foreground max-w-50 text-xs/relaxed tracking-widest uppercase'>{personal.tagline}</p>
          <div className='flex gap-3 pt-2'>
            <Link
              to={personal.github}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub profile'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <GitHubIcon className='size-4' aria-hidden='true' />
            </Link>
            <Link
              to={personal.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn profile'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <LinkedinIcon className='size-4' aria-hidden='true' />
            </Link>
            <Link
              to={personal.twitter}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter profile'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <TwitterIcon className='size-4' aria-hidden='true' />
            </Link>
          </div>
        </div>

        {/* Center: Navigation */}
        <nav aria-label='Footer navigation' className='grid grid-cols-2 content-start gap-y-3'>
          {footerLinks.map(({ label, href }) => {
            const isExternal = href.startsWith('http');
            return isExternal ? (
              <Link
                key={href}
                to={href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary text-xs tracking-widest uppercase transition-colors'>
                {label}
              </Link>
            ) : (
              <Link
                key={href}
                to={href}
                className='text-muted-foreground hover:text-primary text-xs tracking-widest uppercase transition-colors'>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Meta */}
        <div className='flex flex-col items-start justify-between gap-8 text-left md:items-end md:text-right'>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-xs tracking-widest uppercase'>
              {new Date().getFullYear()} Version 1.0
            </p>
            <p className='text-muted-foreground text-[10px] tracking-widest uppercase'>
              {siteConfig.footer.builtWithTech.join(' · ')}
            </p>
          </div>
          <Link
            to={personal.githubRepo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground group flex items-center gap-2 transition-colors'>
            <TerminalIcon className='group-hover:text-primary size-3.5 transition-colors' aria-hidden='true' />
            <span className='text-[10px] font-bold tracking-widest uppercase'>Repository</span>
          </Link>
        </div>
      </div>

      {/* Bottom Micro-Bar */}
      <div className='relative z-10 mx-auto mt-24 max-w-7xl px-8'>
        <div className='border-border/50 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row'>
          <p className='text-muted-foreground text-[10px] tracking-[0.2em] uppercase'>
            &copy;{new Date().getFullYear()} {personal.name}. {siteConfig.footer.allRightsReserved}
          </p>
          <div className='flex items-center gap-8'>
            <p className='text-muted-foreground text-[10px] tracking-widest uppercase'>Built in {personal.location}</p>
            <ThemeLockedPill />
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Theme Locked Pill ───────────────────────────────────────────────────────

interface ThemeLockedPillProps {
  /**
   * Future-ready: pass a callback here when light/dark toggle is implemented.
   * While undefined the pill renders as decorative (disabled, cursor-not-allowed).
   */
  onToggle?: () => void;
}

function ThemeLockedPill({ onToggle }: ThemeLockedPillProps) {
  return (
    <Button
      type='button'
      onClick={onToggle}
      aria-label='Theme is locked to dark mode'
      className='text-[9px] font-bold tracking-widest uppercase'>
      <MoonIcon className='size-3.5' aria-hidden='true' />
      <span className=''>Theme Locked</span>
    </Button>
  );
}
