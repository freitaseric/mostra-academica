import { AppHeader, MobileNavigator } from '@/components'
import { AppFooter } from '@/components/AppFooter'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Separator,
} from '@/components/ui'

export default function CreditsPage() {
  return (
    <>
      <AppHeader />
      <main className="flex flex-1 flex-col justify-center items-center gap-8">
        <h1 className="text-lg font-bold lg:text-2xl">Componentes do Grupo</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 sm:gap-8 lg:gap-24 2xl:gap-40 p-x-8">
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Eric Freitas
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 304</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Carlos Leal
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 303</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Davi Lopes
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 303</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Gabryel Oliveira
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma ???</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Javier Perdomo
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 303</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Jeremias Vincente
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 310</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              André Rocha
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma ???</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Cristian Barbosa
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma ???</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              André Araújo
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma ???</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Willyan pereira
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma ???</span>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="text-center text-lg lg:text-xl font-medium cursor-default">
              Hikaro Souza
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row justify-evenly items-center">
              <span>Assunto X</span>
              <Separator orientation="vertical" className="h-4 w-[2px]" />
              <span>Turma 303</span>
            </HoverCardContent>
          </HoverCard>
        </section>
      </main>
      <MobileNavigator />
      <AppFooter />
    </>
  )
}
