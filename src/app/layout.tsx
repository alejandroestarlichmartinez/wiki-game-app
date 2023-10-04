import { Header, Navbar, SearchBox } from '@/components'
import { Providers } from './Providers'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Mooli } from 'next/font/google'

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-text',
})

const mooli = Mooli({
  weight: "400",
  subsets: ['latin-ext'],
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'WikiGames',
  description: 'The videogames database',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mooli.variable} font-sans`}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
