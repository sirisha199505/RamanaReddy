import { contact, memberships } from '../data/profile'

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Let&apos;s talk about your project</h1>
        <p className="mt-3 text-sm text-slate-200/90">
          Available for film, OTT, television, and stage collaborations. Quick on dialogue pickups and flexible with schedules.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block text-lg font-semibold text-white hover:text-amber-200"
            >
              {contact.email}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Phones</p>
            <p className="mt-2 text-lg font-semibold text-white">{contact.phones[0]}</p>
            <p className="text-white/80">{contact.phones[1]}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Social</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-200"
            >
              Instagram
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-200"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Memberships</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-100">
            {memberships.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
