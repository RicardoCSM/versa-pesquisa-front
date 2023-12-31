import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
const roboto = Roboto({ weight:"400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Versa Pesquisa',
  description: 'Crie e gerencie suas pesquisa com o Versa Pesquisa!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#F8F2E2] ${roboto.className}`}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}