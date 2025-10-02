import '@/styles/globals.css'

import type { Metadata } from 'next'

import { Footer, Header } from '@/components/layout'
import { ThemeProvider } from '@/store/providers'

export const metadata: Metadata = {
  title: 'Max – Web Engineer',
  description:
    'Professional in crafting dynamic, user-focused web experiences using modern technologies. This is my portfolio.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'antialiased dark:bg-black-100'}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main
            className="relative flex justify-center items-center flex-col
              mx-auto sm:px-10 px-5 overflow-x-clip min-h-[calc(100vh-60px)]"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
