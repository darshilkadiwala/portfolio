import { Link } from 'react-router';

import { Button } from '@/components/ui/button/button';
import { siteConfig } from '@/data/portfolio';

export function ContactCTA() {
  const cfg = siteConfig.home;

  return (
    <section
      id='contact'
      className='bg-secondary relative overflow-hidden px-4 py-16 md:px-8 md:py-32 lg:px-12'
      aria-labelledby='cta-heading'>
      {/* Decorative watermark */}
      <div
        className='absolute right-0 -bottom-4 opacity-[0.04] select-none md:-right-25 md:-bottom-12.5'
        aria-hidden='true'>
        <span className='text-fluid-watermark font-mono leading-none font-black tracking-tighter'>CONTACT</span>
      </div>

      <div className='relative z-10 max-w-4xl'>
        <h2
          id='cta-heading'
          className='font-heading text-foreground mb-6 text-4xl font-black tracking-tighter whitespace-pre-line uppercase md:text-5xl'>
          {cfg.contactSectionLabel}
        </h2>
        <p className='text-muted-foreground mb-12 max-w-2xl text-lg font-light md:text-xl'>{cfg.contactSubheading}</p>

        <Button asChild size='lg'>
          <Link to='/contact'>{cfg.contactCTA}</Link>
        </Button>
      </div>
    </section>
  );
}
