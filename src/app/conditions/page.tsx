'use client'

import Link from 'next/link'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

export default function ConditionsPage() {
  return (
    <>
      <Loader />

      <section id="hero">
        <Link href="/" className="backBtn"><i className="fa-solid fa-arrow-left"></i></Link>
        <div className="text">
          <h1 className="blueishText">
            Page to be discovered
          </h1>
        </div>
      </section>

      <Footer />
    </>
  )
}
