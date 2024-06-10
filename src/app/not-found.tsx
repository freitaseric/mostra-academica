'use client'

import { Button } from '@/components/ui'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="flex flex-1 flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black">
          404
        </h1>
        <h2 className="font-bold md:text-lg lg:text-xl xl:text-2xl">
          Página não encontrada
        </h2>
        <p>Desculpe, a página que você está procurando não existe.</p>
      </div>
      <Button onClick={() => router.back()}>Voltar</Button>
    </div>
  )
}
