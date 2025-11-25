'use client'

const sponsors1 = [
  { src: '/Sponsors/SVG/CAAT.svg', alt: 'CAAT' },
  { src: '/Sponsors/SVG/Chellalet.svg', alt: 'Chellalet' },
  { src: '/Sponsors/SVG/CMPE.svg', alt: 'CMPE' },
  { src: '/Sponsors/SVG/Djeff Events.svg', alt: 'Djeff Events' },
  { src: '/Sponsors/SVG/DZHOSTER.svg', alt: 'DZHOSTER' },
  { src: '/Sponsors/SVG/Excellencias.svg', alt: 'Excellencias' },
  { src: '/Sponsors/SVG/Gica.svg', alt: 'Gica' },
  { src: '/Sponsors/SVG/His.svg', alt: 'His' },
]

const sponsors2 = [
  { src: '/Sponsors/SVG/His.svg', alt: 'His' },
  { src: '/Sponsors/SVG/Itel Mobile.svg', alt: 'Itel Mobile' },
  { src: '/Sponsors/SVG/LTA.svg', alt: 'LTA' },
  { src: '/Sponsors/SVG/Mariott.svg', alt: 'Mariott' },
  { src: '/Sponsors/SVG/Orbit.svg', alt: 'Orbit' },
  { src: '/Sponsors/SVG/Ramy.svg', alt: 'Ramy' },
  { src: '/Sponsors/SVG/Swalis.svg', alt: 'Swalis' },
  { src: '/Sponsors/SVG/Winsdor.svg', alt: 'Winsdor' },
]

export default function Sponsors() {
  return (
    <section className="tag-list">
      <h1 className="blueishText title">Our Sponsors</h1>
      
      <div className="loop-slider" style={{ '--duration': '15951ms', '--direction': 'normal' } as React.CSSProperties}>
        <div className="inner">
          {[...sponsors1, ...sponsors1].map((sponsor, index) => (
            <div key={index} className="tag">
              <img src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="loop-slider" style={{ '--duration': '15951ms', '--direction': 'reverse' } as React.CSSProperties}>
        <div className="inner">
          {[...sponsors2, ...sponsors2].map((sponsor, index) => (
            <div key={index} className="tag">
              <img src={sponsor.src} alt={sponsor.alt} />
            </div>
          ))}
        </div>
        <div className="fade"></div>
      </div>
    </section>
  )
}
