'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Tracks Next.js route changes as Meta Pixel PageView events
export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hasFbq = typeof window.fbq === 'function';
    if (!hasFbq) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    try {
      window.fbq('track', 'PageView');
    } catch (_) {
      // no-op
    }
  }, [pathname, searchParams]);

  return null;
}


