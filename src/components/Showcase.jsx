import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Landing animée',
    subtitle: 'Héros 3D, gradients et glassmorphism',
    img: 'https://images.unsplash.com/photo-1557264322-b44d383a2904?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'Dashboard temps réel',
    subtitle: 'Traces, graphiques et états live',
    img: 'https://images.unsplash.com/photo-1551281044-8b29a0f7a87f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'E-commerce headless',
    subtitle: 'Panier, checkout, Webhooks',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Ce que tu peux construire</h2>
            <p className="text-blue-200/80 mt-2">Des expériences hautement interactives et performantes.</p>
          </div>
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white/90 border border-white/10 hover:bg-white/15 transition">
            Voir comment
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="preview" className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-blue-200/80 text-sm">{c.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
