import React from 'react';
import { motion } from 'framer-motion';
// አይከኖች ከ react-icons
import { FaLaptopCode, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiPython, SiMongodb, SiPostgresql, SiMysql, SiLinux, SiTelegram } from 'react-icons/si';

export default function Skills() {
  // ክህሎቶችን በየክፍሉ (Categories) ማደራጀት
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
      skills: [
        { name: "React.js", logo: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", logo: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", logo: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "JavaScript", logo: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", logo: <SiTypescript className="text-[#3178C6]" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-purple-500 text-3xl" />,
      skills: [
        { name: "Node.js", logo: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", logo: <SiExpress className="text-gray-600" /> },
        { name: "Python", logo: <SiPython className="text-[#3776AB]" /> }
      ]
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase className="text-green-500 text-3xl" />,
      skills: [
        { name: "MongoDB", logo: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", logo: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MySQL", logo: <SiMysql className="text-[#4479A1]" /> }
      ]
    },
    {
      title: "ERP, Tools & Others",
      icon: <FaCogs className="text-orange-500 text-3xl" />,
      skills: [
        { name: "Frappe Framework", logo: <FaCogs className="text-blue-600" /> },
        { name: "ERPNext", logo: <FaCogs className="text-blue-800" /> },
        { name: "Telegram Bot API", logo: <SiTelegram className="text-[#26A5E4]" /> },
        { name: "Linux / Ubuntu", logo: <SiLinux className="text-black" /> }
      ]
    }
  ];

  // የ Framer Motion አኒሜሽን ህጎች
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 px-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here is a categorized overview of my technical expertise, frameworks, and tools I use to build robust solutions.
          </p>
        </div>

        {/* ካርዶቹን (Categories) የሚይዘው ዋና ክፍል */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              {/* በእያንዳንዱ ካርድ ውስጥ ያሉት የፕሮግራሚንግ ቋንቋዎች */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-default group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {skill.logo}
                    </span>
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}