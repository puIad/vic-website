import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/polymaze.css'

export const metadata: Metadata = {
  title: 'POLYMAZE - Vision & Innovation Club',
  description: 'POLYMAZE is a maze-solving competition hosted by the Vision & Innovation Club. Test your skills in mechanics, electronics, robotics and automatics!',
  openGraph: {
    title: 'POLYMAZE',
    description: 'POLYMAZE is a maze-solving competition hosted by the Vision & Innovation Club.',
    url: 'https://www.vic-enp.com/polymaze',
    type: 'website',
  },
}

export default function PolymazeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="shortcut icon" href="/polymaze/logo-vic-small.png" type="image/x-icon" />
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" 
      />
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.1/lottie.min.js" 
        integrity="sha512-H6aKTjvYAazW0iNuGj1f2dZvSWlt1HGZGEDsXRPETo2IB4H6v36Vl2qiZNlCRxOp0kT7iBf+7USNPavNscZGAw==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer"
        strategy="beforeInteractive"
      />
      <Script 
        type="module"
        src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      {children}
    </>
  )
}
