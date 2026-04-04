import SectionCard from '../components/SectionCard'
import { webSeries } from '../data/profile'

function Ott() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">OTT Originals</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Web Series</h1>
        <p className="mt-3 text-sm text-slate-200/90">
          Roles across streaming thrillers and dramas; comfortable with tight schedules and multi-camera setups.
        </p>
        <div className="mt-6">
          <SectionCard title="Streaming Projects" items={webSeries} />
        </div>
      </div>
    </div>
  )
}

export default Ott
