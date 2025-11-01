'use client';

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Courses', href: '/courses', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} passHref>
      <span className="px-3 py-4 text-lg font-normal cursor-pointer">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

              {/* LOGO */}
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="w-[70px] h-auto lg:w-24"
                  src={'/assets/logo/logo.png'}
                  alt="logo"
                  width={96}
                  height={96}
                />
                <div className='flex flex-col items-center gap-2 ml-6 md:ml-4'>
                  <span className='text-3xl font-bold text-Blueviolet'>Googolgen</span>
                </div>
              </div>

              {/* LINKS */}
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <CustomLink key={item.name} href={item.href}>
                        <span
                          className={classNames(
                            isActive ? 'underline-links' : 'text-slategray',
                            'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100 flex text-center'
                          )}
                        >
                          {item.name}
                        </span>
                      </CustomLink>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/assets/brochure_googolgen.pdf"
              target="_blank"
              className="hidden lg:block text-center text-Blueviolet text-lg font-medium py-5 px-8 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            >
              Download Brochure
            </Link>

            {/* MOBILE DRAWER */}
            <div className='block lg:hidden'>
              <Bars3Icon className="block h-6 w-6 cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>

          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
