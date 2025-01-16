import '@/styles/globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/store/providers'

export const metadata: Metadata = {
  title: 'Max – Web Developer',
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
      <body className={'antialiased'}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main
            className="relative dark:bg-black-100 flex justify-center
              items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
