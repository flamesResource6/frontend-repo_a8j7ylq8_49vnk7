import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in touch</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Tell us about your goals. We’ll tailor a learning plan for your team or career.</p>
        </div>

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-slate-200 text-sm mb-2">Name</label>
            <input name="name" required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-slate-2 00 text-sm mb-2">Email</label>
            <input type="email" name="email" required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-slate-200 text-sm mb-2">Company</label>
            <input name="company" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Acme Inc." />
          </div>
          <div>
            <label className="block text-slate-200 text-sm mb-2">Role</label>
            <input name="role" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Product Manager" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-200 text-sm mb-2">Topic</label>
            <input name="topic" required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="What are you looking for?" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-200 text-sm mb-2">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Share details about your needs"></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 transition hover:scale-[1.02]">
              Send Message
            </button>
          </div>
          {status === 'success' && <p className="text-green-400">Thanks! We’ll be in touch shortly.</p>}
          {status === 'error' && <p className="text-red-400">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  )
}
