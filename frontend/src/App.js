import React from "react";
import "@/App.css";
import HeroSection from "@/sections/HeroSection";
import MarqueeSection from "@/sections/MarqueeSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";

function App() {
  return (
    <div style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
