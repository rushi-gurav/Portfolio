import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingShape from './3d/FloatingShape';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <FloatingShape />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Rushikesh Gurav
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              'FullStack developer based in INDIA.',
              1000,
              'UI/UX Designer',
              1000,
              'AI Developer',
              1000,
              'AI Prompt Engineer',
              1000,
              'Automation Enthusiast',
              1000,
              'MCP Builder',
              1000
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-gray-300 mb-8"
            repeat={Infinity}
          />
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              View My Work
            </button>
            <a
              href="https://drive.google.com/file/d/1_NfY_11nxAac3d1SIm43HtDCpDWQhoWs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              View My Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;