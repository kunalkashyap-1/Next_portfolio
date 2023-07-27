"use client";
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import withAnimation from "../components/aosWrapper";

function Index() {
  return (
    <main>
      <NavBar />
      <div className="section">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

export default withAnimation(Index);
