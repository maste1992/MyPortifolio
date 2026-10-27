import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// በቀጣይ እነዚህን ገፆች ስንሰራ የፊት ለፊቱን '//' እናጠፋዋለን
 import About from './components/About';
 import Skills from './components/Skills';
 import Projects from './components/Projects';
 import Contact from './components/Contact';
 import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Navbar በሁሉም ገፆች ላይ ሁልጊዜ ይታያል */}
        <Navbar />
        
        {/* እዚህ ውስጥ ያሉት ገፆች ደግሞ እንደየ ሊንኩ ይቀያየራሉ */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}