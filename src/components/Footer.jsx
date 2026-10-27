import React from 'react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tighter">MT.</h2>
          <p className="text-sm">Building scalable solutions in Addis Ababa.</p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/maste1992" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mastewal-yitie-981480314" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
            <FaLinkedinIn />
          </a>
          <a href="https://t.me/Mastewal_Tesfaye" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
            <FaTelegramPlane />
          </a>
        </div>

        <div className="text-center md:text-right text-sm">
          <p>© {new Date().getFullYear()} Mastewal Tesfaye.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}