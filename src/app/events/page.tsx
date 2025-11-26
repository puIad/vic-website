'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Header from '@/components/Header'

declare global {
  interface Window {
    ScrollReveal: any;
  }
}

interface EventCardProps {
  title: string
  link: string
  previewImage: string
  isExternal?: boolean
}

function EventCard({ title, link, previewImage, isExternal = true }: EventCardProps) {
  const CardContent = (
    <div className="event-card">
      <div className="event-preview">
        <Image 
          src={previewImage} 
          alt={`${title} preview`}
          width={400}
          height={225}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
        <div className="event-overlay">
          <span>Visit Site <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </div>
      </div>
      <h4>{title}</h4>
    </div>
  )

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    )
  }

  return (
    <Link href={link}>
      {CardContent}
    </Link>
  )
}

export default function EventsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      window.ScrollReveal().reveal('.year-title', { 
        reset: true, 
        origin: 'bottom', 
        distance: '2em', 
        opacity: 0,
        duration: 800,
        interval: 100
      })
      window.ScrollReveal().reveal('.event-card', { 
        reset: true, 
        origin: 'bottom', 
        distance: '3em', 
        opacity: 0,
        duration: 600,
        interval: 150
      })
      window.ScrollReveal().reveal('.events-section', { 
        reset: true, 
        origin: 'bottom', 
        distance: '2em', 
        opacity: 0,
        duration: 600
      })
    }
  }, [])

  return (
    <>
      <Loader />
      <Header showExploreBtn={false} />

      <section id="hero">
        <Link href="/" className="backBtn"><i className="fa-solid fa-arrow-left"></i></Link>
        <div className="text">
          <h1 className="blueishText">
            Our Events
          </h1>
        </div>
      </section>

      {/* 2024 Section */}
      <section className="events-section">
        <h2 className="blueishText year-title">2024</h2>
        <div className="events-grid single">
          <EventCard 
            title="POLYMAZE 2024"
            link="/polymaze"
            previewImage="/events/polymaze-2024.png"
            isExternal={false}
          />
        </div>
      </section>

      {/* 2025 Section */}
      <section className="events-section">
        <h2 className="blueishText year-title">2025</h2>
        <div className="events-grid">
          <EventCard 
            title="AEC 2025"
            link="https://aec.vic-enp.com"
            previewImage="/events/aec-2025.png"
          />
          <EventCard 
            title="POLYMAZE 2025"
            link="https://polymaze.vic-enp.com"
            previewImage="/events/polymaze-2025.png"
          />
          <EventCard 
            title="Engineers' GALA 2025"
            link="https://gala.vic-enp.com"
            previewImage="/events/gala-2025.png"
          />
          <EventCard 
            title="Ignite® Algiers 2025"
            link="https://ignite.vic-enp.com"
            previewImage="/events/ignite-2025.png"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
