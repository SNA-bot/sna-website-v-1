import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { supabase } from '../supabaseClient'

const PLACEHOLDER_COUNT = 9

export default function Gallery() {
  const [photos, setPhotos] = useState(null)
  const [error, setError] = useState(false)
  const [debugInfo, setDebugInfo] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadPhotos() {
      if (!supabase) {
        if (!cancelled) {
          setPhotos([])
          setError(true)
          setDebugInfo('supabase client not initialized (missing env vars)')
        }
        return
      }
      const { data, error: fetchError } = await supabase
        .from('app_storage')
        .select('value')
        .eq('key', 'galleryPhotos')
        .single()

      if (cancelled) return

      if (fetchError || !data?.value) {
        setError(true)
        setDebugInfo(fetchError ? fetchError.message : 'no data.value returned')
        setPhotos([])
        return
      }

      const list = Array.isArray(data.value) ? data.value : []
      const sorted = [...list].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
      setPhotos(sorted)
    }

    loadPhotos()
    return () => {
      cancelled = true
    }
  }, [])

  const showPlaceholders = photos !== null && photos.length === 0

  return (
    <div>
      <PageHeader
        eyebrow="Campus Life"
        title="Gallery"
        lead="Moments from classrooms, events, and celebrations at Sealed Nectar Academy."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        {photos === null && (
          <p className="text-sm text-indigo-950/50">Loading gallery…</p>
        )}

        {photos !== null && photos.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.id} className="overflow-hidden rounded-lg">
                <img
                  src={p.url}
                  alt={p.caption || 'Sealed Nectar Academy'}
                  className="aspect-square w-full object-cover"
                />
                {p.caption && (
                  <figcaption className="mt-1 text-xs text-indigo-950/60">
                    {p.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {showPlaceholders && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg border border-dashed border-indigo-900/20 bg-indigo-900/5 font-mono text-xs text-indigo-900/40"
              >
                Photo {i + 1}
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="mt-6 font-mono text-xs text-indigo-950/40">
            Live connection to the school database is unavailable right now — showing placeholders.
            {debugInfo && <><br />Debug: {debugInfo}</>}
          </p>
        )}
      </section>
    </div>
  )
}
