"use client"
import Navbar from './components/layouts/navbar';
import Hero  from './components/layouts/hero';
import Skills from './components/layouts/skills';
import Projects from './components/layouts/projects';
import Achievements from './components/layouts/achievements';
import Contact from './components/layouts/contacts';
import Footer from './components/layouts/footer';
 
export default function Home() {
  return (
    <div className="bg-slate-900 text-gray-300 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects/>
      <Achievements /> 
      <Contact/>
      <Footer />
    </div>
  );
}