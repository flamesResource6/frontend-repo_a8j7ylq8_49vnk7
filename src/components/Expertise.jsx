import { Brain, Shield, LineChart, Workflow } from 'lucide-react'

const items = [
  { icon: Brain, title: 'Generative AI', desc: 'LLMs, RAG, prompt engineering, agents, evaluation' },
  { icon: LineChart, title: 'MLOps', desc: 'Experiment tracking, deployment, monitoring, governance' },
  { icon: Shield, title: 'Responsible AI', desc: 'Safety, guardrails, privacy, policy and compliance' },
  { icon: Workflow, title: 'AI Product', desc: 'Discovery, UX for AI, roadmap, business value' }
]

export default function Expertise() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Expertise</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Practical depth from shipping real AI systems in production across industries.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <it.icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
