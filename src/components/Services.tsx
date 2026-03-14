import { Network, Cloud, Cpu, Shield, Zap, Settings } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Network Design & Implementation',
    description: 'Comprehensive network infrastructure planning, design, and deployment for enterprise environments.',
    image: '/Network-Design-scaled.jpeg',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'End-to-end cloud migration, optimization, and management services across major cloud platforms.',
    image: '/infovista_agentic_ai_homepage_banner.jpg',
  },
  {
    icon: Cpu,
    title: 'IoT Integration',
    description: 'Smart device integration and IoT ecosystem development for connected infrastructure solutions.',
    image: '/web-4841856_1280.jpg',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your infrastructure from evolving threats and vulnerabilities.',
    image: '/cyber-security-concept-digital-art_23-2151637760.jpg',
  },
  {
    icon: Zap,
    title: 'Edge Computing',
    description: 'Deploy processing power closer to data sources for reduced latency and improved performance.',
    image: '/cybersecurity-digital-background-3-min.png',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Seamless integration of diverse systems and technologies into unified, efficient solutions.',
    image: '/untitled-design-5.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-ipeng-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-ipeng-light max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your infrastructure and technology needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-ipeng-blue/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ipeng-dark/90 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 inline-flex p-2.5 bg-ipeng-blue/20 backdrop-blur-sm rounded-lg border border-ipeng-blue/30">
                    <Icon className="w-5 h-5 text-ipeng-blue" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ipeng-blue transition-colors">{service.title}</h3>
                  <p className="text-ipeng-light leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
