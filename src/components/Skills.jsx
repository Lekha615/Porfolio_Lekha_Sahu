import React from 'react';
import { Terminal, Shield, Cpu, Layers } from 'lucide-react';

export default function Skills() {
  const categories = [
    { title: "Languages", icon: Terminal, items: [["Python", "Expert"], ["C++", "Advanced"], ["C", "Intermediate"], ["Java", "Basic"]] },
    { title: "AI & Computer Vision", icon: Shield, items: [["OpenCV", "Deep"], ["YOLO (v8/v11)", "Edge Deployment"], ["TensorFlow", "Inference"], ["Scikit-Learn", "ML Pipelines"]] },
    { title: "Robotics & IoT", icon: Cpu, items: [["ROS2 Humble", "Nodes / Graph"], ["ESP32 Arch", "FreeRTOS / WiFi"], ["Arduino Dev", "Prototyping"], ["Firmware", "Low-Latency C++"]] },
    { title: "Tools & OS", icon: Layers, items: [["Linux Ubuntu", "Primary OS"], ["Git / GitHub", "CI/CD Flow"], ["RViz & MoveIt2", "Visualization"], ["Flutter", "Control Interfaces"]] }
  ];

  return (
    <section id="skills" className="py-24 bg-[#090d16] border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:text-left">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">02 // Technical Core</span>
          <h2 className="text-3xl font-bold text-white mt-2">Capabilities Matrix</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800/60 p-6 rounded-lg backdrop-blur">
              <div className="flex items-center space-x-3 text-cyan-400 mb-4">
                <cat.icon className="w-5 h-5" />
                <h3 className="font-mono font-bold text-sm tracking-wide uppercase text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                {cat.items.map(([name, level]) => (
                  <li key={name} className="flex justify-between border-b border-slate-800/40 pb-1 last:border-0">
                    <span>{name}</span><span className="text-cyan-500/80">{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}