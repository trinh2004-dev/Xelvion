import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProofSection } from "./components/ProofSection";
import { VideoShowcase } from "./components/VideoShowcase";
import { AiIntegrationSection } from "./components/AiIntegrationSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <ProofSection />
        <VideoShowcase />
        <AiIntegrationSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
