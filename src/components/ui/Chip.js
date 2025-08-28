'use client';

import { cn } from '@/lib/utils';

export function Chip({ 
  children, 
  variant = 'default', 
  size = 'default', 
  selected = false,
  onClick,
  className,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer';
  
  const variants = {
    default: selected 
      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
      : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30',
    outline: selected
      ? 'border-2 border-primary bg-primary/10 text-primary'
      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    default: 'px-3 py-1 text-sm',
    sm: 'px-2 py-0.5 text-xs',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <span
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    >
      {children}
    </span>
  );
}
