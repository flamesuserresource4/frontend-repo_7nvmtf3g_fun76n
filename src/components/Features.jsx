import { motion } from 'framer-motion'
import { Cpu, Link2, Shield, Zap, Rows, Layers3 } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Moteur IA temps réel',
    desc: 'Un agent qui code, refactorise et déploie en direct.',
    accent: 'from-sky-500/30 to-blue-500/30'
  },
  {
    icon: Link2,
    title: 'Frontend + Backend',
    desc: 'React + FastAPI reliés automatiquement à ta base de données.',
    accent: 'from-violet-500/30 to-fuchsia-500/30'
  },
  {
    icon: Shield,
    title: 'Robuste par défaut',
    desc: 'Validation, erreurs gérées et bonnes pratiques out-of-the-box.',
    accent: 'from-emerald-500/30 to-teal-500/30'
  },
  {
    icon: Zap,
    title: 'HMR instantané',
    desc: 'Chaque changement est visible immédiatement dans la preview.',
    accent: 'from-amber-500/30 to-orange-500/30'
  },
  {
    icon: Rows,
    title: 'Design moderne',
    desc: 'Tailwind + micro-interactions pour une UX futuriste.',
    accent: 'from-cyan-500/30 to-indigo-500/30'
  },
  {
    icon: Layers3,
    title: 'Extensible',
    desc: 'Ajoute des modules: auth, paiements, analytics, etc.',
    accent: 'from-rose-500/30 to-pink-500/30'
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Un studio complet, sans friction</h2>
          <p className="text-blue-200/80 mt-3">Tout ce qu'il faut pour shipper plus vite que la lumière.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-30 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                </div>
                <p className="text-blue-200/80 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
