import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Send, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

interface Location {
  id: string;
  name: string;
  country: string;
  flag: string;
  address: string;
  phone: string[];
  fax?: string;
  email: string;
  coordinates: { lat: number; lng: number };
  cityName: string;
  mapUrl?: string;
}

const locations: Location[] = [
  {
    id: 'lebanon',
    name: 'Lebanon Office',
    country: 'Lebanon',
    flag: 'https://flagcdn.com/w80/lb.png',
    address: 'Dekwaneh, 501 Street, 108 Asmar Bldg, 1st Floor\nP.O. Box 50-110 Beirut, Lebanon',
    phone: ['+961 1 411 400'],
    fax: '+961 1 411 411',
    email: 'info@ipengpro.com',
    coordinates: { lat: 33.8886, lng: 35.5147 },
    cityName: 'Beirut, Lebanon',
    mapUrl: 'https://maps.app.goo.gl/fjpNEXsLQ4Q3RaU56',
  },
  {
    id: 'uae',
    name: 'UAE Office',
    country: 'United Arab Emirates',
    flag: 'https://flagcdn.com/w80/ae.png',
    address: 'DTEC, Dubai Silicon Oasis\nP.O. Box 342128 Dubai, UAE',
    phone: ['+971 55 479 4617', '+971 56 542 1409'],
    email: 'info@ipengpro.com',
    coordinates: { lat: 25.1234, lng: 55.3789 },
    cityName: 'Dubai, UAE',
  },
  {
    id: 'jordan',
    name: 'Jordan Office',
    country: 'Jordan',
    flag: 'https://flagcdn.com/w80/jo.png',
    address: 'Arar Mustafa Wahbi Al Tal Street, Armada Tower, 1st Floor\nAmman, Jordan',
    phone: ['+962 7 8293 0959'],
    email: 'info@ipengpro.com',
    coordinates: { lat: 31.9454, lng: 35.9284 },
    cityName: 'Amman, Jordan',
  },
  {
    id: 'france',
    name: 'France Office',
    country: 'France',
    flag: 'https://flagcdn.com/w80/fr.png',
    address: 'Les Clayes-sous-Bois, France',
    phone: ['+33 6 14 15 56 14'],
    email: 'info@ipengpro.com',
    coordinates: { lat: 48.8208, lng: 1.9836 },
    cityName: 'Les Clayes-sous-Bois, France',
  },
  {
    id: 'egypt',
    name: 'Egypt Office',
    country: 'Egypt',
    flag: 'https://flagcdn.com/w80/eg.png',
    address: 'Cairo, Egypt',
    phone: ['+20 254 087 06'],
    email: 'info@ipengpro.com',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    cityName: 'Cairo, Egypt',
  },
];

export default function GlobalPresence() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBusinessHours = () => {
    return 'Monday - Friday: 9:00 AM - 5:00 PM';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ipeng-light/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ipeng-light/50 to-transparent"></div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-ipeng-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ipeng-navy/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us & Global Presence</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with our team worldwide and discover how AI-powered solutions can transform your business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-ipeng-light" />
              Our Locations
            </h3>
            <div className="space-y-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedLocation.id === location.id
                      ? 'bg-ipeng-light/20 border-ipeng-light text-white'
                      : 'bg-slate-800/50 border-ipeng-light/20 text-gray-400 hover:border-ipeng-light/50 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={location.flag}
                      alt={`${location.country} flag`}
                      className="w-10 h-7 object-cover rounded flex-shrink-0 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-sm opacity-75">{location.country}</div>
                    </div>
                    <MapPin className={`w-5 h-5 mt-1 flex-shrink-0 ${
                      selectedLocation.id === location.id ? 'text-ipeng-light' : 'text-gray-500'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-ipeng-light/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={selectedLocation.flag}
                  alt={`${selectedLocation.country} flag`}
                  className="w-16 h-11 object-cover rounded shadow-lg"
                />
                <h3 className="text-2xl font-bold text-white">{selectedLocation.name}</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ipeng-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ipeng-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ipeng-light mb-1">Address</div>
                    <div className="text-gray-300 whitespace-pre-line">{selectedLocation.address}</div>
                  </div>
                </div>

                {selectedLocation.phone.length > 0 && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ipeng-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-ipeng-light" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ipeng-light mb-1">Phone</div>
                      <div className="space-y-1">
                        {selectedLocation.phone.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-gray-300 hover:text-ipeng-light transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                      {selectedLocation.fax && (
                        <div className="text-sm text-gray-400 mt-2">
                          Fax: {selectedLocation.fax}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ipeng-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-ipeng-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ipeng-light mb-1">Email</div>
                    <a
                      href={`mailto:${selectedLocation.email}`}
                      className="text-gray-300 hover:text-ipeng-light transition-colors"
                    >
                      {selectedLocation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ipeng-light/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-ipeng-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ipeng-light mb-1">Business Hours</div>
                    <div className="text-gray-300">{getBusinessHours()}</div>
                    <div className="text-sm text-gray-400 mt-1">Closed on weekends</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-ipeng-light/20">
                <a
                  href={selectedLocation.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.cityName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50"
                >
                  <MapPin className="w-5 h-5" />
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="send-message" className="mt-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-ipeng-light/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-ipeng-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ipeng-light/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-ipeng-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ipeng-light/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-ipeng-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ipeng-light/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll be in touch soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-ipeng-light to-ipeng-navy text-white font-semibold rounded-lg hover:from-ipeng-light hover:to-ipeng-blue transition-all duration-300 shadow-lg shadow-ipeng-light/30 hover:shadow-ipeng-light/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
