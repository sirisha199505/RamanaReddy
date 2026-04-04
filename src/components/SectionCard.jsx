function SectionCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-xl font-semibold tracking-tight text-amber-200">{title}</h3>
      <div className="mt-3 grid gap-3 text-base font-medium leading-relaxed text-slate-100 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-base"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionCard
