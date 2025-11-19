import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-2xl mt-4 bg-slate-950/70 backdrop-blur border border-white/10">
        <a href="#" className="flex items-center gap-3">
          <img src="/elev8-logo.svg" alt="Elev8" className="h-8 w-auto" />
          <span className="sr-only">Elev8</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-slate-200">
          <button onClick={() => scrollTo('#courses')} className="hover:text-white">Courses</button>
          <button onClick={() => scrollTo('#expertise')} className="hover:text-white">Expertise</button>
          <button onClick={() => scrollTo('#offers')} className="hover:text-white">Offers</button>
          <button onClick={() => scrollTo('#blog')} className="hover:text-white">Blog</button>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-2 text-white font-medium shadow-lg shadow-purple-500/30">Contact</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="mx-auto max-w-7xl px-6 mt-2 md:hidden">
          <div className="rounded-2xl bg-slate-950/90 backdrop-blur border border-white/10 p-4 text-slate-200 flex flex-col gap-3">
            <button onClick={() => scrollTo('#courses')}>Courses</button>
            <button onClick={() => scrollTo('#expertise')}>Expertise</button>
            <button onClick={() => scrollTo('#offers')}>Offers</button>
            <button onClick={() => scrollTo('#blog')}>Blog</button>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-2 text-white font-medium shadow-lg shadow-purple-500/30">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
