'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PolymazeFooter() {
  return (
    <footer className="glass">
      <Link href="/polymaze">
        <Image
          src="/polymaze/vic_logo.png"
          alt="VIC Logo"
          width={100}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
      </Link>
      <div className="socials">
        <a href="https://www.facebook.com/vic.enpa" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/vic.enp/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/vicenp/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}
