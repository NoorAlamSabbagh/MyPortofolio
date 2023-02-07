import React from 'react';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactBanner />
    </div>
  );
}
