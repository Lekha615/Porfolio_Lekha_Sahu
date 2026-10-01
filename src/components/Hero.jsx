import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Hero({ scrollTo = () => {} }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden px-4 bg-[#FBFBF9]">
      {/* Soft warm sun glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,195,178,0.35),transparent_65%)] pointer-events-none" />
      
      <div className="max-w-4xl text-center z-10">
        
        {/* Subtle Warm Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#EBE7DF] border border-[#DDD7CC] px-4 py-1.5 rounded-full text-[#4E6E5D] font-mono text-xs tracking-wider uppercase mb-8 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
          <span>Intelligent Systems & Applied Engineering</span>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-stone-800 mb-4 font-normal">
          Lekha Sahu
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-mono text-[#587B6D] mb-6">
          Computer Science Engineering Student
        </p>
        
        {/* Bio */}
        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Building thoughtful robotic architectures, preventive AI systems, and practical hardware innovations designed for human well-being.
        </p>
        
        {/* Natural Toned Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollTo('projects')} 
            className="bg-[#587B6D] hover:bg-[#48665A] text-white font-medium px-6 py-3 rounded-lg text-sm tracking-wide transition-all shadow-md shadow-[#587B6D]/15 cursor-pointer"
          >
            Explore Projects
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="border border-[#DDD7CC] bg-[#F4F3EE] hover:bg-[#ECE9E1] text-stone-700 hover:text-stone-900 font-medium px-6 py-3 rounded-lg text-sm tracking-wide transition-all cursor-pointer shadow-2xs"
          >
            Get In Touch
          </button>
        </div>

        {/* Clean, Grounded Social Links */}
        <div className="flex justify-center space-x-6 mt-12 text-stone-500">
          <a 
            href="https://github.com/Lekha615" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-full bg-[#F4F3EE] border border-[#E5E3DC] hover:text-[#587B6D] hover:border-[#587B6D]/40 transition-all hover:scale-105"
            title="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lekha-sahu-5b2055302?" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-full bg-[#F4F3EE] border border-[#E5E3DC] hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all hover:scale-105"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:lekhsahu615@gmail.com" 
            className="p-2.5 rounded-full bg-[#F4F3EE] border border-[#E5E3DC] hover:text-[#C86D51] hover:border-[#C86D51]/40 transition-all hover:scale-105"
            title="Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}