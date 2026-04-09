import { homeMission, siteConfig } from '@/data/portfolio';

export function TerminalSection() {
  const cfg = siteConfig.home;
  const mission = homeMission;

  return (
    <section className='bg-card px-4 py-16 md:px-8 md:py-24 lg:px-12' aria-label='Terminal — mission statement'>
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
            <div className='w-11 md:w-12' aria-hidden='true' />
          </div>

          {/* Terminal body */}
          <div
            className='text-muted-foreground bg-background space-y-4 p-4 font-mono text-xs md:p-8 md:text-sm/relaxed'
            style={{ scrollbarWidth: 'none' }}
            role='log'
            aria-live='off'>
            {/* Build command */}
            <p>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              <span className='text-amber-300'>{cfg.terminalCmd1}</span>
            </p>
            <p className='text-muted-foreground/60 mb-4'>{cfg.terminalBuild}</p>

            {/* Build log lines */}
            <div>
              {cfg.terminalLogs.map((line) => (
                <p key={line} className='text-muted-foreground/70'>
                  {line}
                </p>
              ))}
            </div>

            {/* Mission statement command */}
            <p className='my-2'>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              <span className='text-amber-300'>{cfg.terminalCmd2}</span>
            </p>
            <p className='text-muted-foreground bg-primary-foreground/5 mb-4 inline-block px-2 text-balance italic'>
              {mission.quote}
            </p>

            {/* Deployment details */}
            <div>
              <p className='text-muted-foreground/70'>{cfg.terminalDeployLabel}</p>
              <p>{mission.location}</p>
              <p>{mission.currentSprint}</p>
              <p>{mission.availability}</p>
            </div>

            {/* Blinking prompt */}
            <p>
              <span className='text-muted-foreground/60'>{cfg.terminalPrompt}</span>
              <span className='text-muted-foreground/40'>~</span>
              <span className='animate-pulse text-amber-300'>{' $ _'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
