'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

declare global {
  interface Window {
    ScrollReveal: any;
  }
}

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      window.ScrollReveal().reveal('#tsawer .imageContainer', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('#vision h1', { reset: true, origin: 'bottom', distance: '2em', opacity: 0 })
      window.ScrollReveal().reveal('#vision p', { reset: true, origin: 'bottom', distance: '2em', opacity: 0, delay: 100 })
    }
  }, [])

  return (
    <>
      <Loader />
      
      <Header showExploreBtn={false} />

      <section id="hero">
        <Link href="/" className="backBtn"><i className="fa-solid fa-arrow-left"></i></Link>
        <div className="text">
          <h1 className="blueishText">A passionate community dedicated to unlocking your potential</h1>
          <p style={{ color: 'var(--l2)', fontSize: '1.5em', marginTop: '1em' }}>Our objective is to inspire and elevate your success</p>
          <div className="buttons">
            <Link href="/about" className="joinBtn blueishBg">Join Us</Link>
            <Link href="/contact" className="contactBtn">Contact Us</Link>
          </div>
        </div>
      </section>

      <section id="tsawer">
        <div className="left">
          <div className="imageContainer" style={{ backgroundImage: "url('/images/(1).jpg')" }}><div></div></div>
        </div>
        <div className="right">
          <div className="imageContainer" style={{ backgroundImage: "url('/images/(2).jpg')" }}><div></div></div>
        </div>
      </section>

      <section id="vision">
        <h1 className="blueishText">Our Vision</h1>
        <p>&quot;The vision of VIC Club is to inspire and empower individuals to think creatively, collaborate effectively, and lead innovation. We aim to foster a community where bold ideas are turned into impactful solutions that shape the future.&quot;</p>
      </section>

      <Footer />

      <div className="rrrrContainer">
        <img id="rrrr" src="/logo stroke.svg" alt="" />
      </div>
    </>
  )
}
