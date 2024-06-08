'use client'
import { Button } from './ui'

export function AppFooter() {
  return (
    <footer className="hidden lg:flex flex-row justify-between items-center bg-[#060414] px-16 py-8 mt-64 border-t-2">
      <article className="flex flex-col justify-center items-start">
        <h3 className="text-lg font-medium">Ciência da Computação</h3>
        <small className="text-zinc-400">Escola Estadual Monteiro Lobato</small>
        <br />
        <small className="text-zinc-400">
          <span className="font-mono text-zinc-400">I</span> Mostra Acadêmica
        </small>
      </article>
      <article className="flex flex-row justify-around items-start gap-8">
        <section className="flex flex-col justify-around items-center gap-2">
          <h4 className="text-sm">Referências</h4>
          <ul>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() =>
                  window.open(
                    'https://querobolsa.com.br/cursos-e-faculdades/roraima--boa-vista/ciencia-da-computacao/todos',
                    '_blank',
                  )
                }
              >
                Quero Bolsa
              </Button>
            </li>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() =>
                  window.open(
                    'https://www.educamaisbrasil.com.br/cursos-e-faculdades/ciencias-da-computacao',
                    '_blank',
                  )
                }
              >
                EducaMaisBrasil
              </Button>
            </li>
          </ul>
        </section>
        <section className="flex flex-col justify-around items-center gap-2">
          <h4 className="text-sm">Faculdades</h4>
          <ul>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() => window.open('https://estacio.br/', '_blank')}
              >
                Estácio
              </Button>
            </li>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() =>
                  window.open('https://www.anhanguera.com/', '_blank')
                }
              >
                Anhaguera
              </Button>
            </li>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() => window.open('https://ufrr.br/', '_blank')}
              >
                UFRR
              </Button>
            </li>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() => window.open('https://www.unipi.it/', '_blank')}
              >
                Unipi
              </Button>
            </li>
            <li>
              <Button
                className="text-[#188AF3]"
                variant="link"
                size="sm"
                onClick={() => window.open('https://www.unifacs.br/', '_blank')}
              >
                Unifacs
              </Button>
            </li>
          </ul>
        </section>
      </article>
    </footer>
  )
}
