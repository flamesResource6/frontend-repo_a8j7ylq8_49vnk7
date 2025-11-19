import { Layers, Users, BadgeCheck } from 'lucide-react'

const offers = [
  { icon: Layers, title: 'Team Programs', desc: 'Cohort-based learning tailored for your organization' },
  { icon: Users, title: '1:1 Mentorship', desc: 'Personalized guidance from industry practitioners' },
  { icon: BadgeCheck, title: 'Certification', desc: 'Verified credentials to showcase your skills' }
]

export default function Offers() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Offers</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Flexible options for individuals and enterprises to level up quickly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map(o => (
            <div key={o.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                <o.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{o.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
