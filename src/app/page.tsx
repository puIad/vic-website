'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import FAQ from '@/components/FAQ'
import Sponsors from '@/components/Sponsors'

declare global {
  interface Window {
    ScrollReveal: any;
    lottie: any;
  }
}

export default function HomePage() {
  const rrrrRef = useRef<HTMLImageElement>(null)
  const rrrrContainerRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const headerDeskDynamicRef = useRef<HTMLElement | null>(null)
  const headerMobDynamicRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const screenHeight = window.screen.height
    headerDeskDynamicRef.current = document.querySelector('#header-desk-dynamic')
    headerMobDynamicRef.current = document.querySelector('#header-mob-dynamic')

    const handleScroll = () => {
      const y = window.scrollY
      
      if (y > screenHeight * 0.7) {
        headerDeskDynamicRef.current?.classList.add('active')
        headerMobDynamicRef.current?.classList.add('active')
        if (rrrrRef.current) rrrrRef.current.style.opacity = '0'
        if (rrrrContainerRef.current) rrrrContainerRef.current.style.opacity = '0'
      } else {
        headerDeskDynamicRef.current?.classList.remove('active')
        headerMobDynamicRef.current?.classList.remove('active')
        if (rrrrContainerRef.current) rrrrContainerRef.current.style.opacity = '1'

        const scale = 20 * y / (1 * screenHeight)
        if (rrrrRef.current) {
          rrrrRef.current.style.scale = String(scale + 1)
          rrrrRef.current.style.filter = `blur(${scale * 0.1}px)`
          rrrrRef.current.style.opacity = String(0.5 / (scale + 1))
        }
        if (heroTextRef.current) {
          heroTextRef.current.style.transform = `translateY(${15 * scale}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (window.scrollY < screenHeight * 0.7 && rrrrContainerRef.current) {
      rrrrContainerRef.current.style.opacity = '1'
    }

    // ScrollReveal animations
    if (window.ScrollReveal) {
      window.ScrollReveal().reveal('.rrrrContainer')
      window.ScrollReveal().reveal('#highlighted-event', { reset: true, origin: 'bottom', distance: '3em', opacity: 0, duration: 800 })
      window.ScrollReveal().reveal('#highlighted-event .highlight-content', { reset: true, origin: 'bottom', distance: '2em', opacity: 0, delay: 200 })
      window.ScrollReveal().reveal('#highlighted-event .highlight-preview', { reset: true, origin: 'bottom', distance: '3em', opacity: 0, delay: 300 })
      window.ScrollReveal().reveal('.descriptionSec h3', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('.descriptionSec p', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('.descriptionSec li', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('.left .imageContainer', { reset: true, origin: 'bottom', distance: '4em', opacity: 0, delay: 150 })
      window.ScrollReveal().reveal('#faq', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('#faq .question', { reset: true, origin: 'bottom', distance: '4em', opacity: 0, delay: 100 })
      window.ScrollReveal().reveal('#faq p:not(.answer p)', { reset: true, origin: 'bottom', distance: '1em', opacity: 0, delay: 20 })
      window.ScrollReveal().reveal('#cta', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('.tag-list h1', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
      window.ScrollReveal().reveal('.loop-slider', { reset: true, origin: 'bottom', distance: '4em', opacity: 0 })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Image rotation effect
  useEffect(() => {
    if (typeof window === 'undefined') return

    let n = 2
    const transitionDuration = 7000
    const transitionStart = 200
    const transitionEnd = transitionDuration - transitionStart

    const interval = setInterval(() => {
      if (3 * n >= 47) {
        n = 1
      }

      const updateImages = (selector: string, imageNum: number) => {
        const images = document.querySelectorAll(selector)
        images.forEach((img: Element) => {
          const el = img as HTMLElement
          setTimeout(() => {
            el.classList.remove('transitioning-src')
          }, transitionStart)
          el.style.backgroundImage = `url("/images/(${imageNum}).jpg")`
          setTimeout(() => {
            el.classList.add('transitioning-src')
          }, transitionEnd)
        })
      }

      updateImages('#description-desk .leftDesk .leftImage .imageContainer, #description-desk .leftTab .imageContainer:first-child, #description-mob .leftImage .imageContainer', 3 * n)
      updateImages('#description-desk .leftDesk .rightImages .imageContainer:nth-child(1), #description-desk .leftTab .imageContainer:nth-child(2), #description-mob .leftDesk .rightImages .imageContainer:nth-child(1)', 3 * n + 1)
      updateImages('#description-desk .leftDesk .rightImages .imageContainer:nth-child(2), #description-desk .leftTab .imageContainer:nth-child(3), #description-mob .leftDesk .rightImages .imageContainer:nth-child(2)', 3 * n + 2)

      n++
    }, transitionDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Loader />
      <img src="/banner.png" alt="" style={{ display: 'none' }} />
      
      <Header showExploreBtn={true} />

      <section id="hero">
        <div className="text" ref={heroTextRef}>
          <h1>We lead</h1>
          <h1>the <span><span>VIC</span>tory!</span></h1>
        </div>
      </section>

      {/* Highlighted Event Section - Temporary/Modifiable */}
      <section id="highlighted-event">
        <div className="highlight-content">
          <span className="highlight-badge">Featured Event</span>
          <Image 
            src="/ignite-logo-white.svg" 
            alt="Ignite® Algiers 2025" 
            width={400} 
            height={80}
            className="highlight-logo"
            style={{ objectFit: 'contain', marginBottom: '0.5em' }}
          />
          <p>Join us for an inspiring evening of rapid-fire talks that will spark your creativity and ignite your passion for innovation!</p>
          <a href="https://ignite.vic-enp.com" target="_blank" rel="noopener noreferrer" className="highlight-btn">
            Visit Website <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <a href="https://ignite.vic-enp.com" target="_blank" rel="noopener noreferrer" className="highlight-preview">
          <Image 
            src="/events/ignite-2025.png" 
            alt="Ignite Algiers 2025" 
            width={600} 
            height={338}
            style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '1em' }}
          />
          <div className="highlight-overlay">
            <span>Visit Site <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
        </a>
      </section>

      <section id="description-desk" className="descriptionSec">
        <div className="left leftDesk">
          <div className="imagesContainer">
            <div className="leftImage">
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(1).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
            </div>
            <div className="rightImages">
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(2).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(3).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="left leftTab">
          <div className="imagesContainer">
            <div className="imageContainer" style={{ backgroundImage: "url('/images/(1).jpg')" }}>
              <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
            </div>
            <div className="imageContainer" style={{ backgroundImage: "url('/images/(2).jpg')" }}>
              <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
            </div>
            <div className="imageContainer" style={{ backgroundImage: "url('/images/(3).jpg')" }}>
              <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
            </div>
          </div>
        </div>

        <div className="right">
          <h3 className="title">A creative hub where ideas come to life and possibilities are endless!</h3>
          <p className="text">
            VIC is a dynamic community built around the passion for innovation and forward-thinking. We bring together individuals who are eager to explore new ideas and revolutionize the way we approach problems. We aim to:
          </p>
          <ul>
            <li>Drive innovation through workshops and projects.</li>
            <li>Foster collaboration and networking.</li>
            <li>Support turning ideas into reality.</li>
          </ul>
        </div>
      </section>

      <section id="description-mob" className="descriptionSec">
        <h3 className="title">A creative hub where ideas come to life and possibilities are endless!</h3>

        <div className="left leftDesk">
          <div className="imagesContainer">
            <div className="leftImage">
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(1).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
            </div>
            <div className="rightImages">
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(2).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
              <div className="imageContainer" style={{ backgroundImage: "url('/images/(3).jpg')" }}>
                <div style={{ backgroundImage: "url('/images/(1).jpg')" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <p className="text">
            VIC is a dynamic community built around the passion for innovation and forward-thinking. We bring together individuals who are eager to explore new ideas and revolutionize the way we approach problems. We aim to:
          </p>
          <ul>
            <li>Drive innovation through workshops and projects.</li>
            <li>Foster collaboration and networking.</li>
            <li>Support turning ideas into reality.</li>
          </ul>
        </div>
      </section>

      <FAQ />

      <section id="cta">
        <h3>Let&apos;s create something awesome!</h3>
        <a href="https://www.instagram.com/vic.enp/" className="ctaBtn">Join us <i className="fa-solid fa-arrow-right"></i></a>
      </section>

      <Sponsors />

      <Footer />

      <div className="rrrrContainer" ref={rrrrContainerRef}>
        <img id="rrrr" src="/logo stroke.svg" alt="" ref={rrrrRef} />
      </div>
    </>
  )
}
