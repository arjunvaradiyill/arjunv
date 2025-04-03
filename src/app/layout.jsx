import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeWrapper from '@/components/ThemeWrapper'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arjun Varadiyil | Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  icons: {
    icon: '/images/favicon.jpg',
    shortcut: '/images/favicon.jpg',
    apple: '/images/favicon.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.jpg" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black dark:bg-black text-yellow-200 dark:text-yellow-100`}>
        <ThemeProvider>
          <ThemeWrapper>
            <AnimatedBackground />
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
} 