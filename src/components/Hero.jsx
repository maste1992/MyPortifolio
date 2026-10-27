import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';

export default function Hero() {
  const roles = [
    "Full-Stack Software Engineer",
    "Frappe / ERPNext Developer",
    "Telegram Bot Developer"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden relative">
      
      <div className="flex-1 text-center md:text-left max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full z-10">
        
        {/* የግራ ክፍል - ፅሁፎች እና በተኖች */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-slate-800 leading-tight">
            <motion.span 
              className="block text-xl md:text-2xl text-blue-600 mb-2 font-semibold tracking-wide uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to my portfolio
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm
            </motion.span>
            
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2 pb-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mastewal Tesfaye
            </motion.span>
          </h2>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* ፊደል በፊደል የሚፃፍበት ክፍል */}
            <div className="h-10 md:h-12 overflow-hidden relative mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-2xl md:text-3xl font-extrabold text-slate-700 absolute w-full md:text-left text-center flex justify-center md:justify-start"
                >
                  {roles[currentRole].split("").map((char, index) => (
                    <motion.span key={index} variants={charVariants} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mx-auto md:mx-0">
              I specialize in building scalable enterprise solutions, automating workflows, and crafting modern web applications. Let's build something amazing together!
            </p>
          </motion.div>
          
          {/* ዋና ዋና በተኖች (View Work እና Download CV) */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/projects" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-200 flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            {/* የ CV ማውረጃ ሊንክ (CVህን public ፎልደር ውስጥ CV.pdf ብለህ ሴቭ ማድረግ አለብህ) */}
            <a href="/Mastewal TesfayeCV.pdf" download className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-full text-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
              Download CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </motion.div>

          {/* የማህበራዊ ሚዲያ (Social Media) ሊንኮች */}
          <motion.div 
            className="flex justify-center md:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* GitHub */}
            <a href="https://github.com/maste1992" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/mastewal-yitie-981480314" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* Telegram */}
            <a href="https://t.me/Mastewal_Tesfaye" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </motion.div>
        </div>

        {/* የቀኝ ክፍል - የፎቶ እና ተንሳፋፊ ባጅ (Floating Badge) */}
        <motion.div 
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* ተንሳፋፊ ባጅ (Experience) */}
          {/* <motion.div 
            className="absolute top-10 -left-6 md:-left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p className="font-extrabold text-slate-800 text-lg">ERP & Web</p>
              <p className="text-xs text-slate-500 font-medium">Expert Developer</p>
            </div>
          </motion.div> */}

          {/* ዋና የፎቶ ቦታ */}
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-100 to-purple-200 rounded-full border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center relative z-10">
            <span className="text-blue-500 font-medium text-lg">Your Photo Here</span>
            {/* ፎቶ ካለህ: <img src="/profile.jpg" alt="Mastewal" className="w-full h-full object-cover" /> */}
          </div>

          {/* ተንሳፋፊ ባጅ 2 (Projects) */}
          <motion.div 
            className="absolute bottom-10 -right-6 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div>
              <p className="font-extrabold text-slate-800 text-lg">29+</p>
              <p className="text-xs text-slate-500 font-medium">GitHub Repos</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}