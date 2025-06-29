import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="gradient-text">Next-Gen</span><br />
          Cyber Security<br />
          <span className="highlight">Solution</span>
        </h1>
        <p className="hero-subtitle">
          Protect your digital infrastructure with AI-powered threat detection,
          real-time monitoring, and enterprise-grade security protocols.
        </p>
        <div className="hero-buttons">
          <a className="button primary" href="#">Start Free Trial</a>
          <a className="button secondary" href="#">Watch Demo</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">99.9%</span>
            <span className="stat-desc">Threat Detection Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">&lt; 1ms</span>
            <span className="stat-desc">Response Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
