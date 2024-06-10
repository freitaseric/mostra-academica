import { DesktopTimeline, MobileTimeline } from '@/components'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Separator,
} from '@/components/ui'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen gap-32">
      <section className="flex flex-col justify-center items-center gap-16 md:flex-row md:justify-around md:items-start lg:mt-28 2xl:mt-48 xl:gap-64 2xl:justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
            Ciência da Computação
          </h1>
          <h2 className="flex flex-row justify-between items-center gap-4 text-base lg:text-lg xl:text-xl">
            <span>8 semestres</span>{' '}
            <Separator orientation="vertical" className="h-4" />{' '}
            <span>4 anos</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-screen md:w-auto">
          <Accordion
            type="single"
            collapsible
            className="w-[75%] md:w-96 lg:w-[32rem]"
          >
            <AccordionItem value="1">
              <AccordionTrigger className="lg:text-xl">
                O que posso aprender no curso?
              </AccordionTrigger>
              <AccordionContent className="text-wrap text-justify md:text-xs lg:text-lg">
                No curso de ciência da computação as matérias principais, ou
                seja, as específicas deste curso, são{' '}
                <strong>Algoritmos</strong>,{' '}
                <strong>Estruturas de Dados</strong>,{' '}
                <strong>Engenharia de Software</strong>,{' '}
                <strong>Modelagem de Dados</strong>,{' '}
                <strong>Rede de Computadores</strong>, dentre outras.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger className="lg:text-xl">
                Onde posso achar o curso?
              </AccordionTrigger>
              <AccordionContent className="text-wrap text-justify md:text-xs lg:text-lg">
                Algumas universidades públicas renomadas que oferecem o curso de
                Ciência da Computação são as{' '}
                <strong>universidades federais</strong> de diversos estados,
                incluindo a{' '}
                <strong>Universidade Federal de Roraima (UFRR)</strong>. Na rede
                privada, destam-se instituições como a <strong>Estácio</strong>,{' '}
                <strong>Anhanguera</strong>, <strong>Unip</strong>,{' '}
                <strong>Unifacs</strong>, entre outras.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger className="lg:text-xl">
                Como seria o mercado de trabalho?
              </AccordionTrigger>
              <AccordionContent className="text-wrap text-justify md:text-xs lg:text-lg">
                O mercado de trabalho para um cientista da computação é bastante
                promissor, com salários que podem atingir até{' '}
                <strong>R$ 12.000,00</strong> (doze mil reais), dependendo da
                experiência, cargo, empresa, local de trabalho, além da
                possibilidade de trabalhar para o exterior. No entanto, em
                média, um cientista da computação no Brasil pode receber cerca
                de <strong>R$ 2.500,00</strong> (dois mil e quinhentos reais)
                como salário em regime CLT.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-8 lg:gap-12 md:ml-8 mb-12 lg:mb-0">
        <h1 id="timeline" className="text-lg font-bold lg:text-2xl">
          Linha do Tempo da Computação
        </h1>
        <DesktopTimeline />
        <MobileTimeline />
      </section>
    </main>
  )
}
