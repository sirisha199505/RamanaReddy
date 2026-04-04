import SectionCard from '../components/SectionCard'
import { films } from '../data/profile'

function Films() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Credits</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Feature Films</h1>
        <p className="mt-3 text-sm text-slate-200/90">
          Selected theatrical releases spanning commercial blockbusters and character-driven dramas.
        </p>
        <div className="mt-6">
          <SectionCard title="Filmography (selected)" items={films} />
        </div>
      </div>
    </div>
  )
}

export default Films
