'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const PopupContactModal = dynamic(
  () => import('@/components/common/PopupContactModal').then((mod) => mod.PopupContactModal),
  { ssr: false }
);

export function DeferredPopupContactModal() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenContactPopup') === 'true';
    if (hasSeen) return;

    // Only fetch the modal's code once we actually decide to show it.
    const timer = setTimeout(() => setShouldLoad(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return <PopupContactModal onDismiss={() => setShouldLoad(false)} />;
}
