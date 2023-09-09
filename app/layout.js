import "./globals.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Showcase from "./components/Showcase";
import Contacts from "./components/Contact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi! I'm Brian",
  description:
    "Brian Cordisco web developer, front-end, back-end, website builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Showcase />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
