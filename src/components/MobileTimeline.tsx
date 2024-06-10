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
    {
      title: 'Século XVII',
      description:
        'Régua de Cálculo invenção de John Napier, o primeiro instrumento analógico de contagem.',
      content:
        'A régua de cálculo foi inventada por William Oughtred no século XVII e é baseada nos logaritmos de John Napier e nas escalas logarítmicas de Edmund Gunter. Ela permite realizar operações matemáticas complexas através da adição e subtração de logaritmos. A régua de cálculo foi amplamente utilizada até a década de 1970, quando as calculadoras eletrônicas se tornaram mais populares.',
      url: 'https://pt.wikipedia.org/wiki/R%C3%A9gua_de_c%C3%A1lculo#:~:text=A%20r%C3%A9gua%20de%20c%C3%A1lculo%20%C3%A9%20a%20m%C3%A3e%20das%20calculadoras%20eletr%C3%B4nicas,c%C3%A1lculo%20nas%20suas%20fun%C3%A7%C3%B5es%20iniciais).',
    },
    {
      title: 'Século XVII',
      description: 'Máquina de Pascal: Primeira máquina de calcular automática criada por Blaise Pascal.',
      content:
        'A máquina Pascalina, criada por Blaise Pascal no século XVII, é considerada a primeira calculadora mecânica da história. Ela foi projetada para facilitar cálculos matemáticos complexos e tornar o trabalho dos matemáticos mais eficiente e preciso. A máquina Pascalina usava um sistema de engrenagens com rodas dentadas que correspondiam a algarismos e permitiam o cálculo através do transporte mecânico.',
      url: 'https://pt.wikipedia.org/wiki/Pascalina',
    },
    {
      title: 'Século VIII',
      description:
        'Roda de Leibniz: Gottfried Wilhelm Leibniz desenvolve o primeiro sistema de numeração binária moderno.',
      content:
        'A roda de Leibniz foi inventada por Gottfried Wilhelm Leibniz em 1673 e é um cilindro com um conjunto de dentes de comprimentos incrementais. Quando acoplada a uma roda de contagem, ela pode ser usada na máquina de calcular para realizar operações aritméticas. A roda de Leibniz foi usada por cerca de 300 anos até o advento das calculadoras eletrônicas.',
      url: 'https://www.ufrgs.br/amlef/glossario/roda-de-leibniz/',
    },
    {
      title: 'Século XIX',
      description:
        'Máquina Analítica: Charles Babbage concebe uma máquina que é comparada com o computador atual.',
      content:
        'A Máquina Analítica foi concebida pelo matemático Charles Babbage no século XIX e é considerada o precursor dos computadores modernos. Ela seria capaz de realizar cálculos complexos automaticamente e precisamente. Embora não tenha sido construída durante sua vida, a Máquina Analítica teve um impacto significativo no desenvolvimento da computação.',
      url: 'https://pt.wikipedia.org/wiki/M%C3%A1quina_anal%C3%ADtica',
    },
    {
      title: 'Século XIX',
      description:
        'Cartões Perfurados: Herman Hollerith projeta um sistema para calcular o censo dos EUA, levando à fundação da IBM.',
      content:
        'Os cartões perfurados foram inicialmente projetados pela IBM e foram os precursores da memória usada em computadores. Eles eram usados para incluir dados e comandos nas primeiras máquinas computacionais, que eram muito grandes e complicadas para serem utilizadas.',
      url: 'https://pt.wikipedia.org/wiki/Cart%C3%A3o_perfurado',
    },
    {
      title: 'Século XX',
      description:
        'Máquina de Turing: Alan Turing apresenta a noção de uma máquina universal.',
      content:
        'A Máquina de Turing foi concebida pelo matemático Alan Turing na década de 1930 e é um modelo teórico que simula qualquer algoritmo computacional. Ela desempenhou um papel crucial na fundação da ciência da computação moderna.',
      url: 'https://pt.wikipedia.org/wiki/M%C3%A1quina_de_Turing',
    },
    {
      title: 'Século XXI',
      description:
        'Tempos Modernos',
      content:
        'Avanços em hardware, software e aplicativos, com smartphones carregando mais poder de computação do que os primeiros modelos.',
      url: 'https://www.portalinsights.com.br/perguntas-frequentes/quais-sao-os-principais-avancos-tecnologicos-atuais#:~:text=Quais%20s%C3%A3o%20os%20avan%C3%A7os%20tecnol%C3%B3gicos,volum%C3%A9tricos%20s%C3%A3o%20alguns%20exemplos%20disso.',
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
