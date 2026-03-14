import { Linkedin, Facebook, Clock, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    solutions: [
      { label: 'Edge to Cloud', id: 'features' },
      { label: 'Artificial Intelligence', id: 'features' },
      { label: 'Internet of Things', id: 'features' },
      { label: 'Infrastructure', id: 'features' },
    ],
    industries: [
      { label: 'Manufacturing', id: 'projects' },
      { label: 'Healthcare', id: 'projects' },
      { label: 'Retail', id: 'projects' },
      { label: 'Energy', id: 'projects' },
    ],
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'Services', id: 'features' },
      { label: 'Partners', id: 'hero' },
      { label: 'News', id: 'hero' },
    ],
    support: [
      { label: 'Contact Us', id: 'send-message' },
      { label: 'Support', id: 'send-message' },
      { label: 'Resources', id: 'hero' },
      { label: 'Documentation', id: 'hero' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ipengpro', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/ipengpro', label: 'Facebook' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-ipeng-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="mb-4 hover:opacity-80 transition-opacity"
            >
              <Logo />
            </button>
            <p className="text-gray-400 mb-6 max-w-sm">
              Intelligently automating your journey from Edge to Cloud - and back.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-ipeng-light mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 font-medium">Business Hours</div>
                  <div className="text-gray-400">Mon - Fri: 9:00 AM - 5:00 PM</div>
                  <div className="text-gray-500 text-xs">Closed on weekends</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-ipeng-light flex-shrink-0" />
                <a href="mailto:info@ipengpro.com" className="text-gray-400 hover:text-ipeng-light transition-colors">
                  info@ipengpro.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-ipeng-light flex-shrink-0" />
                <a href="tel:+96114114400" className="text-gray-400 hover:text-ipeng-light transition-colors">
                  +961 1 411 400
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-ipeng-light/20 hover:text-ipeng-light transition-all duration-300 border border-transparent hover:border-ipeng-light/30"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-ipeng-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {links.industries.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-ipeng-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-ipeng-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {links.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-ipeng-light transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ipeng-light/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 IP Engineering Pro. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Intelligently automating your digital transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
