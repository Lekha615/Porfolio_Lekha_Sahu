import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export default function Navbar({ scrollTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['home', 'about', 'skills', 'projects', 'research', 'experience', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <Terminal className="w-6 h-6 text-cyan-400" />
          <span className="font-mono font-bold text-lg tracking-wider text-white">LEKHA.<span className="text-cyan-400">EXE</span></span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-mono text-xs uppercase tracking-wider">
          {links.map((sec) => (
            <button key={sec} onClick={() => scrollTo(sec)} className="text-gray-400 hover:text-cyan-400 transition-colors">
              {sec}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0d1527] border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 font-mono text-sm uppercase">
          {links.map((sec) => (
            <button key={sec} onClick={() => { scrollTo(sec); setIsOpen(false); }} className="block w-full text-left py-2 text-gray-400 hover:text-cyan-400">
              {sec}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}