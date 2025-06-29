import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <img className="nav-logo" src="/logo.svg" alt="Logo" />
        <p className="nav-title">Cyber Security</p>
        <div className="nav-links">
          <a className="link" href="#">Features</a>
          <a className="link" href="#">Pricing</a>
          <a className="button" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
