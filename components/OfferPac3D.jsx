'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const C = {
  sage: '#7A9E69',
  sageLight: '#9BBF88',
  terracotta: '#c45c3d',
  terraGlow: '#e07a5f',
  cream: '#F5FFEF',
  forest: '#1f2d18',
  white: '#f8faf6',
};

function OutdoorPacUnit() {
  const fan = useRef();
  const glow = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (fan.current) fan.current.rotation.y = t * 2.5;
    if (glow.current) {
      glow.current.material.emissiveIntensity = 0.4 + Math.sin(t * 1.2) * 0.15;
    }
  });

  return (
    <group position={[-2.2, -0.8, 0]} rotation={[0, 0.3, 0]}>
      <mesh castShadow>
        <boxGeometry args={[1.4, 1.8, 0.7]} />
        <meshStandardMaterial color={C.white} metalness={0.35} roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.15, 0.36]}>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.6} />
      </mesh>
      <group ref={fan} position={[0, 0.15, 0.4]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (Math.PI / 2) * i]}>
            <boxGeometry args={[0.55, 0.05, 0.02]} />
            <meshStandardMaterial color="#555" metalness={0.7} />
          </mesh>
        ))}
      </group>
      <mesh ref={glow} position={[0.45, 0.55, 0.36]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.55, -0.2, -0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 12]} />
        <meshStandardMaterial color="#b87333" metalness={0.65} />
      </mesh>
    </group>
  );
}

function IndoorSplitGift() {
  const ribbon = useRef();

  useFrame((state) => {
    if (ribbon.current) {
      ribbon.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={ribbon} position={[2.4, 0.6, 0.5]}>
        <mesh>
          <boxGeometry args={[1.1, 0.35, 0.22]} />
          <meshStandardMaterial color={C.white} metalness={0.2} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.08, 0.5, 0.24]} />
          <meshStandardMaterial color={C.terracotta} emissive={C.terracotta} emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0.35, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.08, 0.35, 0.24]} />
          <meshStandardMaterial color={C.terracotta} emissive={C.terraGlow} emissiveIntensity={0.35} />
        </mesh>
        <mesh position={[0, 0.55, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={C.terracotta} emissive={C.terraGlow} emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function EnergyParticles({ count = 36 }) {
  const points = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} color={C.sageLight} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#0e1610']} />
      <fog attach="fog" args={['#0e1610', 10, 28]} />
      <ambientLight intensity={0.35} color={C.cream} />
      <pointLight position={[4, 3, 4]} intensity={0.7} color={C.terraGlow} />
      <pointLight position={[-4, -1, 2]} intensity={0.45} color={C.sageLight} />
      <directionalLight position={[2, 6, 5]} intensity={0.6} color={C.cream} />
      <OutdoorPacUnit />
      <IndoorSplitGift />
      <EnergyParticles />
    </>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}

export default function OfferPac3D() {
  const [enabled, setEnabled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    const saveData = navigator.connection?.saveData;
    setEnabled(!reducedMotion && !isMobile && !saveData);
  }, [reducedMotion]);

  if (!enabled) {
    return (
      <div className="offer-3d-fallback" aria-hidden="true">
        <div className="offer-3d-glow offer-3d-glow--sage" />
        <div className="offer-3d-glow offer-3d-glow--terra" />
      </div>
    );
  }

  return (
    <div className="offer-3d-canvas" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0.5, 9], fov: 48 }}
          style={{ pointerEvents: 'none' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
