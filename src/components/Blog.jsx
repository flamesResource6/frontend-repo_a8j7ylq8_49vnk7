import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/blogs`)
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Industry AI Blog</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Perspectives, research, and case studies from the front lines of applied AI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <div key={p.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs inline-flex px-2 py-1 rounded-full bg-white/10 text-white">{p.tag}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200">
                Read more <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
