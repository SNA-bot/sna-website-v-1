import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import logo from '../logo.png'
import { SCHOOL } from '../siteData'

const SLIDE_DURATION = 5000

export default function HeroSlideshow() {
  const [photos, setPhotos] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let cancelled = false

    async function loadPhotos() {
      if (!supabase) return
      const { data } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'galleryPhotos')
        .single()

      if (cancelled || !data?.value) return
      const list = Array.isArray(data.value) ? data.value : []
      setPhotos(list.slice(0, 6))
    }

    loadPhotos()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (photos.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [photos])

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-0 rounded-full border border-brass-500/40" />
      <div className="absolute inset-6 rounded-full border border-brass-500/25" />
      <div className="absolute inset-12 overflow-hidden rounded-full bg-ivory shadow-xl">
        {photos.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center p-6">
            <img src={logo} alt={`${SCHOOL.name} logo`} className="h-full w-full object-contain" />
          </div>
        ) : (
          photos.map((photo, i) => (
            <img
              key={photo.id}
              src={photo.url}
              alt={photo.caption || SCHOOL.name}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))
        )}
      </div>
      <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-brass-500/40" />
      <div className="absolute left-1/2 bottom-0 h-8 w-px -translate-x-1/2 bg-brass-500/40" />
      <div className="absolute top-1/2 left-0 h-px w-8 -translate-y-1/2 bg-brass-500/40" />
      <div className="absolute top-1/2 right-0 h-px w-8 -translate-y-1/2 bg-brass-500/40" />
      {photos.length > 1 && (
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-brass-500' : 'w-1.5 bg-brass-500/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
