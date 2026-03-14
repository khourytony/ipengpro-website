import { ArrowLeft, Network, Wifi, Shield, Router, Globe, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const networkSolutions = [
  {
    icon: Globe,
    title: 'CloudCampus Architecture',
    description: 'Unified campus network solutions that bridge on-premises infrastructure with cloud-native management. Centralized visibility, policy control, and analytics across all sites from a single cloud-managed platform.',
    image: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Router,
    title: 'SD-WAN Solutions',
    description: 'Software-defined wide area networking that intelligently routes traffic across multiple transport links. Reduce WAN costs, improve application performance, and simplify branch connectivity with centralized policy management.',
    image: 'https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wifi,
    title: 'WiFi 6 & Wireless Networks',
    description: 'Next-generation wireless infrastructure with WiFi 6/6E deployments for high-density environments. Deliver superior coverage, increased throughput, and lower latency for modern enterprise mobility requirements.',
    image: 'https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Comprehensive network security with next-generation firewalls, intrusion prevention, micro-segmentation, and zero-trust architecture. Protect your perimeter and internal traffic with AI-driven threat intelligence.',
    image: `${import.meta.env.BASE_URL}cyber-security-concept-digital-art_23-2151637760.jpg`,
  },
  {
    icon: Network,
    title: 'LAN/WAN Design & Deployment',
    description: 'End-to-end network design, implementation, and optimization for enterprise LAN and WAN environments. From topology planning to cabling, switching, and routing configuration tailored to your business needs.',
    image: `${import.meta.env.BASE_URL}Network-Design-scaled.jpeg`,
  },
  {
    icon: Layers,
    title: 'Network Automation & Monitoring',
    description: 'Automate repetitive network operations with intent-based networking and AI-driven analytics. Proactive monitoring, real-time alerts, and automated remediation keep your network performing at peak efficiency.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function NetworkEngineering() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'send-message' } });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ipeng-light/10 to-ipeng-navy/10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-ipeng-light/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ipeng-light hover:text-ipeng-light/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Network Engineering
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Design, deploy, and manage enterprise-grade networks built for performance, resilience, and security.
              From SD-WAN and WiFi 6 to network automation and zero-trust security, we engineer connectivity
              solutions that scale with your organization.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Network Solutions</h2>
          <p className="text-gray-400 text-lg mb-8">
            Intelligent, AI-driven network optimization with automated traffic routing, predictive congestion management,
            and continuous performance analytics across your entire network fabric.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-ipeng-light/20 hover:border-ipeng-light/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ipeng-light/20 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-ipeng-light" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ipeng-light transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">40%</div>
            <div className="text-gray-400">WAN Cost Reduction</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">10x</div>
            <div className="text-gray-400">Faster Deployment</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">99.9%</div>
            <div className="text-gray-400">Network Availability</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Engineer Your Network for Tomorrow</h3>
          <p className="text-gray-300 mb-6">
            Our network engineers bring deep expertise across vendor ecosystems including Cisco, Juniper, Aruba, Palo Alto,
            and Fortinet. Whether you need a greenfield deployment, a network refresh, or ongoing managed services,
            we deliver networks that are secure, agile, and ready for what's next.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Discuss Your Network Needs
          </button>
        </div>
      </div>
    </div>
  );
}
