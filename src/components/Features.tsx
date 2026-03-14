import { Cloud, Brain, Radio, Server, Network, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Cloud,
    title: 'Edge to Cloud',
    description: 'AI-powered orchestration seamlessly integrates edge computing with cloud infrastructure. Our intelligent systems automatically optimize data flow, resource allocation, and processing efficiency across your entire technology stack.',
    url: '/solutions/edge-to-cloud',
    highlights: ['Data Center', 'Private Cloud', 'HCI', 'VDI', 'Network Solutions'],
    image: `${import.meta.env.BASE_URL}data-transfer-cloud-computing-technology-600nw-2161779273.jpg`,
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Deploy advanced AI accelerators and neural networks to automate complex workflows, predict system behavior, and enable real-time decision making. Our ML models continuously learn and adapt to optimize your operations.',
    url: '/solutions/artificial-intelligence',
    highlights: ['AI Accelerators', 'Surveillance', 'Healthcare', 'FinTech', 'InsurTech'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Radio,
    title: 'Internet of Things',
    description: 'AI-enhanced IoT platforms that intelligently manage millions of connected devices. Machine learning algorithms analyze sensor data in real-time, predicting maintenance needs and optimizing device performance autonomously.',
    url: '/solutions/internet-of-things',
    highlights: ['VHF IoT Network', 'BLE Solutions', 'Edge Computing', 'LoRaWAN'],
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Server,
    title: 'Infrastructure Solutions',
    description: 'Self-optimizing infrastructure powered by AI that automatically scales resources, predicts failures, and optimizes performance. Cognitive systems learn your workload patterns to deliver maximum efficiency and reliability.',
    url: '/solutions/infrastructure-solutions',
    highlights: ['Data Centers', 'Storage', 'Virtualization', 'Disaster Recovery'],
    image: 'https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Network,
    title: 'Network Engineering',
    description: 'AI-driven network optimization with intelligent traffic routing, predictive congestion management, and automated threat detection. Machine learning continuously analyzes patterns to enhance security and performance.',
    url: '/solutions/network-engineering',
    highlights: ['CloudCampus', 'SD-WAN', 'WiFi 6', 'Security'],
    image: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Sparkles,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation solutions including turnkey ERP systems, energy management, gamification platforms, and augmented reality. Transform your business operations with cutting-edge technology.',
    url: '/solutions/digital-transformation',
    highlights: ['ERP Systems', 'Energy Management', 'Gamification', 'AR Solutions'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ipeng-light/5 to-transparent"></div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-ipeng-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ipeng-navy/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
          <p className="text-xl text-ipeng-light max-w-3xl mx-auto">
            AI-powered technology solutions from Edge to Cloud with machine learning, adaptive systems, and cognitive infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.url}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-ipeng-light/20 hover:border-ipeng-light/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ipeng-light/20 cursor-pointer block overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ipeng-light/0 via-ipeng-light/5 to-ipeng-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  <div className="absolute top-4 right-4 w-14 h-14 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-ipeng-light/30">
                    <Icon className="w-7 h-7 text-ipeng-light" />
                  </div>

                  <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-ipeng-light opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ipeng-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    {feature.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-ipeng-light/10 text-ipeng-light rounded border border-ipeng-light/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-ipeng-light font-medium">Learn More →</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom AI solution? Our machine learning engineers design intelligent, adaptive systems tailored to your unique infrastructure and business objectives.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
}
