import "./globals.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import Contact from "./components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi! I'm Brian",
  description:
    "Brian Cordisco web developer, front-end, back-end, website builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
        {children}
      </body>
      <Footer />
    </html>
  );
}
