import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cyber: React.FC = () => {
  const { scene } = useGLTF('/cyber.glb');
  const modelRef = useRef<any>();
  const scrollRotationRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      scrollRotationRef.current = scrollProgress * Math.PI * 4; // 4 full rotations
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      // Smooth rotation based on scroll
      modelRef.current.rotation.y = scrollRotationRef.current;
      // Add subtle floating animation
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + 0.2;
      // Add subtle breathing scale effect
      const scale = 2.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      modelRef.current.scale.set(scale, scale, scale);
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} position={[0, 0.2, 0]} />;
};

export default Cyber;
