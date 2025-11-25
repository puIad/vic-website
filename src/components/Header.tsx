'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useLoading } from './LoadingContext'

declare global {
  interface Window {
    lottie: any;
  }
}

interface HeaderProps {
  showExploreBtn?: boolean;
}

export default function Header({ showExploreBtn = true }: HeaderProps) {
  const pathname = usePathname()
  const [navStatus, setNavStatus] = useState(0)
  const { isLoading } = useLoading()
  const navanim1Ref = useRef<any>(null)
  const navanim2Ref = useRef<any>(null)
  const ocanimfRef = useRef<HTMLDivElement>(null)
  const ocanimdRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.lottie) {
      if (ocanimfRef.current && !navanim1Ref.current) {
        navanim1Ref.current = window.lottie.loadAnimation({
          container: ocanimfRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/menu/menuV2.json'
        })
      }
      if (ocanimdRef.current && !navanim2Ref.current) {
        navanim2Ref.current = window.lottie.loadAnimation({
          container: ocanimdRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/menu/menuV2.json'
        })
      }
    }
  }, [])

  const toggleNav = (headerElement: HTMLElement | null) => {
    if (!headerElement) return
    
    if (navStatus === 0) {
      if (navanim1Ref.current) {
        navanim1Ref.current.setDirection(1)
        navanim1Ref.current.play()
      }
      if (navanim2Ref.current) {
        navanim2Ref.current.setDirection(1)
        navanim2Ref.current.play()
      }
      setNavStatus(1)
      headerElement.classList.add('open')
    } else {
      if (navanim1Ref.current) {
        navanim1Ref.current.setDirection(-1)
        navanim1Ref.current.play()
      }
      if (navanim2Ref.current) {
        navanim2Ref.current.setDirection(-1)
        navanim2Ref.current.play()
      }
      setNavStatus(0)
      headerElement.classList.remove('open')
    }
  }

  const getActiveClass = (path: string) => {
    if (path === '/' && pathname === '/') return 'active'
    if (path !== '/' && pathname.startsWith(path)) return 'active'
    return ''
  }

  // Don't render headers while loading
  if (isLoading) return null

  return (
    <>
      <header id="header-desk-dynamic">
        <Link href="/"><img src="/header-logo.svg" alt="" /></Link>
        <nav>
          <Link href="/" className={getActiveClass('/')}>home</Link>
          <Link href="/about" className={getActiveClass('/about')}>about</Link>
          <Link href="/community" className={getActiveClass('/community')}>community</Link>
          <Link href="/events" className={getActiveClass('/events')}>events</Link>
          <Link href="/contact" className={getActiveClass('/contact')}>contact us</Link>
        </nav>
        {showExploreBtn ? (
          <Link href="/#description-desk" className="expBtn">explore more</Link>
        ) : (
          <div></div>
        )}
      </header>
      
      <header id="header-desk-fix">
        <Link href="/"><img src="/header-logo.svg" alt="" /></Link>
        <nav>
          <Link href="/" className={getActiveClass('/')}>home</Link>
          <Link href="/about" className={getActiveClass('/about')}>about</Link>
          <Link href="/community" className={getActiveClass('/community')}>community</Link>
          <Link href="/events" className={getActiveClass('/events')}>events</Link>
          <Link href="/contact" className={getActiveClass('/contact')}>contact us</Link>
        </nav>
        {showExploreBtn ? (
          <Link href="/#description-desk" className="expBtn">explore more</Link>
        ) : (
          <div></div>
        )}
      </header>

      <header id="header-mob-fix" className="">
        <div className="navmobiletop">
          <Link href="/"><img src="/mobile-header-logo.svg" alt="" /></Link>
          <div 
            className="ocanimf" 
            ref={ocanimfRef}
            onClick={(e) => toggleNav((e.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement)}
          ></div>
        </div>
        <nav>
          <Link href="/" className={getActiveClass('/')}>home</Link>
          <Link href="/about" className={getActiveClass('/about')}>about</Link>
          <Link href="/community" className={getActiveClass('/community')}>community</Link>
          <Link href="/events" className={getActiveClass('/events')}>events</Link>
          <Link href="/contact" className={getActiveClass('/contact')}>contact us</Link>
          {showExploreBtn && (
            <Link href="/#description-mob" className="expBtn">explore more</Link>
          )}
        </nav>
      </header>

      <header id="header-mob-dynamic">
        <div className="navmobiletop">
          <Link href="/"><img src="/mobile-header-logo.svg" alt="" /></Link>
          <div 
            className="ocanimd" 
            ref={ocanimdRef}
            onClick={(e) => toggleNav((e.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement)}
          ></div>
        </div>
        <nav>
          <Link href="/" className={getActiveClass('/')}>home</Link>
          <Link href="/about" className={getActiveClass('/about')}>about</Link>
          <Link href="/community" className={getActiveClass('/community')}>community</Link>
          <Link href="/events" className={getActiveClass('/events')}>events</Link>
          <Link href="/contact" className={getActiveClass('/contact')}>contact us</Link>
          {showExploreBtn && (
            <Link href="/#description-mob" className="expBtn">explore more</Link>
          )}
        </nav>
      </header>
    </>
  )
}
