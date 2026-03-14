import { ArrowLeft, Server, HardDrive, Database, Monitor, Archive, Cpu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const infrastructureSolutions = [
  {
    icon: Server,
    title: 'Data Center Facilities',
    description: 'Design, delivery, and management of enterprise-grade data centers with modular or traditional configurations. Tier-certified facilities with advanced cooling, power management, and flexible tenant configurations.',
    image: '/1693228049_1679943811_OIG-website-thumbnail-image_command-and-control-C4IT.jpg',
  },
  {
    icon: HardDrive,
    title: 'Hyper-Converged Infrastructure',
    description: 'Resource-on-demand provisioning with convergence of compute, storage, and virtualization. Linear expansion capabilities, simplified management, and reduced operational complexity for growing business needs.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cpu,
    title: 'Server & Compute Solutions',
    description: 'High-performance server platforms from leading vendors including HPE, Dell, Cisco UCS, and Lenovo. Rack, blade, and tower configurations optimized for your workloads — from standard applications to high-performance computing.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Monitor,
    title: 'Virtualization Platforms',
    description: 'Comprehensive server virtualization with cloud management software, disaster recovery, and backup solutions. Maximize resource utilization and reduce hardware costs with VMware, Hyper-V, and KVM virtualization.',
    image: 'https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Database,
    title: 'Storage Solutions',
    description: 'All-flash NVMe and hybrid storage solutions for high-performance data access. Scalable and reliable storage infrastructure with advanced data protection, deduplication, and compression from NetApp, Pure Storage, and Dell EMC.',
    image: '/close-up-illuminated-computer_1048944-29093318.jpg',
  },
  {
    icon: Archive,
    title: 'Disaster Recovery & Backup',
    description: 'Comprehensive business continuity solutions with automated backups, geo-redundant replication, and rapid recovery capabilities. Protect your critical data with tested DR plans and near-zero RTO/RPO targets.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function InfrastructureSolutions() {
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
              Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Build a robust, scalable, and secure IT foundation with our comprehensive infrastructure solutions.
              From enterprise data centers to virtualization, storage, and disaster recovery, we deliver
              cutting-edge technology that powers your business growth and digital transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Core Infrastructure Capabilities</h2>
          <p className="text-gray-400 text-lg mb-8">
            Self-optimizing infrastructure powered by intelligent automation that scales resources, predicts failures,
            and maximizes performance. Cognitive systems learn your workload patterns to deliver reliability at every layer.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureSolutions.map((solution, index) => {
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
            <div className="text-4xl font-bold text-ipeng-light mb-2">99.99%</div>
            <div className="text-gray-400">Infrastructure Uptime</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">50%</div>
            <div className="text-gray-400">Cost Reduction</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">24/7</div>
            <div className="text-gray-400">Expert Support</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Transform Your IT Infrastructure</h3>
          <p className="text-gray-300 mb-6">
            Our infrastructure experts will design, implement, and manage comprehensive solutions tailored to your
            business requirements. From enterprise data centers to virtualization and storage, we deliver reliability,
            performance, and security at every layer with proven vendor partnerships and certified engineering teams.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Discuss Your Infrastructure Needs
          </button>
        </div>
      </div>
    </div>
  );
}
