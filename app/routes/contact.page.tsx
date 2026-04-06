'use client';

import { useState, type ElementType } from 'react';

import { Calendar, Copy, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

import { GitHubIcon, LinkedinIcon } from '@/components/icons';
import { SiteHeader } from '@/components/site-header';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { contactOptions, footerLinks, personal, siteConfig } from '@/data/portfolio';

import type { Route } from './+types/contact.page';

// ─── Meta ────────────────────────────────────────────────────────────────────

export function meta(): Route.MetaDescriptors {
  return [
    { title: `Contact - ${personal.name}` },
    {
      name: 'description',
      content: siteConfig.contact.pageDescription,
    },
  ];
}

// ─── Icons map (no string lookups) ───────────────────────────────────────────

const contactIcons = {
  email: Mail,
  call: Calendar,
  social: GitHubIcon,
} as const satisfies Record<string, ElementType>;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <SiteHeader />

      <main className='flex flex-1 flex-col'>
        {/* ── HERO CTA ──────────────────────────────────────────────── */}
        <section
          aria-labelledby='contact-heading'
          className='relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center'>
          {/* Ambient glow */}
          <div
            aria-hidden='true'
            className='from-primary/5 via-primary/3 pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,var(--tw-gradient-from),var(--tw-gradient-via),transparent)]'
          />

          <div className='relative mx-auto flex max-w-3xl flex-col items-center gap-8'>
            {/* Availability badge */}
            <Badge variant='secondary' className='gap-1.5 text-xs'>
              <span className='size-1.5 animate-pulse rounded-full bg-emerald-500' aria-hidden='true' />
              {personal.availabilityLabel}
            </Badge>

            {/* Big heading */}
            <h1
              id='contact-heading'
              className='font-heading text-foreground text-4xl/tight font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              {siteConfig.contact.heroHeading}
            </h1>

            <p className='text-muted-foreground max-w-xl text-lg/relaxed'>{siteConfig.contact.heroSubheading}</p>

            {/* Contact cards */}
            <div className='mt-4 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3'>
              {contactOptions.map((option) => (
                <ContactCard key={option.id} option={option} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────── */}
        <footer aria-label='Site footer'>
          <Separator />
          <div className='mx-auto max-w-5xl px-6 py-10'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
              {/* Brand */}
              <div className='flex flex-col gap-3'>
                <Link to='/' className='font-heading text-foreground text-xl font-bold' aria-label='Home'>
                  {personal.initials}
                </Link>
                <p className='text-muted-foreground text-sm'>{personal.tagline}</p>
                <div className='flex gap-2'>
                  <Button variant='ghost' size='sm' asChild className='size-8 p-0'>
                    <a href={personal.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub profile'>
                      <GitHubIcon aria-hidden='true' />
                    </a>
                  </Button>
                  <Button variant='ghost' size='sm' asChild className='size-8 p-0'>
                    <a href={personal.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn profile'>
                      <LinkedinIcon aria-hidden='true' />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <nav aria-label='Footer navigation'>
                <p className='text-foreground mb-4 text-xs font-semibold tracking-widest uppercase'>
                  {siteConfig.footer.navigationHeading}
                </p>
                <ul className='flex flex-col gap-2' role='list'>
                  {footerLinks.map(({ label, href }) => {
                    const isExternal = href.startsWith('http');
                    return (
                      <li key={href}>
                        {isExternal ? (
                          <a
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors'>
                            {label}
                            <ExternalLink className='size-3' aria-hidden='true' />
                          </a>
                        ) : (
                          <Link
                            to={href}
                            className='text-muted-foreground hover:text-foreground text-sm transition-colors'>
                            {label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Built with */}
              <div className='flex flex-col gap-3'>
                <p className='text-foreground text-xs font-semibold tracking-widest uppercase'>
                  {siteConfig.footer.builtWithHeading}
                </p>
                <div className='flex flex-wrap gap-1.5'>
                  {siteConfig.footer.builtWithTech.map((tech) => (
                    <Badge key={tech} variant='secondary' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className='text-muted-foreground text-xs'>
                  {siteConfig.footer.handcraftedIn} {personal.location} &bull; &copy; {new Date().getFullYear()}{' '}
                  {personal.name}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom micro-bar */}
          <Separator />
          <div className='mx-auto flex max-w-5xl items-center justify-between px-6 py-4'>
            <p className='text-muted-foreground text-xs'>
              &copy; {new Date().getFullYear()} {personal.name}. {siteConfig.footer.allRightsReserved}
            </p>
            <a
              href={personal.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs transition-colors'>
              <GitHubIcon className='size-3' aria-hidden='true' />
              {siteConfig.footer.viewSource}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ─── Contact Card ────────────────────────────────────────────────────────────

interface ContactCardProps {
  option: {
    id: string;
    title: string;
    description: string;
    action: string;
    href: string;
    copyValue?: string;
    external: boolean;
  };
}

function ContactCard({ option }: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const Icon = contactIcons[option.id as keyof typeof contactIcons] ?? Mail;

  async function handleCopy(): Promise<void> {
    if (!option.copyValue) return;
    await navigator.clipboard.writeText(option.copyValue);
    setCopied(true);
    toast.success(siteConfig.contact.emailCopiedToast);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Card className='group border-t-primary/30 hover:border-t-primary/60 rounded-none border-t-2 transition-colors'>
      <CardHeader className='pb-2'>
        <div className='text-muted-foreground mb-2'>
          <Icon aria-hidden='true' className='size-5' />
        </div>
        <CardTitle className='font-heading text-sm font-semibold'>{option.title}</CardTitle>
        <CardDescription className='text-xs'>{option.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {option.copyValue ? (
          <Button
            variant='outline'
            size='sm'
            className='w-full text-xs'
            onClick={() => void handleCopy()}
            aria-label={copied ? 'Email copied' : `Copy ${option.copyValue ?? ''}`}>
            <Copy data-icon='inline-start' aria-hidden='true' />
            {copied ? siteConfig.contact.copiedButton : option.action}
          </Button>
        ) : (
          <Button variant='outline' size='sm' className='w-full text-xs' asChild>
            <a
              href={option.href}
              target={option.external ? '_blank' : undefined}
              rel={option.external ? 'noopener noreferrer' : undefined}
              aria-label={option.action}>
              <ExternalLink data-icon='inline-start' aria-hidden='true' />
              {option.action}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
