'use client';

import { GlobalStoreProvider } from '../../context';

export function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalStoreProvider>{children}</GlobalStoreProvider>;
}
