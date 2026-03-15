import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import EdgeToCloud from './pages/EdgeToCloud';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import InternetOfThings from './pages/InternetOfThings';
import DigitalTransformation from './pages/DigitalTransformation';
import NetworkEngineering from './pages/NetworkEngineering';
import InfrastructureSolutions from './pages/InfrastructureSolutions';

const normalizeBasename = (base: string | undefined) => {
  if (!base) return '/';
  const trimmed = base.trim().replace(/\/+$/, '');
  return trimmed || '/';
};

function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const locationState = state as { scrollTo?: string } | null;
    if (!locationState?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}

function App() {
  const basename = normalizeBasename(import.meta.env.BASE_URL);

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/edge-to-cloud" element={<EdgeToCloud />} />
          <Route path="/solutions/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/solutions/internet-of-things" element={<InternetOfThings />} />
          <Route path="/solutions/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/solutions/network-engineering" element={<NetworkEngineering />} />
          <Route path="/solutions/infrastructure-solutions" element={<InfrastructureSolutions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
