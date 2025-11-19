import { BookOpen, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const gradients = {
  purple: 'from-purple-500 to-pink-500',
  orange: 'from-orange-500 to-pink-500',
  pink: 'from-pink-500 to-purple-500',
  blue: 'from-blue-500 to-purple-500',
}

export default function Courses() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/courses`)
        const data = await res.json()
        setCourses(data.courses || [])
      } catch (e) {
        console.error(e)
      }
    }
    fetchCourses()
  }, [])

  return (
    <section id="courses" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Courses</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Curated tracks designed for busy professionals. Learn by doing, with industry case studies and mentor support.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradients[c.color] || gradients.purple} flex items-center justify-center shadow-lg`}>
                <BookOpen className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
              <div className="mt-3 flex items-center gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1"><Star size={16} className="text-yellow-400" />{c.level}</span>
                <span className="inline-flex items-center gap-1"><Clock size={16} />{c.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-xs">{c.tag}</span>
              </div>
              <div className="mt-4 text-slate-300 text-sm">{c.modules} modules • Projects and mentorship included</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
