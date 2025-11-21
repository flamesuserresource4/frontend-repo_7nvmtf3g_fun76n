import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 md:p-10 text-center backdrop-blur-sm"
        >
          <div className="absolute -top-20 left-1/3 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/3 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />

          <h3 className="text-2xl md:text-3xl font-bold text-white">Prêt à builder plus vite que jamais ?</h3>
          <p className="text-blue-200/80 mt-2 max-w-2xl mx-auto">
            Lance-toi, dis ce que tu veux et obtiens un site opérationnel avec un backend connecté.
          </p>

          <div className="mt-6">
            <a href="/test" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition border border-white/20">
              Démarrer la démo
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
