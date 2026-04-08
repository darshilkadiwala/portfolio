import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/data/portfolio';

export function AboutSection() {
  const cfg = siteConfig.home;

  return (
    <section
      id='about'
      className='grid grid-cols-1 gap-8 px-4 py-16 md:gap-12 md:px-8 md:py-32 lg:grid-cols-12 lg:px-12'
      aria-labelledby='about-heading'>
      {/* Sticky headline */}
      <div className='lg:col-span-4'>
        <h2
          id='about-heading'
          className='font-heading text-foreground text-4xl font-black tracking-tighter whitespace-pre-line uppercase md:text-5xl lg:sticky lg:top-24'>
          {cfg.aboutSectionLabel}
        </h2>
      </div>

      {/* Content */}
      <div className='flex flex-col gap-8 lg:col-span-8'>
        <p className='text-foreground text-2xl/snug font-light tracking-tight md:text-3xl/snug'>{cfg.aboutBio}</p>

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
