'use client'

import Image from 'next/image'
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
        <Image
          src="/android-chrome-512x512.png"
          alt="Logo da Equipe"
          className="transition-all duration-700 hover:transform-cpu hover:scale-150"
          width={32}
          height={32}
        />
        <nav className="flex flex-row justify-center items-center">
          <ul className="flex flex-row justify-between items-center gap-8">
            <li className="uppercase font-medium transition-all duration-500 hover:font-bold hover:text-lg">
              <Link href="/">Início</Link>
            </li>
            <li className="uppercase font-medium transition-all duration-500 hover:font-bold hover:text-lg">
              <Link href="/roadmap">Roteiro</Link>
            </li>
            <li className="uppercase font-medium transition-all duration-500 hover:font-bold hover:text-lg">
              <Link href="/credits">Créditos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="flex flex-row justify-center items-center gap-2 bg-[#010101] bg-opacity-85 h-10 shadow-xl mb-12 sm:hidden">
        <Image
          src="/android-chrome-512x512.png"
          alt="Logo da Equipe"
          className="transition-all duration-700 hover:transform-cpu hover:scale-150"
          width={24}
          height={24}
        />
        {$pathname}
      </header>
    </>
  )
}
