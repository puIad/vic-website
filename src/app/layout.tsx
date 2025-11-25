import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/infinite-scroll.scss'
import Script from 'next/script'
import { LoadingProvider } from '@/components/LoadingContext'

export const metadata: Metadata = {
  title: 'Vision & Innovation Club',
  description: 'The Vision & Innovation Club - A creative hub where ideas come to life and possibilities are endless!',
  openGraph: {
    title: 'The Vision & Innovation Club',
    description: '',
    url: 'https://www.vic-enp.com',
    images: [
      {
        url: 'https://www.vic-enp.com/banner.png',
        width: 851,
        height: 315,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/header-logo.svg" type="image/x-icon" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.1/lottie.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://unpkg.com/scrollreveal" 
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
