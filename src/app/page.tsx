"use client";

import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ParallaxWrapper from "@/components/prallaxWrapper";
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
        </ParallaxWrapper>
      </VantaBackground>
    </main>
  );
}
