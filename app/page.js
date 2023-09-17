"use client"
import "./globals.css";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <AnimatePresence>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
        <Footer />
      </AnimatePresence>
    </main>
  );
}
