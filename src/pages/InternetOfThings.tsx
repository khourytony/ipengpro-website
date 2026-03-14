import { ArrowLeft, Radio, Bluetooth, Cpu, Navigation } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const solutions = [
  {
    icon: Radio,
    title: 'VHF IoT Network',
    description: 'UHF/VHF-based network with Base Stations and Core Network. Cost-effective alternative to traditional operator networks, designed for city-wide IoT coverage with reliable connectivity.',
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Bluetooth,
    title: 'BLE Solutions',
    description: 'Bluetooth Low Energy for smart supermarket tags, student and worker badges, indoor positioning, and location finding. BLE gateways extract data intelligence for actionable insights.',
    image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'FusionRobo Edge Computing cabinets with modular design and remote management. Enables low-latency decision making for enterprise branches with intelligent processing at the edge.',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Navigation,
    title: 'LoRaWAN Solutions',
    description: 'Outdoor tracking and worker safety with sensor-embedded tags. Features temperature monitoring, heartbeat tracking, gyroscope, and emergency button with GPS-assisted high-accuracy location.',
    image: 'https://images.pexels.com/photos/2582930/pexels-photo-2582930.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const useCases = [
  {
    title: 'Smart Retail',
    description: 'Real-time inventory tracking with BLE tags and edge processing for instant insights.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Worker Safety',
    description: 'LoRaWAN tracking with vital signs monitoring and emergency alerts for hazardous environments.',
    image: 'https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Smart City',
    description: 'City-wide VHF IoT network connecting thousands of sensors for traffic, environment, and utilities.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function InternetOfThings() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'send-message' } });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ipeng-light/10 to-ipeng-navy/10"></div>

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ipeng-navy/10 rounded-full blur-3xl"></div>

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
              Internet of Things
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              AI-powered IoT platforms that intelligently connect, monitor, and autonomously manage millions of devices.
              Machine learning algorithms analyze sensor streams in real-time, predicting maintenance needs, optimizing performance,
              and enabling self-healing networks across any environment.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Intelligent IoT Infrastructure</h2>
          <p className="text-gray-400 text-lg">
            From AI-enhanced VHF networks to cognitive edge computing, our machine learning-powered IoT platforms
            deliver predictive insights and autonomous optimization for connected ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-ipeng-light/20 hover:border-ipeng-light/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ipeng-light/20 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-ipeng-light" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ipeng-light transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-ipeng-light/20 hover:border-ipeng-light/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ipeng-light/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ipeng-light transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-3xl font-bold text-ipeng-light mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Network Uptime</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-3xl font-bold text-ipeng-light mb-2">&lt;10ms</div>
            <div className="text-gray-400 text-sm">Edge Processing Latency</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-3xl font-bold text-ipeng-light mb-2">10km+</div>
            <div className="text-gray-400 text-sm">LoRaWAN Range</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-3xl font-bold text-ipeng-light mb-2">1000s</div>
            <div className="text-gray-400 text-sm">Connected Devices</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Build Your Connected Future</h3>
          <p className="text-gray-300 mb-6">
            Whether you need city-wide IoT coverage, indoor positioning, or edge computing solutions,
            our IoT experts will design and deploy the perfect infrastructure for your needs.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Get Started with IoT
          </button>
        </div>
      </div>
    </div>
  );
}
