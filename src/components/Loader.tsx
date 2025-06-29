import { Html } from '@react-three/drei';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <Html>
      <div className="loader">
        <div className="loader-spinner"></div>
      </div>
    </Html>
  );
};

export default Loader;
