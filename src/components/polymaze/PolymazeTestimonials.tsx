'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Testimony {
  name: string
  club: string
  image: string
  quote: string
}

const testimonies: Testimony[] = [
  {
    name: "BENNACER Amine Rami",
    club: "Hermes",
    image: "/polymaze/Testimonials/Amine.jpg",
    quote: '"As students, we always seek the best opportunities, and Polymaze was the opportunity of the year not to be missed. I learned how to work in a team, how to solve engineering problems, and above all, patience. Don\'t be afraid because at the beginning, we all start from the same level. Through Polymaze, you can reach the level you aim for, so never give up."'
  },
  {
    name: "LAOUDI Farid",
    club: "Unimate 2.0",
    image: "/polymaze/Testimonials/Farid.jpg",
    quote: '"It was my first robotic competition, I gained a lot of friends with the same interest, I started a lot of projects after Polymaze so I can say I unlocked a new Hobby. The organizers were joyful challenges, and the D-day was well organized."'
  },
  {
    name: "KOUIDER CHICHI Ahmed",
    club: "The noobs",
    image: "/polymaze/Testimonials/Chichi.jpg",
    quote: '"I was in the midst of exams preparation and wanted to break away from the study atmosphere, so I participated in Polymaze 2022. I made it to the semi-finals, showcasing an example of a prepa student who has any prior knowledge about robotics."'
  },
  {
    name: "DERICHE Hussein",
    club: "Vegapunk",
    image: "/polymaze/Testimonials/Hussein.jpg",
    quote: '"I want to express my gratitude once again to the club for the incredible experience they provided me with. I learned valuable skills in working with new components and managing my time, specifically because it was during the exam season."'
  },
  {
    name: "SADAOUI Naïla",
    club: "Vegapunk",
    image: "/polymaze/Testimonials/Naila.jpg",
    quote: '"My experience with polymaze is unique and unforgettable. "Vegapunk" was the name of my team. We decided to do our best and win since the day we applied. Technically speaking, learning by doing and enjoying the journey. Thank you Polymaze!."'
  }
]

export default function PolymazeTestimonials() {
  const swiperRef = useRef<any>(null)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth - 200
      setSlidesPerView(Math.max(1, Math.ceil(width / 600)))
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      swiperRef.current = new (window as any).Swiper('.mySwiper', {
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy()
      }
    }
  }, [slidesPerView])

  return (
    <section id="testimonies">
      <h2 className="sectionTitle">Testimonies</h2>

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {testimonies.map((testimony, index) => (
            <div key={index} className="card swiper-slide">
              <div className="author">
                <div className="img">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    width={70}
                    height={70}
                    style={{ borderRadius: '100vmax' }}
                  />
                </div>
                <div className="info">
                  <p className="name">{testimony.name}</p>
                  <p className="club">{testimony.club}</p>
                </div>
              </div>
              <div className="core">
                <p>{testimony.quote}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="navigations">
          <div className="swiper-button-prev">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </div>
          <div className="swiper-button-next">
            <i className="fa-solid fa-circle-chevron-right"></i>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}
