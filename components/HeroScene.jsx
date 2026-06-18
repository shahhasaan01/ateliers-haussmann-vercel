'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, Environment, useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Color palette - sophisticated earth tones
const PALETTE = {
  forest: '#1a2f1f',
  forestLight: '#2d4a35',
  terracotta: '#c45c3d',
  terracottaGlow: '#e07a5f',
  cream: '#f5f0e8',
  warmWhite: '#faf8f5',
  stone: '#8b7355',
  copper: '#b87333',
  night: '#0d1612',
  gold: '#d4a574'
};

// Animated heat particles flowing from house
function EnergyFlow({ count = 40 }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 6,
          Math.random() * 4 + 1,
          (Math.random() - 0.5) * 4
        ],
        speed: 0.01 + Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2,
        scale: 0.3 + Math.random() * 0.4
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    
    particles.forEach((particle, i) => {
      const idx = i * 3;
      mesh.current.instanceMatrix.array[idx + 13] = particle.position[1] + Math.sin(time * particle.speed + particle.offset) * 0.5;
      
      // Gentle floating motion
      mesh.current.instanceMatrix.array[idx + 12] = particle.position[0] + Math.cos(time * 0.3 + particle.offset) * 0.2;
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh 
      ref={mesh} 
      args={[null, null, count]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial 
        color={PALETTE.terracottaGlow} 
        emissive={PALETTE.terracotta}
        emissiveIntensity={hovered ? 2 : 1}
        toneMapped={false}
      />
      {particles.map((p, i) => (
        <group key={i} position={p.position}>
          <mesh scale={p.scale} />
        </group>
      ))}
    </instancedMesh>
  );
}

// Stylized house with energy visualization
function HouseModel() {
  const houseRef = useRef();
  const insulationRef = useRef();
  const heatPumpRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Subtle breathing animation for insulation
    if (insulationRef.current) {
      insulationRef.current.material.emissiveIntensity = 0.3 + Math.sin(t * 0.8) * 0.2;
    }
    
    // Heat pump fan rotation
    if (heatPumpRef.current) {
      heatPumpRef.current.rotation.y = t * 2;
    }
    
    // Gentle house float
    if (houseRef.current) {
      houseRef.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
  });

  return (
    <group ref={houseRef}>
      {/* Main house body */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 2.4, 2.8]} />
        <meshStandardMaterial 
          color={PALETTE.cream} 
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Insulation layer - glowing */}
      <mesh ref={insulationRef} position={[0, 1.2, 1.41]}>
        <boxGeometry args={[3.3, 2.2, 0.05]} />
        <meshStandardMaterial 
          color={PALETTE.terracottaGlow}
          emissive={PALETTE.terracotta}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.9, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[2.8, 1.2, 4]} />
        <meshStandardMaterial 
          color={PALETTE.forest} 
          roughness={0.8}
        />
      </mesh>
      
      {/* Modern windows */}
      {[[-0.8, 1.2, 1.41], [0.8, 1.2, 1.41], [-0.8, 2, 1.41]].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh>
            <boxGeometry args={[0.6, 0.6, 0.08]} />
            <meshPhysicalMaterial 
              color="#87ceeb"
              metalness={0.1}
              roughness={0.05}
              transmission={0.9}
              thickness={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
          {/* Window frame */}
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.65, 0.02, 0.05]} />
            <meshStandardMaterial color={PALETTE.forest} />
          </mesh>
          <mesh position={[0, 0, 0.02]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.65, 0.02, 0.05]} />
            <meshStandardMaterial color={PALETTE.forest} />
          </mesh>
        </group>
      ))}
      
      {/* Door */}
      <mesh position={[0, 0.6, 1.42]}>
        <boxGeometry args={[0.7, 1.2, 0.06]} />
        <meshStandardMaterial color={PALETTE.forestLight} roughness={0.7} />
      </mesh>
      
      {/* Modern Heat Pump Unit */}
      <group position={[2.2, 0.4, 0.5]}>
        {/* Main body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.6, 0.8]} />
          <meshStandardMaterial 
            color={PALETTE.warmWhite} 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
        
        {/* Ventilation grille */}
        <mesh position={[0, 0.2, 0.41]}>
          <cylinderGeometry args={[0.35, 0.35, 0.05, 32]} />
          <meshStandardMaterial color="#333" metalness={0.5} />
        </mesh>
        
        {/* Spinning fan */}
        <group ref={heatPumpRef} position={[0, 0.2, 0.44]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh key={i} rotation={[0, 0, (Math.PI / 2) * i]}>
              <boxGeometry args={[0.5, 0.04, 0.02]} />
              <meshStandardMaterial color="#666" metalness={0.6} />
            </mesh>
          ))}
        </group>
        
        {/* Status light */}
        <mesh position={[0.4, 0.65, 0.41]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial 
            color="#4ade80" 
            emissive="#4ade80"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        
        {/* Connection pipes */}
        <mesh position={[-0.5, 0, -0.2]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.6, 12]} />
          <meshStandardMaterial color={PALETTE.copper} metalness={0.6} />
        </mesh>
      </group>
      
      {/* Foundation/base */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[4, 0.2, 3.2]} />
        <meshStandardMaterial color={PALETTE.stone} roughness={0.95} />
      </mesh>
      
      {/* Solar panels on roof */}
      <mesh position={[-0.5, 3.35, 0]} rotation={[0, Math.PI / 4, -0.1]} castShadow>
        <boxGeometry args={[1.2, 0.04, 0.8]} />
        <meshStandardMaterial 
          color="#1a2332" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// Ambient floating elements
function FloatingElements() {
  const group = useRef();
  
  const elements = useMemo(() => [
    { pos: [-4, 2, -2], scale: 0.3, color: PALETTE.terracotta, speed: 0.5 },
    { pos: [4, 3, -1], scale: 0.25, color: PALETTE.gold, speed: 0.7 },
    { pos: [-3, 4, 2], scale: 0.2, color: PALETTE.copper, speed: 0.4 },
    { pos: [3.5, 1.5, 1], scale: 0.35, color: PALETTE.terracottaGlow, speed: 0.6 },
  ], []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    
    group.current.children.forEach((child, i) => {
      child.position.y = elements[i].pos[1] + Math.sin(t * elements[i].speed + i) * 0.3;
      child.rotation.x = t * 0.1 + i;
      child.rotation.y = t * 0.15 + i;
    });
  });

  return (
    <group ref={group}>
      {elements.map((el, i) => (
        <mesh key={i} position={el.pos} scale={el.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color={el.color}
            emissive={el.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Circular floor with subtle pattern
function Floor() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.21, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial 
          color={PALETTE.night}
          roughness={1}
          metalness={0}
        />
      </mesh>
      {/* Subtle ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}>
        <ringGeometry args={[5, 5.1, 64]} />
        <meshBasicMaterial color={PALETTE.terracotta} transparent opacity={0.2} />
      </mesh>
    </>
  );
}

// Camera controller for cinematic movement
function CameraController() {
  const { camera } = useThree();
  const scroll = useScroll();
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.3;
    
    // Gentle orbit
    camera.position.x = Math.sin(t) * 1 + 0;
    camera.position.y = 2 + Math.sin(t * 0.5) * 0.3;
    camera.position.z = 8 + Math.cos(t * 0.3) * 0.5;
    
    camera.lookAt(0, 1.5, 0);
  });
  
  return null;
}

// Main scene composition
function Scene() {
  return (
    <>
      <color attach="background" args={[PALETTE.night]} />
      <fog attach="fog" args={[PALETTE.night, 8, 25]} />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.4} color={PALETTE.cream} />
      
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color={PALETTE.warmWhite}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      
      {/* Rim light for drama */}
      <spotLight
        position={[-5, 5, -5]}
        intensity={0.8}
        color={PALETTE.terracottaGlow}
        angle={Math.PI / 4}
        penumbra={0.5}
        distance={20}
      />
      
      {/* Fill light from below */}
      <pointLight
        position={[0, -2, 2]}
        intensity={0.3}
        color={PALETTE.terracotta}
        distance={10}
      />
      
      <CameraController />
      
      <Float
        speed={0.5}
        rotationIntensity={0.1}
        floatIntensity={0.2}
        floatingRange={[-0.1, 0.1]}
      >
        <HouseModel />
      </Float>
      
      <EnergyFlow count={30} />
      <FloatingElements />
      <Floor />
      
      <ContactShadows 
        position={[0, -0.19, 0]} 
        opacity={0.4} 
        scale={15} 
        blur={2.5} 
        far={6}
      />
      
      <Environment preset="night" />
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: PALETTE.night,
      color: PALETTE.cream
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: 40, 
          height: 40, 
          border: `2px solid ${PALETTE.terracotta}`, 
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }} />
        <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>Chargement...</p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: PALETTE.night }}>
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2
          }}
          camera={{ position: [0, 2, 8], fov: 45 }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
