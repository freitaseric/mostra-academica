'use client'

import { Home, Users } from 'lucide-react'
import Link from 'next/link'

export function MobileNavigator() {
  return (
    <nav className="sm:hidden flex flex-row justify-evenly items-center bg-black bg-opacity-50 fixed bottom-1 w-full py-2">
      <Link
        href="/"
        className="active:scale-125 transition-transform duration-200"
      >
        <Home />
      </Link>
      <Link
        href="/credits"
        className="active:scale-125 transition-transform duration-200"
      >
        <Users />
      </Link>
    </nav>
  )
}
