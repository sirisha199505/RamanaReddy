import { Link, NavLink, Outlet } from 'react-router-dom'
import { contact } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/films', label: 'Films' },
  { to: '/ott', label: 'OTT' },
  { to: '/television', label: 'Television' },
  { to: '/theatre', label: 'Theatre' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <nav className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full border border-white/20">
              <img src="/rr3.jpeg" alt="RR" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-sm font-semibold text-white">Ramana Reddy</span>
            </div>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 sm:flex">
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

      <main className="pt-24 sm:pt-28 lg:pt-32">
        <Outlet />
      </main>

      <footer
        className="mt-12 border-t border-white/10 bg-slate-950/90 px-4 py-8 text-sm text-slate-300 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">Let&apos;s work together</p>
            <p className="text-slate-300">
              Email: {contact.email} · Phone: {contact.phones[0]}
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
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Ramana Reddy. All rights reserved.</span>
          <span>
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
