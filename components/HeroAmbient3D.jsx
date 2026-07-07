'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const COLORS = {
  sage: '#7A9E69',
  sageLight: '#9BBF88',
  terracotta: '#c45c3d',
  terracottaGlow: '#e07a5f',
  forest: '#1f2d18',
  cream: '#F5FFEF',
};

function AmbientParticles({ count = 64 }) {
  const points = useRef();

  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
      spd.push(0.2 + Math.random() * 0.5);
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.015;
    const posAttr = points.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const y = positions[i * 3 + 1] + Math.sin(t * speeds[i] + i) * 0.25;
      posAttr.array[i * 3 + 1] = y;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        color={COLORS.sageLight}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const orbs = useMemo(
    () => [
      { pos: [-9, 3, -6], scale: 1.8, color: COLORS.sage, speed: 0.4 },
      { pos: [10, -2, -5], scale: 2.2, color: COLORS.terracotta, speed: 0.55 },
      { pos: [-7, -4, -8], scale: 1.4, color: COLORS.sageLight, speed: 0.35 },
      { pos: [8, 5, -7], scale: 1.6, color: COLORS.terracottaGlow, speed: 0.45 },
    ],
    []
  );

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={0.15} floatIntensity={0.35}>
          <mesh position={orb.pos} scale={orb.scale}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={0.35}
              transparent
              opacity={0.12}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function EnergyRings() {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2;
      ring1.current.rotation.z = t * 0.12;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 2.3;
      ring2.current.rotation.z = -t * 0.08;
    }
  });

  return (
    <group position={[0, 0, -10]}>
      <mesh ref={ring1}>
        <torusGeometry args={[12, 0.02, 8, 128]} />
        <meshBasicMaterial color={COLORS.sageLight} transparent opacity={0.18} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[9, 0.015, 8, 96]} />
        <meshBasicMaterial color={COLORS.terracotta} transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#0b110e']} />
      <fog attach="fog" args={['#0b110e', 14, 32]} />
      <ambientLight intensity={0.25} color={COLORS.cream} />
      <pointLight position={[6, 4, 4]} intensity={0.6} color={COLORS.terracottaGlow} />
      <pointLight position={[-6, -2, 2]} intensity={0.4} color={COLORS.sageLight} />
      <EnergyRings />
      <AmbientParticles count={48} />
      <FloatingOrbs />
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

export default function HeroAmbient3D() {
  const [enabled, setEnabled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const saveData = navigator.connection?.saveData;
    setEnabled(!reducedMotion && !isMobile && !saveData);
  }, [reducedMotion]);

  if (!enabled) {
    return (
      <div className="hero-ambient-fallback" aria-hidden="true">
        <div className="hero-ambient-glow hero-ambient-glow--sage" />
        <div className="hero-ambient-glow hero-ambient-glow--terra" />
      </div>
    );
  }

  return (
    <div className="hero-ambient-canvas" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0, 14], fov: 50 }}
          style={{ pointerEvents: 'none' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
