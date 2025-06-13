import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarApp from './components/NavbarApp';
import HeroSection from './components/HeroSection';
import IconSlider from './components/IconSlider';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { useEffect } from 'react';
import AOS from 'aos';

import './app.css'
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Only animate once
    });
  }, []);
  
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <IconSlider />
              <Footer/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/button" element={<NaVbtn />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
