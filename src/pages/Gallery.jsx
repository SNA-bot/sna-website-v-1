import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { supabase } from '../supabaseClient'

export default function Gallery() {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadPhotos() {
      if (!supabase) {
        setPhotos([])
        return
      }
      const { data } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'galleryPhotos')
        .single()

      if (cancelled) return
      const list = Array.isArray(data?.value) ? data.value : []
      // Newest uploads first
      setPhotos([...list].reverse())
    }

    loadPhotos()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div>
      <PageHeader
        eyebrow="Moments"
        title="Gallery"
        lead="Highlights from life at Sealed Nectar Academy."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        {photos === null ? (
          <p className="text-center text-sm text-indigo-950/60">Loading…</p>
        ) : photos.length === 0 ? (
          <p className="text-center text-sm text-indigo-950/60">Photos are coming soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.id || p.url} className="overflow-hidden rounded-lg border border-indigo-900/10 bg-white shadow-sm">
                <img
                  src={p.url}
                  alt={p.caption || 'Sealed Nectar Academy'}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                {p.caption && (
                  <figcaption className="px-4 py-3 text-sm text-indigo-950/70">{p.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
