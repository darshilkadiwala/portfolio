import { siteConfig } from '@/data/portfolio';

export function ScrollIndicator() {
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
}
