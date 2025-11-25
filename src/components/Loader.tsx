'use client'

import { useLoading } from './LoadingContext'

export default function Loader() {
  const { isLoading } = useLoading()

  if (!isLoading) return null

  return (
    <div className="loaderWrapper">
      <div className="loader"></div>
    </div>
  )
}
