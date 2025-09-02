'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Reusable CTA button with animated conic-gradient ring and dark inner pill
export const CTAButton = forwardRef(({ className, children, asChild = false, ...props }, ref) => {
  const Inner = asChild ? 'span' : 'button';
  return (
    <Inner
      ref={ref}
      className={cn(
        'relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </Inner>
  );
});

CTAButton.displayName = 'CTAButton';

export default CTAButton;


