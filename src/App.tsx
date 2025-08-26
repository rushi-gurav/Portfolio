import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code, Lightbulb, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingShape from './components/3d/FloatingShape';
import ProjectShowcase from './components/3d/ProjectShowcase';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/rushi-gurav" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rushikesh-gurav-code/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rishigurav143@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Rushikesh Gurav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;