import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import VantaBackground from "@/components/vanta_bg";

export default function Home() {
  return (
    <main>
      <VantaBackground>
      <Navbar/>
        <Hero/>
      <About/>
      </VantaBackground>
    </main>
  );
}
