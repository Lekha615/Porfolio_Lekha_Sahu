import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  const deployments = [
    { 
      title: "ROS2 Robotic Arm Platform", 
      tag: "ROS2 Architecture", 
      text: "Designed a functional 4-DOF manipulator simulated in RViz and controlled natively via custom ROS2 publishers/subscribers. Implemented basic forward kinematics trajectories.", 
      tech: ["C++", "ROS2 Humble", "RViz", "URDF"],
      repo: "https://github.com/Lekha615/3-dof-Robotic-ARM"
    },
    { 
      title: "MindGuard-AI", 
      tag: "Predictive AI", 
      text: "A machine learning web application built to address early-stage mental health challenges like stress, anxiety, and depression. By evaluating lifestyle factors and demographic data, MindGuard-AI predicts personal risk scores and immediately generates tailored wellness intervention plans.", 
      tech: ["Python", "Scikit-learn", "Flask", "JavaScript", "Kaggle-Dataset"],
      repo: "https://github.com/Lekha615/AI-Based-Mental-Health-Risk-Prediction-and-Personalized-Wellness-Recommendation-System"
    },
    { 
      title: "ESP32 Tactical Surveillance Rover", 
      tag: "IoT & Embedded", 
      text: "Developed a continuous-track micro-vehicle running custom control firmware written in C++. Integrates real-time WiFi video telemetry streaming payloads.", 
      tech: ["C++", "ESP32", "FreeRTOS", "WebSockets"],
      repo: "https://github.com/Lekha615/ESP_SURVEILLANCE_CAR"
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FBFBF9]">
      {/* Section Header */}
      <div className="mb-16 text-center sm:text-left">
        <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase flex items-center gap-1.5 sm:justify-start justify-center">
          <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" /> 03 // Engineering Deployments
        </span>
        <h2 className="text-3xl font-serif font-normal text-stone-800 mt-2">Functional Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deployments.map((p, i) => (
          <div 
            key={i} 
            className="group bg-[#F4F3EE] border border-[#E5E3DC] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#587B6D]/60 hover:shadow-lg transition-all"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[11px] font-mono text-[#4A6B5D] bg-[#E8E6DF] border border-[#DBD7CE] px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wider">
                  {p.tag}
                </span>
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-stone-400 hover:text-[#587B6D] transition-colors p-1"
                  title="View Source Repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-2 group-hover:text-[#587B6D] transition-colors font-sans">
                {p.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {p.text}
              </p>
            </div>

            {/* Tech Tags Footer */}
            <div className="px-6 pb-6 pt-3 border-t border-[#EAE7DF] font-mono text-xs text-stone-500 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="bg-[#EBE8E0] text-stone-600 px-2.5 py-0.5 rounded text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}