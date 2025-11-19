import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-pulse" />
            Elev8 • AI Upskilling for Professionals
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Master AI skills with industry-grade, hands-on courses
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl">
            Learn from experts, build real projects, and accelerate your career with modern AI, MLOps, and product tracks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#courses" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-500/30 transition hover:scale-[1.02]">
              Explore Courses
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white font-semibold ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
              Talk to Us
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-500/10 via-blue-500/5 to-transparent" />
    </section>
  );
}
