import { ArrowRight, Cpu, LineChart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('send-message');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white isolate"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.12),transparent_32%)]" />
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA2NCAwSDBNIDY0IDY0SDBNIDAgMEw2NCA2NE0gNjQgMEwwIDY0IiBzdHJva2U9IiMyMjk4Y2QiIHN0cm9rZS1vcGFjaXR5PSIwLjMiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-medium text-cyan-200">AI Infrastructure Studio</span>
              <span className="h-1 w-1 rounded-full bg-cyan-300" />
              <span className="text-xs text-cyan-100/80">Edge • Cloud • Data</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Precision engineering for
              </span>
              <br />
              <span className="text-white">resilient, autonomous networks.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl animate-fade-in-up delay-200">
              We architect intelligent systems that sense, decide, and adapt—linking your edge, cloud, and AI workloads into a single, secure, self-optimizing fabric.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold shadow-lg shadow-cyan-500/30 transition duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-cyan-400/50 hover:scale-[1.02]"
              >
                Start a project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400/60 hover:bg-white/10 hover:scale-[1.02]"
              >
                Explore services
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                <div className="mt-1 rounded-full bg-cyan-500/10 p-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Secure by design</p>
                  <p className="text-sm text-gray-400">Zero-trust patterns, continuous compliance, and resilient failover baked in.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
                <div className="mt-1 rounded-full bg-cyan-500/10 p-2">
                  <Cpu className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Adaptive automation</p>
                  <p className="text-sm text-gray-400">AI-driven orchestration that learns from telemetry to keep you online.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 backdrop-blur">
                <p className="text-sm text-cyan-100/80">Reliability</p>
                <p className="text-xl font-semibold text-white">99.99% uptime</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-sm text-gray-300">Time-to-deploy</p>
                <p className="text-xl font-semibold text-white">3x faster</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <p className="text-sm text-gray-300">Global coverage</p>
                <p className="text-xl font-semibold text-white">42 regions</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[480px]">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-900/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="relative flex items-center justify-between border-b border-white/5 pb-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 shadow-lg shadow-cyan-500/40">
                    <LineChart className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Live command view</p>
                    <p className="text-xl font-semibold text-white">Edge to Cloud Fabric</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 border border-emerald-400/40">
                  Operational
                </span>
              </div>

              <div className="relative mt-5 space-y-4">
                {[
                  {
                    title: 'Edge nodes',
                    detail: '12 regions active • adaptive routing',
                    status: 'Stabilizing latency'
                  },
                  {
                    title: 'AI control',
                    detail: 'Predictive load + anomaly guardrails',
                    status: 'Autonomous'
                  },
                  {
                    title: 'Cloud core',
                    detail: 'Multi-cloud mesh with zero-trust access',
                    status: 'Secure'
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/5 bg-slate-900/60 px-4 py-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
                    </div>
                    <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-100">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 rounded-2xl border border-white/5 bg-gradient-to-r from-cyan-500/10 via-white/5 to-blue-500/10 px-4 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Impact forecast</p>
                    <p className="text-2xl font-semibold text-white">+48% efficiency</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cyan-100/80">Energy optimized</p>
                    <p className="text-sm text-gray-300">Carbon-aware routing live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
