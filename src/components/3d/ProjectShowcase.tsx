import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectShowcaseProps {
  projectIndex: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projectIndex }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  // Different 3D models for each project
  const renderModel = () => {
    switch (projectIndex) {
      case 0:
        return (
          <>
            <Box args={[1, 1, 1]} position={[0, 0, 0]}>
              <meshStandardMaterial
                color="#8b5cf6"
                metalness={0.8}
                roughness={0.2}
              />
            </Box>
            {Array.from({ length: 8 }).map((_, i) => (
              <Box
                key={i}
                args={[0.2, 0.2, 0.2]}
                position={[
                  Math.cos(i / 8 * Math.PI * 2) * 1.5,
                  Math.sin(i / 8 * Math.PI * 2) * 1.5,
                  0
                ]}
              >
                <meshStandardMaterial
                  color="#3b82f6"
                  metalness={0.8}
                  roughness={0.2}
                />
              </Box>
            ))}
          </>
        );
      case 1:
        return (
          <>
            <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
              <meshStandardMaterial
                color="#3b82f6"
                metalness={0.8}
                roughness={0.2}
                wireframe
              />
            </Sphere>
            {Array.from({ length: 12 }).map((_, i) => (
              <Sphere
                key={i}
                args={[0.1, 16, 16]}
                position={[
                  Math.cos(i / 12 * Math.PI * 2) * 1.5,
                  Math.sin(i / 12 * Math.PI * 2) * 1.5,
                  0
                ]}
              >
                <meshStandardMaterial
                  color="#8b5cf6"
                  emissive="#8b5cf6"
                  emissiveIntensity={0.5}
                />
              </Sphere>
            ))}
          </>
        );
      case 2:
        return (
          <>
            <Torus args={[1, 0.4, 16, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial
                color="#8b5cf6"
                metalness={0.8}
                roughness={0.2}
              />
            </Torus>
            <Box args={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
              <meshStandardMaterial
                color="#3b82f6"
                metalness={0.8}
                roughness={0.2}
              />
            </Box>
          </>
        );
      default:
        return (
          <Box args={[1, 1, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8b5cf6" />
          </Box>
        );
    }
  };

  return (
    <group ref={groupRef}>
      {renderModel()}
    </group>
  );
};

export default ProjectShowcase;