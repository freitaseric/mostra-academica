'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui'

export function MobileTimeline() {
  const points = [
    {
      title: 'Século V a.C.',
      description:
        'Criação do Ábaco, a primeira máquina de computar da história.',
      content:
        'O ábaco é um instrumento de cálculo antigo que tem sido utilizado há milhares de anos em diversas civilizações ao redor do mundo. Ele consiste em uma série de argolas ou fichas que deslizam em hastes fixas, permitindo a realização de operações matemáticas como adição, subtração, multiplicação e divisão.',
      url: 'https://pt.wikipedia.org/wiki/%C3%81baco',
    },
  ]

  return (
    <div className="flex lg:hidden flex-col items-center justify-center gap-2">
      {points.map((point, index) => (
        <>
          <AlertDialog key={index}>
            <AlertDialogTrigger>
              <div className="rounded-full bg-zinc-50 p-2" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{point.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {point.description}
                </AlertDialogDescription>
                <p>{point.content}</p>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Fechar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => window.open(point.url, '_blank')}
                >
                  Saiba Mais
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {points.length > index + 1 ? (
            <div className="rounded-t-full rounded-b-full bg-zinc-50 py-6 px-px" />
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  )
}
