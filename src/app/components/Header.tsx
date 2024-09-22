'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        name: 'Home', href: '/'
    },
    {
        name: 'Portfolio', href: '/#projects'
    },
    {
        name: 'About Me', href: '/#aboutme'
    },
    {
        name: 'Contact', href: '/#contact'
    },
]

const Header = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

  return (
    <div className='bg-[#0D1225] h-[99px] sticky top-0 flex items-center'>
        {/* Here should be come the max-with part and whit, also somwere here coming mob logic */}
        {/* TODO make general container for content max-w osaks */}
        <div className='flex justify-between max-w-[1240px] mx-auto w-full'>
            <Link href={'/'}>Kadi Kerner</Link>
            <div>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href} key={link.name} className={isActive ? 'bg-red-300' : 'bg-green-300'}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Header