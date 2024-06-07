'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
  const $router = useRouter()

  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-2 h-screen">
      <h1>404</h1>
      <Button variant="secondary" onClick={() => $router.replace('/')}>
        Voltar ao Início
      </Button>
    </div>
  )
}
