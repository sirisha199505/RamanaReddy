function SectionCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-lg font-semibold tracking-tight text-amber-200">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-100">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SectionCard
