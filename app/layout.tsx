import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import ThemeContextProvider from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matteo | Portfolio',
  description: 'Student embedded and full stack developer looking for internships and opportunities to grow and learn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
          <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 -z-10`}>
            <div className="
                          bg-[#fbe2e3] 
                            absolute
                            top-[-6rem]
                            -z-10
                            right-[11rem]
                            h-[31.25rem]
                            w-[31.25rem]
                            rounded-full
                            blur-[10rem]
                            sm:w-[68.75rem]
                            dark:bg-[#946263]
                            webkitFix
                            "
                            ></div>
            <div className="
                          bg-[#dbd7fb] 
                            absolute
                            top-[-1rem]
                            -z-10
                            right-[11rem]
                            h-[31.25rem]
                            w-[50rem]
                            rounded-full
                            blur-[10rem]
                            sm:w-[68.75rem]
                            md:left-[-33rem]
                            lg:left-[-28rem]
                            xl:left-[-15rem]
                            2xl:left-[-5rem]
                            dark:bg-[#676394]
                            webkitFix
                            "></div>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Toaster position="bottom-center"/>
                <ThemeToggle />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </body>
    </html>
  )
}
