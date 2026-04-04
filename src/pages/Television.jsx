import SectionCard from '../components/SectionCard'
import { tvShows } from '../data/profile'

function Television() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Television</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Shows</h1>
        <p className="mt-3 text-sm text-slate-200/90">
          Familiar face on ETV Telugu comedy and variety formats; agile with live-audience timing.
        </p>
        <div className="mt-6">
          <SectionCard title="TV Credits" items={tvShows} />
        </div>
      </div>
    </div>
  )
}

export default Television
