'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PolymazeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const animContainerRef = useRef<HTMLButtonElement>(null)
  const animRef = useRef<any>(null)
  const animDirectionRef = useRef(1)

  useEffect(() => {
    // Initialize Lottie animation for mobile menu
    if (typeof window !== 'undefined' && (window as any).lottie && animContainerRef.current && !animRef.current) {
      animRef.current = (window as any).lottie.loadAnimation({
        container: animContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/polymaze/Menu V2/menuV2.json'
      })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      const homeSec = document.getElementById('home')
      const polymSec = document.getElementById('polymaze')
      const regSec = document.getElementById('register')
      const faqSec = document.getElementById('faq')
      const specSec = document.getElementById('specifications')
      const testSec = document.getElementById('testimonies')
      const abtSec = document.getElementById('Aboutus')

      if (!homeSec || !polymSec || !regSec || !faqSec || !specSec || !testSec || !abtSec) return

      // Logic from original header.js - adjusted for removed countdown section
      if (scrollY <= homeSec.offsetHeight) {
        setActiveSection('home')
      } else if (scrollY >= homeSec.offsetHeight && scrollY < polymSec.offsetHeight + polymSec.offsetTop - 100) {
        setActiveSection('polymaze')
      } else if (scrollY >= polymSec.offsetHeight + polymSec.offsetTop && scrollY < regSec.offsetHeight + regSec.offsetTop - 100) {
        setActiveSection('register')
      } else if (scrollY >= regSec.offsetHeight + regSec.offsetTop && scrollY < faqSec.offsetHeight + faqSec.offsetTop - 100) {
        setActiveSection('faq')
      } else if (scrollY >= faqSec.offsetHeight + faqSec.offsetTop && scrollY < specSec.offsetHeight + specSec.offsetTop - 100) {
        setActiveSection('specifications')
      } else if (scrollY >= specSec.offsetHeight + specSec.offsetTop && scrollY < testSec.offsetHeight + testSec.offsetTop - 100) {
        setActiveSection('testimonies')
      } else if (scrollY >= testSec.offsetHeight + testSec.offsetTop) {
        setActiveSection('Aboutus')
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
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

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
  }

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
            style={{ height: '6vh', width: 'auto', maxWidth: 'none', objectFit: 'contain' }}
          />
        </Link>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navLink ${item.id} ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className={`showOnMobile ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="fixedWrapper">
          <Link href="/polymaze" className="logoLink">
            <Image
              src="/polymaze/logo-h-02.png"
              alt="POLYMAZE"
              width={200}
              height={50}
              style={{ height: 'auto', width: 'auto', maxHeight: '100%', objectFit: 'contain' }}
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
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
