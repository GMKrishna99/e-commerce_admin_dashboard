import { Nunito } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce Admin Dashboard',
  description: 'Create an admin dashboard by G_M_Krishna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>

  )
}
