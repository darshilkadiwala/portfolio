import type { ReactNode } from 'react';

import { Download, MapPin } from 'lucide-react';
import { Link } from 'react-router';

import { GitHubActivity } from '@/components/github-activity';
import { GitHubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { SiteHeader } from '@/components/site-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Status, StatusIndicator, StatusLabel } from '@/components/ui/status';
import { education, experience, personal, siteConfig, skills } from '@/data/portfolio';

import type { Route } from './+types/resume.page';

// ─── Meta ────────────────────────────────────────────────────────────────────

export function meta(_args: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: `Resume - ${personal.name}` },
    { name: 'description', content: `${personal.title}. ${personal.shortBio}` },
  ];
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  return (
    <div className='bg-background min-h-screen'>
      <SiteHeader />

      <main className='mx-auto max-w-5xl px-6 py-12'>
        <div className='flex flex-col gap-12 lg:flex-row lg:gap-16'>
          {/* ── LEFT STICKY SIDEBAR ─────────────────────────────────── */}
          <aside className='flex flex-col gap-6 lg:sticky lg:top-24 lg:h-max lg:w-80 lg:shrink-0'>
            {/* Identity block */}
            <div className='flex flex-col gap-4'>
              <Avatar className='size-20 rounded-none'>
                <AvatarImage src={personal.photo} alt={personal.name} />
                <AvatarFallback className='rounded-none text-lg font-bold'>{personal.initials}</AvatarFallback>
              </Avatar>

              <div className='flex flex-col gap-1'>
                <h1 className='font-heading text-foreground text-2xl font-bold tracking-tight'>{personal.name}</h1>
                <p className='text-muted-foreground text-sm'>{personal.title}</p>
              </div>

              {/* Availability status */}
              <Status status={personal.availability} className='w-max'>
                <StatusIndicator />
                <StatusLabel>{personal.availabilityLabel}</StatusLabel>
              </Status>

              {/* Location */}
              <div className='text-muted-foreground flex items-center gap-1.5 text-sm'>
                <MapPin className='size-3.5 shrink-0' />
                <span>{personal.location}</span>
              </div>
            </div>

            <Separator />

            {/* Short bio */}
            <p className='text-muted-foreground text-sm/relaxed'>{personal.shortBio}</p>

            <Separator />

            {/* Social links */}
            <div className='flex flex-col gap-3'>
              <p className='text-foreground text-xs font-semibold tracking-widest uppercase'>Online</p>
              <div className='flex flex-wrap gap-2'>
                <Button variant='outline' size='sm' asChild>
                  <a href={personal.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                    <GitHubIcon data-icon='inline-start' />
                    GitHub
                  </a>
                </Button>
                <Button variant='outline' size='sm' asChild>
                  <a href={personal.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <LinkedinIcon data-icon='inline-start' />
                    LinkedIn
                  </a>
                </Button>
                <Button variant='outline' size='sm' asChild>
                  <a href={personal.twitter} target='_blank' rel='noopener noreferrer' aria-label='X / Twitter'>
                    <TwitterIcon data-icon='inline-start' />X
                  </a>
                </Button>
              </div>
            </div>

            <Separator />

            {/* Download */}
            <Button asChild className='w-full'>
              <a href={personal.resumeUrl} download aria-label='Download resume PDF'>
                <Download data-icon='inline-start' />
                {siteConfig.resume.downloadResume}
              </a>
            </Button>
            <p className='text-muted-foreground text-center text-xs'>
              {siteConfig.resume.lastUpdated}: {personal.resumeLastUpdated}
            </p>
          </aside>

          {/* ── RIGHT CONTENT COLUMN ────────────────────────────────── */}
          <div className='flex min-w-0 flex-1 flex-col gap-14'>
            {/* EXPERIENCE */}
            <section aria-labelledby='experience-heading'>
              <SectionHeading id='experience-heading'>{siteConfig.resume.experienceHeading}</SectionHeading>

              <div className='flex flex-col gap-6'>
                {experience.map((entry, i) => (
                  <Card key={i} className='border-l-primary/20 rounded-none border-0 border-l-2 pl-4'>
                    <CardHeader className='p-0 pb-3'>
                      <div className='flex items-start justify-between gap-2'>
                        <div>
                          <CardTitle className='font-heading text-sm font-semibold tracking-tight'>
                            {entry.companyUrl ? (
                              <a
                                href={entry.companyUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-primary transition-colors'>
                                {entry.company}
                              </a>
                            ) : (
                              entry.company
                            )}
                          </CardTitle>
                          <p className='text-muted-foreground mt-0.5 text-xs'>{entry.role}</p>
                        </div>
                        <div className='flex shrink-0 items-center gap-2'>
                          <span className='text-muted-foreground text-xs tabular-nums'>{entry.period}</span>
                          {entry.current ? (
                            <Badge variant='secondary' className='text-xs'>
                              {siteConfig.resume.currentBadge}
                            </Badge>
                          ) : null}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className='p-0'>
                      <ul className='text-muted-foreground flex flex-col gap-1.5 text-sm' role='list'>
                        {entry.bullets.map((bullet, j) => (
                          <li key={j} className='flex gap-2'>
                            <span className='text-primary/50 mt-1 shrink-0 text-xs'>▪</span>
                            <span className='leading-relaxed'>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className='mt-3 flex flex-wrap gap-1.5'>
                        {entry.tags.map((tag) => (
                          <Badge key={tag} variant='secondary' className='text-xs'>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section aria-labelledby='skills-heading'>
              <SectionHeading id='skills-heading'>{siteConfig.resume.skillsHeading}</SectionHeading>

              <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className='rounded-none'>
                    <CardHeader className='p-0 pb-2'>
                      <CardTitle className='text-foreground px-4 pt-4 text-xs font-semibold tracking-widest uppercase'>
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='px-4 pb-4'>
                      <ul className='flex flex-col gap-1' role='list'>
                        {skillGroup.items.map((item) => (
                          <li key={item} className='text-muted-foreground text-xs'>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section aria-labelledby='education-heading'>
              <SectionHeading id='education-heading'>{siteConfig.resume.educationHeading}</SectionHeading>

              <div className='flex flex-col gap-4'>
                {education.map((entry, i) => (
                  <Card key={i} className='border-l-primary/20 rounded-none border-0 border-l-2 pl-4'>
                    <CardHeader className='p-0 pb-2'>
                      <div className='flex items-start justify-between gap-2'>
                        <div>
                          <CardTitle className='font-heading text-sm font-semibold'>{entry.institution}</CardTitle>
                          <p className='text-muted-foreground mt-0.5 text-xs'>{entry.degree}</p>
                        </div>
                        <span className='text-muted-foreground shrink-0 text-xs tabular-nums'>{entry.period}</span>
                      </div>
                    </CardHeader>
                    {entry.notes ? (
                      <CardContent className='p-0'>
                        <p className='text-muted-foreground text-sm/relaxed'>{entry.notes}</p>
                      </CardContent>
                    ) : null}
                  </Card>
                ))}
              </div>
            </section>

            {/* GITHUB ACTIVITY */}
            <section aria-labelledby='activity-heading'>
              <SectionHeading id='activity-heading'>{siteConfig.resume.activityHeading}</SectionHeading>
              <GitHubActivity username={personal.github_username} />
            </section>

            {/* CTA */}
            <div className='border-border rounded-none border p-6 text-center'>
              <p className='text-foreground mb-1 font-semibold'>{siteConfig.resume.ctaHeading}</p>
              <p className='text-muted-foreground mb-4 text-sm'>{siteConfig.resume.ctaSubheading}</p>
              <Button asChild>
                <Link to='/contact'>{siteConfig.resume.ctaButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className='mb-6 flex items-center gap-4'>
      <h2 id={id} className='font-heading text-foreground shrink-0 text-xs font-semibold tracking-widest uppercase'>
        {children}
      </h2>
      <Separator className='flex-1' />
    </div>
  );
}
