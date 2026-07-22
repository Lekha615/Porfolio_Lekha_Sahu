import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">01 // Profile</span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-2 mb-4">About Me</h2>
          <div className="w-12 h-1 bg-cyan-500 rounded" />
        </div>
        <div className="lg:col-span-2 space-y-6 text-gray-400 leading-relaxed text-base sm:text-lg">
          <p>
            I am a Computer Science and Engineering (CSE) student with a strong interest in robotics, artificial intelligence, and autonomous systems. My work combines software development with robotics technologies, focusing on ROS2, computer vision, and intelligent robotic applications.
          </p>
          <p>
            A strong interest in developing practical robotic and AI-driven systems has shaped an academic focus on intelligent automation and real-world problem solving. Core interests include autonomous robotics, intelligent surveillance systems, computer vision, and AI-powered decision-making for real-time robotic applications.

          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-slate-300">
            <div className="p-3 bg-slate-900/40 rounded border border-slate-800/60"><span className="text-cyan-400 font-bold block mb-1">ROBOTICS FRAMEWORK</span> ROS2 (Humble), Microcontrollers</div>
            <div className="p-3 bg-slate-900/40 rounded border border-slate-800/60"><span className="text-cyan-400 font-bold block mb-1">VISION LABS</span> OpenCV, YOLO Architectures</div>
            <div className="p-3 bg-slate-900/40 rounded border border-slate-800/60"><span className="text-cyan-400 font-bold block mb-1">APPLICATIONS</span> Defense & Surveillance Tech</div>
            <div className="p-3 bg-slate-900/40 rounded border border-slate-800/60"><span className="text-cyan-400 font-bold block mb-1">MOBILE CONTROLS</span> Flutter & Firebase Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}