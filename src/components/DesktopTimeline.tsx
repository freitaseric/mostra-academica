'use client'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ui'

export function DesktopTimeline() {
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
    <div className="hidden lg:flex flex-row items-center justify-center gap-2">
      {points.map((point, index) => (
        <>
          <HoverCard key={index}>
            <HoverCardTrigger>
              <div className="rounded-full bg-zinc-50 p-1" />
            </HoverCardTrigger>
            <HoverCardContent className="w-[32rem]">
              <Card>
                <CardHeader>
                  <CardTitle>{point.title}</CardTitle>
                  <CardDescription>{point.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{point.content}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() => window.open(point.url, '_blank')}
                  >
                    Saiba Mais
                  </Button>
                </CardFooter>
              </Card>
            </HoverCardContent>
          </HoverCard>
          {points.length > index + 1 ? (
            <div className="rounded-t-full rounded-b-full bg-zinc-50 px-6 py-px" />
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  )
}
