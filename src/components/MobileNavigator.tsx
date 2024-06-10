'use client'

import { HomeIcon, UsersIcon, BookIcon } from 'lucide-react'
import Link from 'next/link'

export function MobileNavigator() {
  return (
    <nav className="sm:hidden flex flex-row justify-evenly items-center bg-black bg-opacity-50 fixed bottom-1 w-full py-2 backdrop-blur-md">
      <Link
        href="/"
        className="active:scale-125 transition-transform duration-200"
      >
        <HomeIcon />
      </Link>
      <Link
        href="/roadmap"
        className="active:scale-125 transition-transform duration-200"
      >
        <BookIcon />
      </Link>
      <Link
        href="/credits"
        className="active:scale-125 transition-transform duration-200"
      >
        <UsersIcon />
      </Link>
    </nav>
  )
}
