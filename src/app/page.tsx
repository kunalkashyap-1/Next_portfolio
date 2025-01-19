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
    <main className="max-w-[100dvw]">
      <ParallaxWrapper>
        <VantaBackground>
            <Navbar />
            <Hero />
        </VantaBackground>
        <div className="relative z-30 flex flex-col ">
        <About />
        <Experience />
        <Projects />
        <ContactForm />
        </div>
      </ParallaxWrapper>
    </main>
  );
}
