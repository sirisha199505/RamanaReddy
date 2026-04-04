const mediaItems = [
  { type: 'image', src: '/rr1.jpeg', alt: 'Set still 1' },
  { type: 'image', src: '/rr2.jpeg', alt: 'Portrait 1', objectPosition: '50% 25%' },
  { type: 'image', src: '/rr3.jpeg', alt: 'Portrait 2' },
  { type: 'image', src: '/rr4.jpeg', alt: 'Behind the scenes' },
  { type: 'pdf', src: '/rr5.pdf', alt: 'rr5 image (PDF)' },
  { type: 'video', src: '/rr1 video.mp4', alt: 'Showreel clip' },
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

              <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-200/80">
                <span>{item.alt}</span>
                <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                  {item.type}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
