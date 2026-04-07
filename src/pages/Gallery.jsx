const mediaItems = [
  { type: 'image', src: '/rr1.jpeg', alt: 'rr1 portrait', description: 'Character study still with warm studio light.' },
  { type: 'image', src: '/rr2.jpeg', alt: 'rr2 portrait', description: 'Close-up portrait; soft key with shallow depth.', objectPosition: '50% 25%' },
  { type: 'image', src: '/rr3.jpeg', alt: 'rr3 portrait', description: 'Outdoor candid with natural rim light.' },
  { type: 'image', src: '/rr4.jpeg', alt: 'rr4 portrait', description: 'Black-and-white profile, dramatic contrast.' },
  { type: 'image', src: '/rr5.jpeg', alt: 'rr5 portrait', description: 'Studio half-body with cool fill.' },
  { type: 'image', src: '/rr6.jpeg', alt: 'rr6 portrait', description: 'Behind-the-scenes capture between takes.' },
  { type: 'image', src: '/rr7.jpeg', alt: 'rr7 portrait', description: 'Costume detail with textured background.' },
  { type: 'image', src: '/rr8.jpeg', alt: 'rr8 portrait', description: 'Expressive look with cinematic shadows.' },
  { type: 'image', src: '/rr9.jpeg', alt: 'rr9 portrait', description: 'Street scene still with neon highlights.' },
  { type: 'image', src: '/rr10.jpeg', alt: 'rr10 portrait', description: 'Clean studio headshot, neutral palette.' },
  { type: 'image', src: '/rr11.jpeg', alt: 'rr11 portrait', description: 'Laughing candid, warm evening light.' },
  { type: 'image', src: '/rr12.jpeg', alt: 'rr12 portrait', description: 'Moody interior with side key.' },
  { type: 'image', src: '/rr13.jpeg', alt: 'rr13 portrait', description: 'Casual look, soft morning ambience.' },
  { type: 'image', src: '/rr14.jpeg', alt: 'rr14 portrait', description: 'Wide still showcasing location context.' },
  { type: 'image', src: '/rr15.jpeg', alt: 'rr15 portrait', description: 'High-key frame with crisp focus.' },
  { type: 'video', src: '/rr2.mp4', alt: 'rr2 video highlight', description: 'Short reel snippet from rr2 shoot.' },
]

function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Gallery</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Stills & Reels</h1>
        <p className="mt-3 text-sm text-slate-200/80">A quick look at recent portraits, on-set moments, and video highlights.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mediaItems.map((item, idx) => {
          const isImage = item.type === 'image'
          const isPdf = item.type === 'pdf'
          const isVideo = item.type === 'video'

          const media = (
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {isImage ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  loading="lazy"
                />
              ) : isPdf ? (
                <object data={item.src} type="application/pdf" className="h-full w-full pointer-events-none">
                  <span className="sr-only">{item.alt}</span>
                </object>
              ) : (
                <video
                  src={item.src}
                  className="h-full w-full object-cover pointer-events-none"
                  preload="metadata"
                />
              )}
            </div>
          )

          const wrapperProps = isVideo
            ? { href: item.src, target: '_blank', rel: 'noreferrer', className: 'block' }
            : isPdf
              ? { href: item.src, target: '_blank', rel: 'noreferrer', className: 'block' }
              : { href: item.src, target: '_blank', rel: 'noreferrer', className: 'block' }

          return (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)] backdrop-blur"
            >
              <a {...wrapperProps}>
                {media}
              </a>

              <div className="px-3 py-2">
                <div className="flex items-center justify-between text-xs text-slate-200/80">
                  <span>{item.alt}</span>
                  <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                    {item.type}
                  </span>
                </div>
                {item.description && (
                  <p className="mt-1 text-[11px] text-slate-300/80 leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
