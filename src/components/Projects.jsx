import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  // የፕሮጀክቶችህ ዝርዝር
  const projects = [
    {
      title: "Full-Stack Tender Management System",
      description: "A comprehensive platform for managing procurement and construction tenders. Features include secure authentication, dynamic navigation, and seamless tender tracking.",
      tech: ["Next.js", "React.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/maste1992/Tender-Managments",
      live: "#"
    },
    {
      title: "Full-Stack Music Player",
      description: "A complete web-based music player with audio streaming, user authentication, and dynamic playlist management. Built with a responsive modern UI.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/maste1992",
      live: "#"
    },
    {
      title: "ERPNext Custom Workflows",
      description: "Custom HR, Stock, and Accounting modules for enterprise clients. Includes signature tracking logic, dynamic grid visibility, and automated notifications.",
      tech: ["Python", "Frappe", "JavaScript", "MariaDB"],
      github: "https://github.com/maste1992",
      live: "#"
    },
    {
      title: "Telegram Automation Bots",
      description: "Specialized Telegram bots for automated system alerts, file conversion, and OTP verification utilizing GeezSMS and Telegram Bot API.",
      tech: ["Python", "Telegram API", "Node.js"],
      github: "https://github.com/maste1992",
      live: "#"
    },
    {
      title: "Smart Office Construction Permit",
      description: "Proposed ግንባታ-Net system frontend layout and custom color themes using modern CSS frameworks for the Construction Permit Bureau.",
      tech: ["Next.js", "Tailwind CSS", "React"],
      github: "https://github.com/maste1992",
      live: "#"
    }
  ];

  // አኒሜሽን ህጎች
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 px-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4"
          >
            Featured <span className="text-blue-600">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Here are some of the key projects I've built, showcasing my expertise in Full-Stack development, ERP automation, and custom integrations.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-800 transition-colors">
                    <FaGithub className="text-2xl" />
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 text-lg mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1.5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}