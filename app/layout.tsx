import type { Metadata } from 'next'
import { Inter, Roboto_Condensed, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Condensed({ subsets: ['latin'] })
const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
