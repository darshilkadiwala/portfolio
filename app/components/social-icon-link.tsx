import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SocialIconLinkProps extends Omit<ComponentProps<'a'>, 'children'> {
  name: string;
  icon: ReactNode;
}

export function SocialIconLink({ href, name, icon, className, ...rest }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn('text-muted-foreground hover:text-primary transition-colors duration-200', className)}
      {...rest}
      aria-label={name}>
      {icon}
    </a>
  );
}
