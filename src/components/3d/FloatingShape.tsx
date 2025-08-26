import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <group>
      {/* Main shape */}
      <Icosahedron args={[1.5, 4]} ref={meshRef} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </Icosahedron>
      
      {/* Background particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}
          scale={Math.random() * 0.2 + 0.05}
        >
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
            emissive={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
            emissiveIntensity={0.5}
            roughness={0.5}
            metalness={1}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingShape;