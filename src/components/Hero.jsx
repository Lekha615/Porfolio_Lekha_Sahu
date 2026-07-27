import React from 'react';
import { Cpu, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6'; // Real GitHub and LinkedIn brand icons

export default function Hero({ scrollTo = () => {} }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.07),transparent_50%)]" />
      <div className="max-w-4xl text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
          <Cpu className="w-3.5 h-3.5 animate-spin" />
          <span>BUILDING INTELLIGENT SYSTEMS</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          Lekha Sahu
        </h1>
        
        <p className="text-lg sm:text-2xl font-mono text-cyan-400/90 mb-6">
          Computer Science Engineering Student
        </p>
        
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Building intelligent robotic systems, computer vision pipelines, and defense-focused autonomous configurations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => scrollTo('projects')} className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono font-bold px-6 py-3 rounded text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/10 cursor-pointer">
            Explore Deployments
          </button>
          <button onClick={() => scrollTo('contact')} className="border border-slate-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-mono px-6 py-3 rounded text-sm tracking-wide bg-slate-900/40 transition-all cursor-pointer">
            Initialize Comms
          </button>
        </div>

        {/* UPDATED SOCIAL LINKS */}
        <div className="flex justify-center space-x-6 mt-12 text-gray-500">
          <a href="https://github.com/Lekha615" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1" title="GitHub Profile">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/lekha-sahu-5b2055302?" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors p-1" title="LinkedIn Profile">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:lekhsahu615@gmail.com" className="hover:text-cyan-400 transition-colors p-1" title="Email Direct">
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}