'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PolymazeHeader from '@/components/polymaze/PolymazeHeader'
import PolymazeLoader from '@/components/polymaze/PolymazeLoader'
import PolymazeSliders from '@/components/polymaze/PolymazeSliders'
import PolymzeFAQ from '@/components/polymaze/PolymzeFAQ'
import PolymazeTestimonials from '@/components/polymaze/PolymazeTestimonials'
import PolymazeFooter from '@/components/polymaze/PolymazeFooter'

export default function PolymzePage() {
  const [isLoading, setIsLoading] = useState(true)
  const ytbLogoRef = useRef<HTMLDivElement>(null)
  const ytbAnimRef = useRef<any>(null)

  useEffect(() => {
    // Hide Spline logo
    const hideSplineLogo = setInterval(() => {
      const splineViewer = document.querySelector('spline-viewer')
      if (splineViewer && splineViewer.shadowRoot) {
        const link = splineViewer.shadowRoot.querySelector('a')
        if (link) {
          link.style.display = 'none'
        }
      }
    }, 1200)

    return () => clearInterval(hideSplineLogo)
  }, [])

  useEffect(() => {
    // Initialize YouTube logo animation
    if (typeof window !== 'undefined' && (window as any).lottie && ytbLogoRef.current && !ytbAnimRef.current) {
      ytbAnimRef.current = (window as any).lottie.loadAnimation({
        container: ytbLogoRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/polymaze/YouTube/youtube-2.json'
      })
    }
  }, [isLoading])

  const handleYtbMouseEnter = () => {
    if (ytbAnimRef.current) {
      ytbAnimRef.current.setDirection(1)
      ytbAnimRef.current.play()
    }
  }

  const handleYtbMouseLeave = () => {
    if (ytbAnimRef.current) {
      ytbAnimRef.current.setDirection(-1)
      ytbAnimRef.current.play()
    }
  }

  return (
    <div className="polymaze-page">
      <PolymazeLoader isLoading={isLoading} setIsLoading={setIsLoading} />
      <PolymazeHeader isLoading={isLoading} />

      {/* Home Section */}
      <section id="home" className="hasLights">
        <div className="left">
          <h1><span>POLYMAZE</span> is here to throw down the gauntlet for robotics enthusiasts!</h1>
          <p>Test your skills in <span>mechanics, electronics, robotics and automatics</span> to design and build a robot that can take on a challenging maze completed with intricate pathways and unexpected turns. <span>The Maze is a Beast</span></p>
          <div className="homeBtns">
            <a 
              className="button" 
              href="https://youtu.be/U4YS_9TacP0?si=hfJWlylorxDn5twJ"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleYtbMouseEnter}
              onMouseLeave={handleYtbMouseLeave}
            >
              <div className="button-overlay"></div>
              <span>Watch trailer <div className="ytblogo" ref={ytbLogoRef}></div></span>
            </a>
            <a href="#register" className="registerBtn">
              <span>Register Now!</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="right">
          {/* @ts-ignore */}
          <spline-viewer url="https://prod.spline.design/29-snElDnoywHTbn/scene.splinecode" events-target="global"></spline-viewer>
        </div>
      </section>

      {/* Countdown Section - Hidden by default */}
      <section id="countdown" style={{ display: 'none' }}>
        <div className="overlay"></div>
        <h2>Time for registrations to close:</h2>
        <div className="container">
          <div className="days"><p>10</p></div>
          <div className="hours"><p>10</p></div>
          <div className="minutes"><p>10</p></div>
          <div className="seconds"><p>10</p></div>
        </div>
      </section>

      {/* Polymaze Section */}
      <section id="polymaze">
        <h2 className="sectionTitle">What is POLYMAZE?</h2>
        <p className="textanim">POLYMAZE is a maze-solving competition hosted by the Vision & Innovation Club. Designed robots rely on their programming and sensors to independently navigate the maze, showcasing impressive robotic abilities.</p>
        
        <PolymazeSliders />

        <h2 className="sectionTitle">What&apos;s new in POLYMAZE 2024 <span>?</span></h2>
        <p className="textanim">We haven&apos;t made a ton of changes to the fundamental structure, the rules, robot specifications, and registration process stay the same. However, here&apos;s the exciting part: POLYMAZE will be in two days this year! The first day will consist of the qualification rounds, while the second day will feature the semi finals and the finals.<br/>The dates are going to be announced on our site and all over our social media platforms.</p>
      </section>

      {/* Register Section */}
      <section id="register" className="hasLights">
        <h2 className="sectionTitle">How to participate in POLYMAZE?</h2>
        <div className="container">
          <h3 data-num="1">Read the specifications document</h3>
          <p>it will provide you with the competition rules including the restrictions of the robot. You have to respect it otherwise you will be eliminated from POLYMAZE. It also puts on your disposal details about this edition&apos;s theme, the goal of the competition, the minigames and many more. So be sure to go through it carefully!</p>
          <h3 data-num="2">Filling out the form</h3>
          <p>To register, fill out the registration form shared in the site to secure your spot.</p>
          <h3 data-num="3">Prepare your robot and join the POLYMAZE fam</h3>
          <p>design and build your masterpiece and put it in action.</p>
        </div>
        <Link href="/polymaze/registrations-closed" className="registerBtn">
          <span>Register Now!</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>

      {/* FAQ Section */}
      <PolymzeFAQ />

      {/* Specifications Section */}
      <section id="specifications" className="hasLights">
        <h2 className="sectionTitle">Competition Specifications</h2>
        <p>To know more about <span>POLYMAZE 2024</span> rules and specifications, You can download the following documents:</p>
        <Image 
          src="/polymaze/specifications.png" 
          alt="Specifications" 
          width={700} 
          height={400}
          style={{ maxWidth: '70vw', height: 'auto' }}
          loading="lazy"
        />
        <br />
        <a 
          className="registerBtn" 
          target="_blank" 
          href="https://drive.google.com/file/d/1_FBBsWVozrdldmpxPELrz5wYs59zGCtq/view"
          rel="noopener noreferrer"
        >
          <span>Specifications EN</span>
          <i className="fa-solid fa-download"></i>
        </a>
        <a 
          className="registerBtn" 
          target="_blank" 
          href="https://drive.google.com/file/d/1tA8501Qm8iioUJyotb9vCfd62M5yRTjp/view"
          rel="noopener noreferrer"
        >
          <span>Specifications FR</span>
          <i className="fa-solid fa-download"></i>
        </a>
      </section>

      {/* Testimonies Section */}
      <PolymazeTestimonials />

      {/* About Us Section */}
      <section id="Aboutus">
        <h2 className="sectionTitle">About us</h2>
        <p>
          The <span>Vision & Innovation Club</span> is a scientific club supervised by the scientific association <span>EL MAARIFA</span>, which fosters an environment of future engineers within their esteemed school <span>ECOLE NATIONALE POLYTECHNIQUE D&apos;ALGER</span>.
          <br />
          Our club aims to elevate students&apos; university experience through the exchange of various perspectives where everyone ignites his own idea.
          This assembly of ideas and efforts allow us to organize plenty of events which vary between enthusiastic competitions and charitable activities, such as: Polymaze, Ignite, Engineer&apos;s Gala, Charity, and so on.
        </p>
      </section>

      {/* Special Thanks Section */}
      <section id="specialThanks">
        <h2 className="sectionTitle">Special Thanks</h2>
        <p>Special thanks to <a href="https://www.dzhoster.com/" target="_blank" rel="noopener noreferrer">DZHOSTER</a> For their support.</p>
        <a href="https://www.dzhoster.com/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/polymaze/dzhoster.png" 
            alt="dzhoster" 
            width={300} 
            height={100}
            loading="lazy"
          />
        </a>
      </section>

      <PolymazeFooter />
    </div>
  )
}
