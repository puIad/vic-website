'use client'

import Link from 'next/link'
import PolymazeHeader from '@/components/polymaze/PolymazeHeader'

export default function RegistrationsClosedPage() {
  return (
    <div className="polymaze-page">
      <PolymazeHeader isLoading={false} />

      <section className="hasLights" style={{ marginTop: '20vh' }}>
        <h2 style={{ fontSize: '2em' }}><span>POLYMAZE 2024</span> Registrations have closed</h2>
        <br /><br />
        <p>We wish a good luck for registered teams in their POLYMAZE Journey</p>
        <br /><br /><br />
        <Link href="/polymaze" className="registerBtn">Go back</Link>
      </section>
    </div>
  )
}
