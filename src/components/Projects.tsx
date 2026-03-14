import { Building2, Zap, Building, Droplet } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'AI-enhanced enterprise infrastructure for financial services, insurance, healthcare, education, government, and ISPs. Machine learning-powered data centers, predictive security systems, and intelligent unified communications.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    solutions: ['Data Center Infrastructure', 'Private Clouds', 'Cybersecurity', 'Unified Communications', 'AR Solutions', 'IoT'],
    verticals: ['Financial Services', 'Insurance', 'Healthcare', 'Education', 'Government', 'ISPs'],
    stats: { metric: '360°', label: 'AI-Driven Stack' },
  },
  {
    icon: Zap,
    title: 'Utilities',
    description: 'AI-powered management platforms with predictive analytics for resource planning, production forecasting, and plant operations. Smart meters with machine learning algorithms optimize energy distribution and predict maintenance needs.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200',
    solutions: ['Smart Meters', 'Resource Planning', 'Production Forecasting', 'IoT Networks', 'Data Centers', 'ERP/CRM'],
    verticals: ['Energy Management', 'Water Utilities', 'Power Distribution', 'Renewable Energy'],
    stats: { metric: 'Real-time', label: 'Monitoring' },
  },
  {
    icon: Building,
    title: 'Smart Cities',
    description: 'Cognitive urban infrastructure with AI-driven traffic optimization, intelligent parking algorithms, predictive waste management, and neural network-based surveillance. Self-learning systems adapt to city patterns in real-time.',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    solutions: ['Smart Light Poles', 'Parking Management', 'Waste Management', 'Environmental Monitoring', 'Surveillance', 'SOC'],
    verticals: ['Urban Planning', 'Public Safety', 'Traffic Management', 'eGovernment'],
    stats: { metric: 'City-wide', label: 'AI Network' },
  },
  {
    icon: Droplet,
    title: 'Oil & Gas',
    description: 'AI-powered safety systems with predictive risk assessment, intelligent personnel tracking, and machine learning-based equipment monitoring. Neural networks analyze hazard patterns to prevent incidents before they occur.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
    solutions: ['Personnel Monitoring', 'Location Tracking', 'Equipment Tracking', 'Network Cabling', 'Health & Safety'],
    verticals: ['Upstream Operations', 'Refineries', 'Pipeline Management', 'Offshore Platforms'],
    stats: { metric: '24/7', label: 'AI Safety' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmYzZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ipeng-light/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Industries</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering specialized technology solutions across diverse sectors with proven expertise and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-ipeng-light/20 hover:border-ipeng-light/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ipeng-light/20"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  <div className="absolute top-3 right-3 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-ipeng-light/30">
                    <Icon className="w-6 h-6 text-ipeng-light" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-ipeng-light/30">
                      <div className="text-lg font-bold text-ipeng-light">{industry.stats.metric}</div>
                      <div className="text-xs text-gray-400">{industry.stats.label}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ipeng-light transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 mb-3 leading-relaxed text-xs">
                    {industry.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-ipeng-light uppercase tracking-wide mb-2">Key Solutions</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                        <span
                          key={solutionIndex}
                          className="px-2 py-0.5 text-xs font-medium bg-ipeng-light/10 text-ipeng-light rounded border border-ipeng-light/20"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">AI Solutions Across Industries</h3>
            <p className="text-gray-300 mb-2">
              From AI-powered enterprise data centers to cognitive smart city infrastructure, from predictive utility management to intelligent oil & gas safety systems.
            </p>
            <p className="text-gray-400 mb-6">
              Our machine learning solutions continuously adapt and optimize to meet the evolving challenges of any industry vertical.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
            >
              Deploy AI in Your Industry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
