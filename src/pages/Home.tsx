import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Projects from '../components/Projects';
import News from '../components/News';
import GlobalPresence from '../components/GlobalPresence';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <News />
      <GlobalPresence />
      <Footer />
    </>
  );
}
