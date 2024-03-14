'use client';

import { useGlobalStoreContext } from '@/context';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import { MenuItem } from './types';

interface HeaderProps {
  items: Array<MenuItem>;
}

const SiteHeader: React.FC<HeaderProps> = ({ items }) => {
  const {
    state: {
      UI: { isSidebarOpen, navbarColor }
    },
    dispatch
  } = useGlobalStoreContext();

  const pathname = usePathname();
  const router = useRouter();

  const handleToogleSideBarChange = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR', payload: !isSidebarOpen });
  };

  return (
    <header
      id="header"
      style={{ backgroundColor: navbarColor }}
      className="px-6 shadow-md lg:px-12 backdrop-blur-md py-4 fixed w-full max-w-[1500px] mx-auto z-30"
    >
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166155/folder/insurtechit-50.png"
            alt="Insurtechit"
            width={100}
            height={100}
            priority
          />
        </Link>
        <Button
          aria-label={isSidebarOpen ? 'Close sidebar navigation' : 'Open sidebar navigation'}
          className={cn('block relative cursor-pointer group md:hidden')}
          size="icon"
          type="button"
          variant="unstyled"
          onClick={handleToogleSideBarChange}
        >
          <span
            className={cn(
              "inline-block rounded-full after:rounded-full before:rounded-full rotate-0 before:group-hover:opacity-100 after:group-hover:opacity-100 before:group-hover:rotate-45 after:group-hover:-rotate-45 transition-all duration-500 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer md:hidden absolute bg-black h-[2px] w-[30px] before:content-[''] before:absolute before:w-full before:-top-[10px] before:h-full before:bg-inherit before:left-0 after:content-[''] after:absolute after:w-full after:h-full after:top-[10px] after:left-0 after:bg-inherit"
            )}
          ></span>
        </Button>
        <ul className="space-x-10 text-sm hidden md:flex md:items-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'text-white cursor-pointer relative',
                pathname === item.link ? 'font-normal' : ''
              )}
            >
              <Link href={item.link}>{item.name}</Link>
              {pathname === item.link ? (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
