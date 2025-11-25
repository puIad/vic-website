'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PolymazeHeaderProps {
  isLoading: boolean
}

export default function PolymazeHeader({ isLoading }: PolymazeHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const animContainerRef = useRef<HTMLButtonElement>(null)
  const animRef = useRef<any>(null)
  const animDirectionRef = useRef(1)

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lottie && animContainerRef.current && !animRef.current) {
      animRef.current = (window as any).lottie.loadAnimation({
        container: animContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/polymaze/Menu V2/menuV2.json'
      })
    }
  }, [isLoading])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'polymaze', 'register', 'faq', 'specifications', 'testimonies', 'Aboutus']
      const scrollY = window.scrollY
      const screenH = window.innerHeight

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const top = section.offsetTop - screenH / 3
          if (scrollY >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navToggle = () => {
    if (animRef.current) {
      animRef.current.setDirection(animDirectionRef.current)
      animRef.current.play()
      animDirectionRef.current *= -1
    }
    setMobileMenuOpen(!mobileMenuOpen)
  }

  if (isLoading) return null

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#polymaze', label: 'POLYMAZE', id: 'polymaze' },
    { href: '#register', label: 'Participate', id: 'register' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
    { href: '#specifications', label: 'Specifications', id: 'specifications' },
    { href: '#testimonies', label: 'Testimonies', id: 'testimonies' },
    { href: '#Aboutus', label: 'About us', id: 'Aboutus' },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className="hideOnMobile">
        <Link href="/polymaze">
          <Image
            src="/polymaze/logo-h-02.png"
            alt="POLYMAZE"
            width={200}
            height={50}
            style={{ height: '100%', width: 'auto' }}
          />
        </Link>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navLink ${item.id} ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className={`showOnMobile ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="fixedWrapper">
          <Link href="/polymaze">
            <Image
              src="/polymaze/logo-h-02.png"
              alt="POLYMAZE"
              width={200}
              height={50}
              style={{ height: '100%', width: 'auto' }}
            />
          </Link>
          <button
            type="button"
            className="navToggleWrapper"
            onClick={navToggle}
            ref={animContainerRef}
          />
        </div>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navLink ${item.id} ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
