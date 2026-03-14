import { ArrowLeft, Cloud, Zap, GitMerge, Cpu, BarChart2, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const edgeSolutions = [
  {
    icon: Zap,
    title: 'Edge Computing',
    description: 'Deploy processing power at the network edge — closer to data sources — for ultra-low latency and real-time responsiveness. Ideal for IoT, manufacturing automation, smart retail, and mission-critical applications that cannot tolerate cloud round-trip delays.',
    image: '/cybersecurity-digital-background-3-min.png',
  },
  {
    icon: Cloud,
    title: 'Public Cloud Integration',
    description: 'Seamless integration with AWS, Microsoft Azure, and Google Cloud. We architect, migrate, and optimize your workloads for public cloud environments — ensuring cost efficiency, security, and performance from day one.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: GitMerge,
    title: 'Hybrid & Multi-Cloud',
    description: 'Unified management across on-premises, private cloud, and multiple public clouds. Leverage the best of every environment with workload portability, unified security policies, and centralized governance across your entire hybrid estate.',
    image: '/data-transfer-cloud-computing-technology-600nw-2161779273.jpg',
  },
  {
    icon: Cpu,
    title: 'Private Cloud Solutions',
    description: 'Open architecture private cloud stacks built on VMware, OpenStack, or Nutanix. Full control over your data and compute with enterprise-grade flexibility, compliance readiness, and seamless hybrid connectivity to public clouds.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: BarChart2,
    title: 'Cloud Cost Optimization',
    description: 'Continuous cloud spend analysis with rightsizing recommendations, reserved instance planning, and automated policy enforcement. Eliminate cloud waste and ensure every dollar spent drives measurable business value.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Lock,
    title: 'Cloud Security & Compliance',
    description: 'End-to-end cloud security including identity and access management, encryption, network segmentation, and continuous compliance monitoring. Meet GDPR, ISO 27001, SOC 2, and industry-specific regulatory requirements across all cloud environments.',
    image: '/cyber-security-concept-digital-art_23-2151637760.jpg',
  },
];

export default function EdgeToCloud() {
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
              Edge to Cloud
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Orchestrate a seamless continuum from edge devices to the cloud with AI-powered automation.
              We design and manage intelligent architectures that optimize data flow, resource allocation,
              and processing efficiency across your entire technology stack — from the factory floor to the hyperscaler.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Edge to Cloud Capabilities</h2>
          <p className="text-gray-400 text-lg mb-8">
            Intelligent orchestration that bridges edge computing with cloud infrastructure. Our solutions automatically
            determine where workloads run — at the edge, in a private cloud, or in public cloud — based on latency,
            cost, compliance, and performance requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeSolutions.map((solution, index) => {
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
            <div className="text-4xl font-bold text-ipeng-light mb-2">&lt;5ms</div>
            <div className="text-gray-400">Edge Processing Latency</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">35%</div>
            <div className="text-gray-400">Cloud Cost Savings</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">3+</div>
            <div className="text-gray-400">Cloud Platforms Supported</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Architect Your Edge to Cloud Strategy</h3>
          <p className="text-gray-300 mb-6">
            Our cloud architects and edge computing specialists will assess your current environment, define an
            optimized hybrid architecture, and deliver a phased roadmap to bring your workloads to the right
            tier — at the right cost and performance level. From proof of concept to full production deployment,
            we guide you every step of the way.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Discuss Your Edge to Cloud Needs
          </button>
        </div>
      </div>
    </div>
  );
}
