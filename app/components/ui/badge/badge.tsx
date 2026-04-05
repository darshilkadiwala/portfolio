import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

import { badgeVariants, type BadgeVariantsProps } from './badge-variants';

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: ComponentProps<'span'> & BadgeVariantsProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp data-slot='badge' data-variant={variant} className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
