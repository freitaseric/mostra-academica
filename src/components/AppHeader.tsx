'use client'

import { Laptop2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppHeader() {
  let $pathname = usePathname()
  if ($pathname === '/') $pathname = 'Início'
  else if ($pathname === '/credits') $pathname = 'Créditos'
  else $pathname = 'Desconhecido'

  return (
    <>
      <header className="sm:flex flex-row justify-around items-center bg-[#010101] bg-opacity-85 h-10 shadow-xl mb-12 hidden">
        <Laptop2 className="transition-all duration-700 hover:transform-cpu hover:scale-150" />
        <nav className="flex flex-row justify-center items-center">
          <ul className="flex flex-row justify-between items-center gap-8">
            <li className="uppercase font-medium transition-all duration-500 hover:font-bold hover:text-lg">
              <Link href="/">Início</Link>
            </li>
            <li className="uppercase font-medium transition-all duration-500 hover:font-bold hover:text-lg">
              <Link href="/credits">Créditos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="flex flex-row justify-center items-center gap-2 bg-[#010101] bg-opacity-85 h-10 shadow-xl mb-12 sm:hidden">
        <Laptop2 />
        {$pathname}
      </header>
    </>
  )
}
