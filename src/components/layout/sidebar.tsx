'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';
import { useGlobalStoreContext } from '../../context';
import { MenuItem } from './types';

interface Props {
  items: MenuItem[];
}

const SiteSidebar: React.FC<Props> = ({ items }) => {
  const {
    state: {
      UI: { isSidebarOpen }
    },
    dispatch
  } = useGlobalStoreContext();
  const pathname = usePathname();

  const handleSetSideBarChange = useCallback(
    (payload: boolean) => {
      dispatch({ type: 'SET_SIDEBAR', payload });
    },
    [dispatch]
  );

  useEffect(() => {
    handleSetSideBarChange(false);
  }, [handleSetSideBarChange, pathname]);

  return (
    <aside
      className={cn(
        'fixed top-0 right-0 w-screen h-[70vh] rounded-b-xl transition-all duration-300 md:hidden z-10 bg-white',
        isSidebarOpen ? 'translate-y-0 opacity-1' : '-translate-y-full opacity-0'
      )}
    >
      <ul className="flex justify-center flex-col space-y-10 text-center h-full overflow-hidden text-white items-center text-xl">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              'text-black cursor-pointer',
              pathname === item.link ? 'font-semibold transition-all border-b-2 border-brand' : ''
            )}
          >
            <Link href={item.link} onClick={() => handleSetSideBarChange(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SiteSidebar;
