import "./globals.css";
import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Showcase from "../components/Showcase";
import Contacts from "../components/Contact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}
