import { ArrowLeft, Package, Wrench, Zap, Gamepad2, Glasses, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const solutions = [
  {
    icon: Package,
    title: 'Turnkey ERP Systems',
    description: 'Complete enterprise resource planning solutions tailored to your business. Integrated modules for finance, HR, supply chain, inventory, and CRM. Cloud-based or on-premise deployment with seamless data migration.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Maintenance Management',
    description: 'Intelligent maintenance systems with predictive analytics. Track assets, schedule preventive maintenance, manage work orders, and optimize spare parts inventory. Real-time dashboards for complete operational visibility.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Zap,
    title: 'Energy Management Systems',
    description: 'Advanced energy monitoring and optimization platforms. Real-time consumption tracking, demand forecasting, automated reporting, and cost optimization. Integration with smart meters and building automation systems.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Gamepad2,
    title: 'Gamification Platforms',
    description: 'Engage employees and customers through gamified experiences. Point systems, leaderboards, achievements, and rewards. Boost productivity, learning, and user engagement with game mechanics.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Glasses,
    title: 'Augmented Reality Solutions',
    description: 'Transform operations with AR/VR technology. Remote assistance, virtual training, 3D product visualization, and interactive maintenance guides. Based on Microsoft HoloLens and industry-leading platforms.',
    image: 'https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence & Analytics',
    description: 'Transform data into actionable insights with advanced analytics. Custom dashboards, real-time reporting, predictive modeling, and KPI tracking. Make data-driven decisions across all business functions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const benefits = [
  {
    title: 'Streamlined Operations',
    description: 'Integrate all business processes into unified systems for maximum efficiency.',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Real-time insights and analytics to guide strategic business decisions.',
  },
  {
    title: 'Cost Optimization',
    description: 'Reduce operational costs through automation and intelligent resource management.',
  },
  {
    title: 'Enhanced Productivity',
    description: 'Empower your workforce with modern tools and engaging digital experiences.',
  },
];

export default function DigitalTransformation() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'send-message' } });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ipeng-light/10 to-ipeng-navy/10"></div>

        <div className="absolute top-20 left-1/4 w-96 h-96 bg-ipeng-light/10 rounded-full blur-3xl"></div>

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
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Revolutionize your business with comprehensive digital transformation solutions. From enterprise
              resource planning to augmented reality, we deliver cutting-edge technology that drives innovation,
              efficiency, and growth across every aspect of your organization.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-gray-400 text-lg">
            Transform your business operations with integrated systems, intelligent automation, and immersive
            technologies designed for the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
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

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Digital Transformation?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20"
              >
                <h3 className="text-xl font-bold text-ipeng-light mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">40%</div>
            <div className="text-gray-400">Average Cost Reduction</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">3x</div>
            <div className="text-gray-400">Faster Business Processes</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">85%</div>
            <div className="text-gray-400">User Satisfaction Rate</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6">
            Our digital transformation experts will assess your current operations, identify opportunities for
            innovation, and implement solutions that deliver measurable results. From ERP systems to AR training
            platforms, we have the expertise to modernize your entire business.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
}
