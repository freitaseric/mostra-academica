'use client'

import { AppHeader, MobileNavigator } from '@/components'
import { Button } from '@/components/ui'
import { Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CreditsPage() {
  const $router = useRouter()

  return (
    <>
      <AppHeader />
      <main className="flex flex-1 flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-black">
          This page will be created soon...
        </h1>
        <Button
          onClick={() => $router.replace('/')}
          className="transition-transform duration-500 hover:scale-110 active:scale-110"
        >
          <Home />
        </Button>
      </main>
      <MobileNavigator />
    </>
  )
}
