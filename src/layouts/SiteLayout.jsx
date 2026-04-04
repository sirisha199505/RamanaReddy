import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { contact } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/films', label: 'Films' },
  { to: '/ott', label: 'OTT' },
  { to: '/television', label: 'Television' },
  { to: '/theatre', label: 'Theatre' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
              <img src="/rr3.jpeg" alt="RR" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-sm font-semibold text-white">Ramana Reddy</span>
            </div>
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 sm:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <div className="flex h-5 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition ${
                  menuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-white transition ${
                  menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>

          <div className="hidden items-center gap-5 text-sm font-medium text-slate-200 sm:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-amber-300' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {/* <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-amber-500/30 transition hover:-translate-y-0.5 hover:shadow"
          >
            Hire
          </a> */}
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 z-10 border-b border-white/10 bg-slate-950/95 px-4 py-3 text-sm text-white sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'text-amber-300' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <main className="pt-20 sm:pt-24 lg:pt-28">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-white/10 bg-slate-950/90 px-4 py-8 text-sm text-slate-300 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">Let&apos;s work together</p>
            <p className="text-slate-300">
              Email: {contact.email} � Phone: {contact.phones[0]}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a className="nav-link" href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="nav-link" href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl flex-col items-center gap-2 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <span>� {new Date().getFullYear()} Ramana Reddy. All rights reserved.</span>
          <span className="leading-snug">
            Design inspired by{' '}
            <a
              className="underline decoration-amber-400/70 decoration-2 underline-offset-2"
              href="https://my-portfolio-c9t9i2q76-sirisha199505s-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Sirisha&apos;s portfolio
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
