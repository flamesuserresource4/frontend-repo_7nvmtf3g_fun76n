import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Futuristic animated background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* subtle star field */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_45%)]" />
        {/* grid overlay */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Hero />
      <Features />
      <Showcase />
      <CTA />

      <footer className="py-10 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-blue-200/70 text-sm">Construit avec amour et IA • Flames Blue</div>
          <div className="flex items-center gap-4 text-blue-200/70 text-sm">
            <a href="/test" className="hover:text-white transition">Status backend</a>
            <a href="#get-started" className="hover:text-white transition">Commencer</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
