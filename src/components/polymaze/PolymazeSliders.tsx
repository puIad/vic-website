'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const slider1Images = [
  '/polymaze/images/sliders/1.jpg',
  '/polymaze/images/sliders/2.jpg',
  '/polymaze/images/sliders/3.jpg',
  '/polymaze/images/sliders/5.jpg',
  '/polymaze/images/sliders/6.jpg',
  '/polymaze/images/sliders/7.jpg',
  '/polymaze/images/sliders/8.jpg',
]

const slider2Images = [
  '/polymaze/images/sliders/10.jpg',
  '/polymaze/images/sliders/11.jpg',
  '/polymaze/images/sliders/12.jpg',
  '/polymaze/images/sliders/13.jpg',
  '/polymaze/images/sliders/14.jpg',
  '/polymaze/images/sliders/15.jpg',
  '/polymaze/images/sliders/16.jpg',
]

export default function PolymazeSliders() {
  const slider1Ref = useRef<HTMLDivElement>(null)
  const slider2Ref = useRef<HTMLDivElement>(null)
  const polymazeSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    polymazeSectionRef.current = document.getElementById('polymaze')

    const handleScroll = () => {
      const slider1 = slider1Ref.current
      const slider2 = slider2Ref.current
      const polymazeSection = polymazeSectionRef.current
      
      if (!slider1 || !slider2 || !polymazeSection) return

      const scrollY = window.scrollY
      const screenH = window.innerHeight

      if (scrollY < polymazeSection.offsetTop - screenH || scrollY > polymazeSection.offsetTop + polymazeSection.offsetHeight) {
        const centerPos1 = (slider1.scrollWidth / 2) - (slider1.offsetWidth / 2)
        const centerPos2 = (slider2.scrollWidth / 2) - (slider2.offsetWidth / 2)
        slider1.scrollTo(centerPos1, 0)
        slider2.scrollTo(centerPos2, 0)
      } else {
        const p = (scrollY - polymazeSection.offsetTop - screenH) / polymazeSection.offsetHeight
        const d = p * (slider1.scrollWidth - slider1.offsetWidth)
        const centerPos = (slider2.scrollWidth / 2) - (slider2.offsetWidth / 2)
        slider1.scrollTo(centerPos - d / 3, 0)
        slider2.scrollTo(centerPos + d / 3, 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Initial center position
    setTimeout(() => {
      if (slider1Ref.current && slider2Ref.current) {
        const centerPos1 = (slider1Ref.current.scrollWidth / 2) - (slider1Ref.current.offsetWidth / 2)
        const centerPos2 = (slider2Ref.current.scrollWidth / 2) - (slider2Ref.current.offsetWidth / 2)
        slider1Ref.current.scrollTo(centerPos1, 0)
        slider2Ref.current.scrollTo(centerPos2, 0)
      }
    }, 100)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="slider slider1">
        <div className="overlay"></div>
        <div className="container" ref={slider1Ref}>
          {slider1Images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slider 1 image ${index + 1}`}
              width={300}
              height={200}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="slider slider2">
        <div className="overlay"></div>
        <div className="container" ref={slider2Ref}>
          {slider2Images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Slider 2 image ${index + 1}`}
              width={300}
              height={200}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  )
}
