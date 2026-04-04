import SectionCard from '../components/SectionCard'
import { theatre } from '../data/profile'

function Theatre() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Stage</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Theatre</h1>
        <p className="mt-3 text-sm text-slate-200/90">
          Stage roots that inform timing and presence; comfortable with long-form dialogue delivery.
        </p>
        <div className="mt-6">
          <SectionCard title="Plays" items={theatre} />
        </div>
      </div>
    </div>
  )
}

export default Theatre
