'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <img src="/footer-logo.svg" alt="" />
          <div className="social">
            <a href="https://www.instagram.com/vic.enp/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/vic.enpa"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/vic-enp/"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="right">
          <Link href="/about">About us</Link>
          <div>
            <Link href="/community">Community</Link>
            <Link href="/community/members">members</Link>
            <Link href="/community/testimonials">Testimonials</Link>
          </div>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="bottom">
        <p>&#169; VIC ENP. All rights reserved</p>
        <div style={{ display: 'flex', gap: '3em' }}>
          <Link href="/policy">Privacy & Policy</Link>
          <Link href="/conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
