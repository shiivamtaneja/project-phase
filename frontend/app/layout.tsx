import type { Metadata } from 'next'

import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Final',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
