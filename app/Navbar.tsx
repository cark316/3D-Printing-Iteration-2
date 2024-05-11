'use client'

import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.svg'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Explore Models', href: '/popular' },
    { label: 'Materials', href: '/materials' },
    { label: 'About', href: '/about' }
  ]

  const buttons = [
    { label: 'Sign Up', id: 1},
    { label: 'Login', id: 2}
  ]

  const icon = <Image src={logo} alt='icon' />

  return (
    <nav className='flex justify-between items-center space-x-6 px-6 py-6 text-4xl'>
        <ul className='flex space-x-6 items-center'>
            <Link href='/'>{icon}</Link>
            {links.map(links => <Link
                key={links.href}
                className={classnames({
                    'text-zinc-800' : links.href === currentPath,
                    'text-zinc-500' : links.href !== currentPath,
                    'hover:text-red-600 transition-colors' : true
                })}
                href={links.href}>{links.label}</Link>
            )}
        </ul>
        <ul className='flex space-x-6 items-center'>
            {buttons.map(buttons => <button key={buttons.id}
            className={classnames({
                'bg-white p-3 rounded' : buttons.id === 1,
                'bg-red-600 text-white p-3 rounded ' : buttons.id === 2,
                'hover:text-white hover:bg-red-600 transition-colors' : buttons.id === 1 && true,
                'hover:text-black hover:bg-white transition-colors' : buttons.id === 2 && true
            })}
            >
              {buttons.label}
            </button>)}
        </ul>
    </nav>
  )
}

export default Navbar