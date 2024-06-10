import Link from 'next/link'

export default function RoadMapPage() {
  return (
    <main className="flex flex-1 h-screen justify-center px-4 lg:px-12 items-start flex-col gap-4">
      <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
        Roteiro das Apresentações
      </h1>
      <article className="px-4 lg:px-12">
        <ol className="flex flex-col gap-1 list-decimal">
          <li>Apresentação do Grupo</li>
          <li>
            <Link href="/#timeline">Linha do Tempo</Link>
          </li>
          <li>
            Curso de Ciência da Computação
            <ul className="list-disc">
              <li className="ml-4">Princípios Fundamentais</li>
              <li className="ml-4">Duração e Estrutura</li>
            </ul>
          </li>
          <li>
            Sobre as Matérias
            <ul className="list-disc">
              <li className="ml-4">Fundamentos da Programação</li>
              <li className="ml-4">Estruturas de Dados e Algoritmos</li>
              <li className="ml-4">Rede de Computadores</li>
              <li className="ml-4">Banco de Dados</li>
              <li className="ml-4">Matemática Aplicada</li>
              <li className="ml-4">Teoria da Computação</li>
            </ul>
          </li>
          <li>
            E Além das Disciplinas Obrigratórias
            <ul className="list-disc">
              <li className="ml-4">Inteligência Artificial</li>
              <li className="ml-4">Cybersegurança</li>
              <li className="ml-4">Desenvolvimento de Jogos</li>
            </ul>
          </li>
          <li>
            Sobre as Universidades
            <ul className="list-disc">
              <li className="ml-4">Rede pública</li>
              <li className="ml-4">Rede Privada</li>
            </ul>
          </li>
          <li>
            Sobre o Mercado de Trabalho
            <ul className="list-disc">
              <li className="ml-4">Visão Geral</li>
              <li className="ml-4">Detalhamento</li>
            </ul>
          </li>
        </ol>
      </article>
    </main>
  )
}
