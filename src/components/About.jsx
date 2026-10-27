import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // አኒሜሽኑ ከስር ወደ ላይ ብቅ እንዲል የሚያደርግ ህግ
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-20 px-8 bg-white min-h-[90vh] flex justify-center items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        
        {/* የግራ ክፍል - ማራኪ ንድፍ (Visuals) */}
        <motion.div 
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-xl relative z-10 p-8 flex flex-col justify-center items-center text-center">
            <div className="text-7xl mb-6 animate-bounce">💻</div>
            <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Dedicated to</h3>
            <p className="text-xl text-blue-600 font-bold">Clean Code & Scalable Systems</p>
          </div>
          {/* ጀርባ ላይ ያሉት ቀለማት (Decorative background elements) */}
          <div className="absolute top-8 -right-8 w-full h-full bg-blue-600 rounded-3xl -z-10 opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-500 rounded-full blur-3xl -z-10 opacity-10"></div>
        </motion.div>

        {/* የቀኝ ክፍል - ዝርዝር መረጃዎች */}
        <div className="space-y-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a passionate Full-Stack Software Engineer and Frappe / ERPNext Developer. Currently, I work at <strong>Tibeb Technology</strong>, where I develop custom ERPNext scripts, dynamic business logic, and scalable web components using modern tools like Next.js and Tailwind CSS.
              </p>
              <p>
                I hold a Bachelor of Science degree in Software Engineering from <strong>Addis Ababa Science and Technology University</strong>, graduating with distinction. My academic journey laid a strong foundation for my technical expertise.
              </p>
              <p>
                Beyond ERP systems, I have extensive experience integrating the Telegram Bot API for automated solutions and building responsive web applications. My ultimate goal is to leverage technology to solve real-world enterprise challenges.
              </p>
            </div>
          </motion.div>

          {/* አጫጭር መረጃዎች (Quick Info Grid) */}
          <motion.div 
            className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Education</p>
              <p className="font-bold text-slate-800">BSc in Software Engineering</p>
              <p className="text-blue-600 text-sm font-semibold">AASTU (Distinction)</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Experience</p>
              <p className="font-bold text-slate-800">Full-Stack Developer</p>
              <p className="text-blue-600 text-sm font-semibold">Tibeb Technology</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
              <p className="font-bold text-slate-800">Addis Ababa</p>
              <p className="text-blue-600 text-sm font-semibold">Ethiopia</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Focus</p>
              <p className="font-bold text-slate-800">Enterprise Solutions</p>
              <p className="text-blue-600 text-sm font-semibold">& Custom Automation</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}