import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Cyber from './components/Cyber';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-container">
        <Hero />
        <div className="canvas-container">
          <Canvas className="hero-canvas">
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <pointLight position={[-5, -5, -5]} intensity={0.8} color="#0066cc" />
              <pointLight position={[3, -3, 3]} intensity={0.6} color="#4f46e5" />
              <Cyber />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="content-sections">
        <section className="features-section">
          <div className="container">
            <h2>Advanced Threat Protection</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Real-time Monitoring</h3>
                <p>24/7 surveillance of your digital assets with AI-powered threat detection.</p>
              </div>
              <div className="feature-card">
                <h3>Zero-Trust Architecture</h3>
                <p>Never trust, always verify. Comprehensive security for modern enterprises.</p>
              </div>
              <div className="feature-card">
                <h3>Incident Response</h3>
                <p>Rapid response and mitigation when threats are detected.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="container">
            <h2>Trusted by Industry Leaders</h2>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime Guarantee</span>
              </div>
              <div className="stat">
                <span className="stat-number">10M+</span>
                <span className="stat-label">Threats Blocked</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Enterprise Clients</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
