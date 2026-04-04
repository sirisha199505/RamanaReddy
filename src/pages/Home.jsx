import SectionCard from '../components/SectionCard'
import { contact, films, memberships, theatre, tvShows, webSeries } from '../data/profile'

const stats = [
  { label: 'Feature films', value: '100+' },
  { label: 'OTT originals', value: '3' },
  { label: 'Television shows', value: '3' },
  { label: 'Stage', value: '2' },
]

function Home() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_30%)]" />

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative h-80 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-amber-500/20 sm:h-96">
              <img
                src="/rr3.jpeg"
                alt="Actor Ramana Reddy portrait"
                className="h-full w-full object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pr-4">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Actor Portfolio</p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-300/40">
                Ramana Reddy
              </div>
              <div className="text-sm text-slate-200/80">@actor_ramanareddy_purelli</div>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Telugu film, OTT, and television actor delivering grounded character work and high-energy mass moments.
            </h1>
            <p className="text-base text-slate-200/90">
              Known for versatile turns across commercial hits and streaming originals. Comfortable in ensemble casts, comedic timing,
              and intense action beats; collaborative on set and quick to adapt to directorial tone.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:shadow-amber-500/50"
              >
                Email
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-200"
              >
                Instagram Profile
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-200"
              >
                Facebook Link
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">{stat.label}</p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold text-white">Contact & Credentials</h2>
        <div className="flex flex-wrap gap-4 text-sm text-slate-100">
          <div className="flex-1 min-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Phones</p>
            <p className="mt-1 font-semibold text-white">{contact.phones[0]}</p>
            <p className="text-white/80">{contact.phones[1]}</p>
          </div>
          <div className="flex-1 min-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Email</p>
            <p className="mt-1 font-semibold text-white">{contact.email}</p>
          </div>
          <div className="flex-1 min-w-[220px] rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Memberships</p>
            <ul className="mt-2 space-y-2 text-slate-100/90">
              {memberships.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative mt-8 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <SectionCard title="Feature Films (selected)" items={films} />
        <div className="space-y-4">
          <SectionCard title="Web Series" items={webSeries} />
          <SectionCard title="Television" items={tvShows} />
          <SectionCard title="Theatre" items={theatre} />
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h3 className="text-lg font-semibold tracking-tight text-amber-200">Working Style</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-100">
          Collaborative on set; quick with dialogue pickups; flexible between comedic timing and intense action beats; experienced
          working alongside veteran casts and directors. Open to film, OTT, and television projects with a preference for character-driven roles.
        </p>
      </section>
    </div>
  )
}

export default Home
