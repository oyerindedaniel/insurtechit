'use client';

import { useGlobalStoreContext } from '@/context';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import ExternalImage from '../ui/external-image';
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
      style={{
        backgroundColor: navbarColor,
        ...(navbarColor === '#FFFFFF' && {
          color: 'black',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        })
      }}
      className="px-6 lg:px-12 text-white backdrop-blur-md py-4 fixed w-full max-w-[1500px] mx-auto z-30"
    >
      <nav className="flex items-center justify-between">
        <Link href="/">
          <ExternalImage
            src="https://res.cloudinary.com/dqm7wwe4d/image/upload/v1710166155/folder/insurtechit-50.png"
            alt="Insurtechit"
            width={100}
            height={100}
            priority
          />
        </Link>
        <Button
          aria-label={isSidebarOpen ? 'Close sidebar navigation' : 'Open sidebar navigation'}
          className={cn('fixed top-4 right-6 shadow-sm cursor-pointer group md:hidden text-center')}
          size="icon"
          type="button"
          variant="unstyled"
          onClick={handleToogleSideBarChange}
        >
          <span
            className={cn(
              "inline-block rounded-full after:rounded-full before:rounded-full transition-all before:inline-block after:inline-block duration-500 cursor-pointer md:hidden relative bg-black h-[2px] w-[30px] before:content-[''] before:absolute before:w-[30px] before:hover: before:h-[2px] after:w-[30px] after:h-[2px] before:-top-[10px] before:bg-black before:left-0 after:content-[''] after:absolute after:top-[10px] after:left-0 after:bg-black",
              isSidebarOpen
                ? 'bg-transparent before:rotate-[135deg] after:-rotate-[135deg] before:top-0 after:top-0'
                : ''
            )}
          ></span>
        </Button>
        <ul className="space-x-10 text-sm hidden md:flex md:items-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'text-inherit cursor-pointer relative transition-all duration-75 hover:font-semibold hover:border-b-2 hover:border-brand',
                pathname === item.link ? 'font-semibold' : ''
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
