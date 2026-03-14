import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Deployments' },
    { icon: Award, value: '15+', label: 'Years Innovation' },
    { icon: Target, value: '99.9%', label: 'System Reliability' },
    { icon: Heart, value: '24/7', label: 'Monitoring' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Intelligent </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Automation Experts
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We leverage artificial intelligence and machine learning to intelligently automate complex infrastructure workflows. From edge computing to cloud platforms, our AI-driven solutions optimize every layer of your technology stack.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With expertise spanning AI accelerators, IoT networks, and smart infrastructure, we transform traditional IT operations into intelligent, self-optimizing systems. Our solutions don't just respond to change—they predict and adapt to it.
            </p>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              Explore AI Solutions
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
