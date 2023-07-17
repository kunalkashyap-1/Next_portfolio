import NavBar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import ContactForm from "../components/contactForm";
import SideBar from "../components/sideSocials";

export default function Home(){
  return<main>
    <NavBar />
    <div className="section">
    <Hero />
    <About />
    <Experience />
    <Projects />
    <ContactForm />
    </div>
    <SideBar />
  </main>
}