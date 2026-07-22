import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const deployments = [
    { 
      title: "ROS2 Robotic Arm Platform", 
      tag: "ROS2 Architecture", 
      text: "Designed a functional 4-DOF manipulator simulated in RViz and controlled natively via custom ROS2 publishers/subscribers. Implemented basic forward kinematics trajectories.", 
      tech: ["C++", "ROS2 Humble", "RViz", "URDF"],
      repo: "https://github.com/Lekha615/3-dof-Robotic-ARM" // 👈 Add repo link here
    },
    { 
      title: "MindGuard-AI", 
      tag: "Predictive AI", // Changed tag from Computer Vision to Predictive AI to match the project
      text: "A machine learning web application built to address early-stage mental health challenges like stress, anxiety, and depression. By evaluating lifestyle factors and demographic data, MindGuard-AI predicts personal risk scores and immediately generates tailored wellness intervention plans.", 
      tech: ["Python", "Scikit-learn", "Flask", "JavaScript", "Kaggle-Dataset"],
      repo: "https://github.com/Lekha615/AI-Based-Mental-Health-Risk-Prediction-and-Personalized-Wellness-Recommendation-System" // 👈 Add repo link here
    },
    { 
      title: "ESP32 Tactical Surveillance Rover", 
      tag: "IoT & Embedded", 
      text: "Developed a continuous-track micro-vehicle running custom control firmware written in C++. Integrates real-time WiFi video telemetry streaming payloads.", 
      tech: ["C++", "ESP32", "FreeRTOS", "WebSockets"],
      repo: "https://github.com/Lekha615/ESP_SURVEILLANCE_CAR" // 👈 Add repo link here
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center sm:text-left">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">03 // Engineering Deployments</span>
        <h2 className="text-3xl font-bold text-white mt-2">Functional Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deployments.map((p, i) => (
          <div key={i} className="group bg-[#0e1626]/60 border border-slate-800/80 rounded-lg overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-900/60 px-2 py-0.5 rounded">{p.tag}</span>
                {/* 
                  Updated the href attribute below to use p.repo 
                */}
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                  title="View Source Repository"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.text}</p>
            </div>
            <div className="px-6 pb-6 pt-2 border-t border-slate-900 font-mono text-xs text-slate-400 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}