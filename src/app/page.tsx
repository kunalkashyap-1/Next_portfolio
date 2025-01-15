"use client";

import About from "@/components/about";
import ContactForm from "@/components/contactForm";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ParallaxWrapper from "@/components/prallaxWrapper";
import Projects from "@/components/projects";
import VantaBackground from "@/components/vanta_bg";

export default function Home() {
  return (
    <main>
      <VantaBackground>
        <ParallaxWrapper>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <ContactForm/>
        </ParallaxWrapper>
      </VantaBackground>
    </main>
  );
}
