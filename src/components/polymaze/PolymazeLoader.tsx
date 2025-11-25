'use client'

import { useEffect, useRef } from 'react'

interface PolymazeLoaderProps {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function PolymazeLoader({ isLoading, setIsLoading }: PolymazeLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Set loading to false after 3 seconds or when video ends
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Also set a fallback timer in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [setIsLoading])

  if (!isLoading) return null

  return (
    <div className="polymaze-loader">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        playsInline
      >
        <source src="/polymaze/loader/logo-fill.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
