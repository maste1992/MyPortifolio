import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
      <h1 className="text-3xl font-extrabold text-blue-600 tracking-tighter">MT.</h1>
      <ul className="hidden md:flex items-center space-x-8 font-semibold text-slate-600">
        <li className="cursor-pointer hover:text-blue-600 transition-colors"><a href="/">Home</a></li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors"><a href="/about">About</a></li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors"><a href="/skills">Skills</a></li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors"><a href="/projects">Projects</a></li>
        <li>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}