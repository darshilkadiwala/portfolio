import type { ComponentProps } from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

import { badgeVariants, type BadgeVariantsProps } from './badge-variants';

function Badge({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ComponentProps<'span'> & BadgeVariantsProps & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot='badge'
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge };
