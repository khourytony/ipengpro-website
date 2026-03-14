import { ArrowLeft, Cpu, Camera, Heart, DollarSign, ShieldCheck, Brain } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const solutions = [
  {
    icon: Cpu,
    title: 'AI Accelerators',
    description: 'Specialized hardware for AI training and inference, from clusters of hundreds of servers to rack servers, NICs, and USB cards. Optimized for maximum performance.',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Brain,
    title: 'AI Frameworks',
    description: 'Support for multiple platforms including PyTorch, TensorFlow, and MindSpore. Comprehensive tools for algorithm design, training, and inference.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Camera,
    title: 'AI-Surveillance',
    description: 'Software-defined cameras with face recognition, video analytics, and plate recognition. AI chip enables autonomous operations for enhanced security.',
    image: 'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Brain,
    title: 'Augmented Reality',
    description: 'Based on Microsoft Hololens for education, security, museums, and financial institutions. Integrated with Dynamics365 for business applications.',
    image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    title: 'AI-Healthcare',
    description: 'AI-aided medical diagnosis with cloud-based platform. Integrates with PACS systems, achieving 90%+ diagnostic accuracy for improved patient care.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'AI-InsurTech',
    description: 'Intelligent chatbots for insurance industry. Enhance customer loyalty, reduce operational costs, and unlock new market segment opportunities.',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: DollarSign,
    title: 'AI-FinTech',
    description: 'Advanced anti-money laundering detection, fraud prevention, and ATM security. Big Data analytics identifies suspicious patterns in real-time.',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cpu,
    title: 'Custom AI Solutions',
    description: 'Tailored AI implementations for your specific industry needs. From concept to deployment, we build solutions that drive business value.',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ArtificialIntelligence() {
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
              Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Deploy advanced neural networks and deep learning models to automate complex workflows, enable predictive analytics,
              and power autonomous decision-making. Our AI solutions continuously learn and evolve, delivering exponential improvements
              in operational efficiency and business intelligence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Next-Generation AI & Machine Learning</h2>
          <p className="text-gray-400 text-lg">
            From cognitive healthcare diagnostics to predictive financial analytics, our neural networks and deep learning
            systems are redefining what's possible in autonomous business operations.
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">90%+</div>
            <div className="text-gray-400">Diagnostic Accuracy in Healthcare AI</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">10x</div>
            <div className="text-gray-400">Faster Threat Detection with AI Security</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-ipeng-light/20">
            <div className="text-4xl font-bold text-ipeng-light mb-2">50%</div>
            <div className="text-gray-400">Reduction in Operational Costs</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-ipeng-navy/30 to-ipeng-blue/20 backdrop-blur-sm rounded-xl p-8 border border-ipeng-light/20">
          <h3 className="text-2xl font-bold text-white mb-4">Unlock the Power of AI for Your Business</h3>
          <p className="text-gray-300 mb-6">
            Whether you need AI accelerators, custom frameworks, or industry-specific AI applications,
            our team has the expertise to deliver solutions that drive real business value.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
          >
            Explore AI Solutions
          </button>
        </div>
      </div>
    </div>
  );
}
