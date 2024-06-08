import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Ciência da Computação',
  description: 'EEML - 1° Mostra Acadêmica | Sala 28',
  applicationName: 'Mostra Acadêmica EEML',
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Mostra Acadêmica | EEML',
    statusBarStyle: 'black-translucent',
    startupImage: '/apple-touch-icon.png',
  },
  authors: {
    name: 'Eric Freitas',
    url: 'https://github.com/freitaseric/',
  },
  category: 'education',
  icons: {
    icon: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    title: 'Mostra Acadêmica | EEML',
    description: 'EEML - 1° Mostra Acadêmica | Sala 28',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden dark',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
