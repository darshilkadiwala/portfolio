'use client';

import { useCallback, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

import { ArrowRightIcon, CalendarIcon, CopyIcon, MailIcon, Share2Icon } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

import { GitHubIcon, LinkedinIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { personal, siteConfig } from '@/data/portfolio';
import { cn } from '@/lib/utils';

import type { Route } from './+types/contact.page';

// ─── Meta ────────────────────────────────────────────────────────────────────

export function meta(): Route.MetaDescriptors {
  return [
    { title: `Contact - ${personal.name}` },
    { name: 'description', content: siteConfig.contact.pageDescription },
  ];
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className='bg-background min-h-hero-fold flex flex-col'>
      <main className='flex flex-1 flex-col'>
        {/* ── HERO CTA ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby='contact-heading'
          className='relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-8 py-24'>
          {/* Teal radial glow */}
          <div aria-hidden='true' className='bg-radial-glow pointer-events-none absolute inset-0' />

          <div className='relative mb-20 w-full max-w-6xl space-y-8 text-center'>
            <h1
              id='contact-heading'
              className='font-heading text-foreground text-6xl leading-none font-black tracking-tighter uppercase md:text-8xl lg:text-[100px]'>
              LET&apos;S BUILD <br />
              SOMETHING.
            </h1>
            <p className='text-muted-foreground mx-auto max-w-xl text-lg font-light tracking-wide uppercase md:text-xl'>
              {siteConfig.contact.heroSubheading}
            </p>
          </div>

          {/* ── CONTACT CARDS GRID ────────────── */}
          <div className='relative grid w-full max-w-7xl grid-cols-1 md:grid-cols-3'>
            <EmailCard />
            <ContactCard
              cardLabel={siteConfig.contact.scheduleCallLabel}
              title={siteConfig.contact.bookACall}
              icon={CalendarIcon}
              index={1}
              href={personal.calendly}
              actionText={siteConfig.contact.scheduleCallLabel}
              external
            />
            <ContactCard
              cardLabel={siteConfig.contact.followAlongLabel}
              title={
                <span className='mt-4 block space-y-2'>
                  <Link
                    to={personal.github}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className='hover:text-primary flex flex-auto items-center gap-2 text-sm font-bold tracking-widest uppercase underline-offset-2 transition-colors hover:underline'>
                    <GitHubIcon className='size-4' aria-hidden='true' />
                    GitHub
                  </Link>
                  <Link
                    to={personal.linkedin}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    className='hover:text-primary flex flex-auto items-center gap-2 text-sm font-bold tracking-widest uppercase underline-offset-2 transition-colors hover:underline'>
                    <LinkedinIcon className='size-4' aria-hidden='true' />
                    Linkedin
                  </Link>
                </span>
              }
              icon={Share2Icon}
              index={1}
              href={personal.calendly}
              external
            />
          </div>
        </section>
      </main>
      {/* ── DIVIDER ───────────────────────────────────────────────────── */}
      <Separator className='h-0.5!' />
    </div>
  );
}

// ─── Contact Card ────────────────────────────────────────────────────────────

type ContactCardProps = {
  icon?: ElementType;
  cardLabel: string;
  title: ReactNode;
  description?: string;
  customAction?: ReactNode;
  index: number;
} & (
  | {
      customAction?: undefined;
      href?: string;
      external?: boolean;
      actionText?: string;
    }
  | { customAction: ReactNode; href?: undefined; external?: undefined; actionText?: undefined }
);

function ContactCard({ icon, cardLabel, title, description, customAction, index, ...rest }: ContactCardProps) {
  const Icon = icon ?? MailIcon;

  return (
    <div
      className={cn(
        'group hover:bg-accent/20 hover:border-t-primary border-t-border border-t-2 p-10 transition-colors',
        index > 0 ? 'md:border-l-border/20 md:border-l' : '',
      )}>
      <div className='flex h-full flex-col space-y-6'>
        {/* Icon */}
        <div>
          <Icon
            aria-hidden='true'
            className={cn('group-hover:text-primary text-muted-foreground size-5 transition-colors')}
          />
        </div>

        {/* Label + Value */}
        <div className='space-y-1'>
          <h3 className='text-muted-foreground text-xs font-bold tracking-widest uppercase'>{cardLabel}</h3>
          <p className='text-foreground text-xl font-medium'>{title}</p>
          {description ? <p className='text-muted-foreground text-xs tracking-wide'>{description}</p> : null}
        </div>

        {/* CTA */}
        <div className='mt-auto pt-4'>
          {customAction ? (
            customAction
          ) : rest.actionText && rest.href ? (
            <Link
              to={rest.href}
              target={rest.external ? '_blank' : undefined}
              rel={rest.external ? 'noopener noreferrer' : undefined}
              aria-label={rest.actionText}
              className='text-muted-foreground group-hover:text-primary flex items-center gap-2 text-xs font-bold tracking-widest uppercase underline-offset-2 transition-colors hover:underline'>
              {rest.actionText}
              <ArrowRightIcon className='size-3.5' aria-hidden='true' />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function EmailCard() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async (): Promise<void> => {
    if (!personal.email) return;
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success(siteConfig.contact.emailCopiedToast);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  // Cleanup timeout on unmount (avoid memory leaks)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <ContactCard
      cardLabel={siteConfig.contact.emailLabel}
      title={personal.email}
      description={siteConfig.contact.dropMeAMessage}
      icon={MailIcon}
      index={0}
      customAction={
        <button
          type='button'
          onClick={() => void handleCopy()}
          aria-label={copied ? siteConfig.contact.emailCopiedToast : siteConfig.contact.copyEmail}
          className='text-primary flex cursor-pointer items-center gap-2 text-xs font-bold tracking-widest uppercase underline-offset-8 transition-colors hover:underline'>
          {copied ? siteConfig.contact.emailCopiedToast : siteConfig.contact.copyEmail}
          <CopyIcon className='size-3.5' aria-hidden='true' />
        </button>
      }
    />
  );
}
