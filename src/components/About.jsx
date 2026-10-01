import React from 'react';
import { 
  Code, 
  Eye, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function About() {
  const highlights = [
    { 
      title: "ROBOTICS FRAMEWORK", 
      desc: "ROS2 (Humble), Microcontrollers" 
    },
    { 
      title: "VISION LABS", 
      desc: "OpenCV, YOLO Architectures" 
    },
    { 
      title: "APPLICATIONS", 
      desc: "Defense & Surveillance Tech" 
    },
    { 
      title: "MOBILE CONTROLS", 
      desc: "Flutter & Firebase Stack" 
    }
  ];

  const skillMatrix = [
    {
      category: "LANGUAGES",
      icon: Code,
      skills: [
        { name: "Python", level: "Expert" },
        { name: "C++", level: "Advanced" },
        { name: "JavaScript", level: "Fullstack" },
        { name: "Dart", level: "Mobile GUI" }
      ]
    },
    {
      category: "AI & COMPUTER VISION",
      icon: Eye,
      skills: [
        { name: "OpenCV", level: "Deep" },
        { name: "YOLO (v8/v11)", level: "Edge Deployment" },
        { name: "TensorFlow", level: "Inference" },
        { name: "Scikit-Learn", level: "ML Pipelines" }
      ]
    },
    {
      category: "ROBOTICS & IOT",
      icon: Cpu,
      skills: [
        { name: "ROS2 Humble", level: "Nodes / Graph" },
        { name: "ESP32 Arch", level: "FreeRTOS / WiFi" },
        { name: "Arduino Dev", level: "Prototyping" },
        { name: "Firmware", level: "Low-Latency C++" }
      ]
    },
    {
      category: "TOOLS & OS",
      icon: Layers,
      skills: [
        { name: "Linux Ubuntu", level: "Primary OS" },
        { name: "Git / GitHub", level: "CI/CD Flow" },
        { name: "RViz & MoveIt2", level: "Visualization" },
        { name: "Flutter", level: "Control Interfaces" }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F2F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= ABOUT ME ================= */}
        <div className="mb-20">
          <div className="mb-6">
            <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase font-semibold">
              01 // PROFILE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-800 mt-2">
              About Me
            </h2>
            <div className="w-12 h-1 bg-[#587B6D] rounded mt-2" />
          </div>

          {/* Exact Paragraphs from Screenshot */}
          <div className="max-w-3xl space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-sans mb-10">
            <p>
              I am a Computer Science and Engineering (CSE) student with a strong interest in robotics, artificial intelligence, and autonomous systems. My work combines software development with robotics technologies, focusing on ROS2, computer vision, and intelligent robotic applications.
            </p>
            <p>
              A strong interest in developing practical robotic and AI-driven systems has shaped an academic focus on intelligent automation and real-world problem solving. Core interests include autonomous robotics, intelligent surveillance systems, computer vision, and AI-powered decision-making for real-time robotic applications.
            </p>
          </div>

          {/* 4 Feature Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#E8EFEA] border border-[#D2DDD6] p-5 rounded-xl shadow-xs hover:border-[#587B6D]/50 transition-all"
              >
                <span className="text-[11px] font-mono text-[#4A6B5D] uppercase tracking-wider block mb-2 font-semibold">
                  {item.title}
                </span>
                <p className="text-stone-800 font-medium text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CAPABILITIES MATRIX ================= */}
        <div className="pt-10 border-t border-[#D9E3DC]">
          <div className="mb-10">
            <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase font-semibold">
              02 // TECHNICAL CORE
            </span>
            <h2 className="text-3xl font-serif font-normal text-stone-800 mt-2">
              Capabilities Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillMatrix.map((matrix, idx) => {
              const Icon = matrix.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#E8EFEA] border border-[#D2DDD6] p-6 rounded-xl hover:border-[#587B6D]/60 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-2 text-stone-800 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-[#D8E2DB]">
                      <Icon className="w-4 h-4 text-[#C86D51]" />
                      <span className="font-bold">{matrix.category}</span>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-4">
                      {matrix.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center text-sm">
                          <span className="text-stone-700 font-sans font-medium">{skill.name}</span>
                          <span className="text-xs font-mono text-[#4A6B5D] bg-[#DBE4DE] px-2.5 py-0.5 rounded font-semibold">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}