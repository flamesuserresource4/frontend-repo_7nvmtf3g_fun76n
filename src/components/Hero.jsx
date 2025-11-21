import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Play } from 'lucide-react'

function GlowBlob({ className }) {
  return (
    <div className={`absolute blur-3xl opacity-40 ${className}`} />
  )
}

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(14,165,233,0.08),rgba(99,102,241,0.08))]" />
        <GlowBlob className="w-[40rem] h-[40rem] bg-blue-500/30 rounded-full -top-40 -left-20" />
        <GlowBlob className="w-[32rem] h-[32rem] bg-indigo-500/30 rounded-full top-20 -right-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-36 md:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-blue-100/90 mb-6">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-xs">Gen-AI Studio • Build in minutes</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            Crée des apps du futur, juste en parlant
          </h1>
          
          <p className="mt-5 text-base md:text-lg text-blue-200/80 max-w-2xl mx-auto">
            Décris ton idée. Regarde-la prendre vie. Itère en temps réel avec un assistant qui code pour toi.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#get-started" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(59,130,246,0.8)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.8)] transition-all">
              <Rocket className="w-5 h-5" />
              Commencer
              <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/test" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-white/90 hover:bg-white/5 transition-colors">
              <Play className="w-5 h-5" />
              Tester le backend
            </a>
          </div>

          {/* Floating preview cards */}
          <div className="relative mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'UI réactive', desc: 'Animations fluides et interactions naturelles', color: 'from-sky-500 to-blue-500' },
                  { title: 'API prêtes', desc: 'Endpoints générés et connectés', color: 'from-violet-500 to-fuchsia-500' },
                  { title: 'Déploiement', desc: 'Partage instantané en un clic', color: 'from-emerald-500 to-teal-500' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5"
                  >
                    <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${item.color}`} />
                    <div className="relative">
                      <div className="text-xs text-blue-200/70 mb-2">Module</div>
                      <div className="text-lg font-semibold text-white mb-1">{item.title}</div>
                      <p className="text-sm text-blue-200/80">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
