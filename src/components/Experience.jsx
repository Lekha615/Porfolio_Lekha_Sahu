import React from 'react';
import { Briefcase, Award, Shield, Palette } from 'lucide-react';

export default function Experience() {
  const leadershipRoles = [
    {
      title: "Coordinator — Robotics Club",
      organization: "Student Activity Club (SAC)",
      period: "Apr 2024 – 2025",
      icon: Briefcase,
      description: "Managing lab infrastructure setups, leading hands-on microcontroller flashing bootcamps, and orchestrating design challenges focused on autonomous algorithmic obstacle tracking."
    },
    {
      title: "Lance Corporal — NCC Volunteer",
      organization: "National Cadet Corps",
      period: "Oct 2023 – Feb 2026",
      icon: Shield,
      description: "Served as Lance Corporal. Attended key training camps including CATC-15 (Lakholi), CATC-132 (Rajnandgaon), and CATC-146 Pre-TSC Camp (Lakholi)."
    },
    {
      title: "Graphic Designer — SAC Newsletter",
      organization: "Student Activity Club (Newsletter Vol. 15)",
      period: "Vol. 15 Edition",
      icon: Palette,
      description: "Designed visual layouts, typography, and graphics for Volume 15 of the student organization's official newsletter publication."
    }
  ];

  const achievements = [
    {
      title: "Theme Winner — Hack-Arena National Level Hackathon",
      organization: "GNIT, Hyderabad",
      date: "Nov 21 – 23, 2024",
      mode: "Offline",
      description: "Secured top position in the national hackathon track competing against teams nationwide in system architecture and execution."
    },
    {
      title: "2nd Position — Agri-Tech Hackathon",
      organization: "K.J. Somaiya School of Engineering",
      mode: "Offline",
      description: "Awarded runner-up for engineering and prototyping innovative automation technology for agricultural challenges."
    },
    {
      title: "2nd Position — Speech Competition",
      organization: "Toastmasters – SSIPMT Raipur",
      date: "Oct 30, 2023",
      mode: "Offline",
      description: "Recognized for public speaking excellence and speech delivery at the Toastmasters campus platform."
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">05 // Leadership & Recognition</span>
        <h2 className="text-3xl font-bold text-white mt-2">Roles & Milestones</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Leadership & Positions */}
        <div>
          <h3 className="text-lg font-mono font-semibold text-cyan-400 mb-8 flex items-center gap-2 border-b border-slate-800 pb-3">
            <Briefcase className="w-5 h-5" /> Leadership & Responsibilities
          </h3>
          <div className="relative border-l-2 border-slate-800 pl-6 space-y-10 ml-3">
            {leadershipRoles.map((role, idx) => {
              const IconComponent = role.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1 bg-[#0b0f19] p-1 border-2 border-cyan-500 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-3 h-3" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {role.title}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono text-cyan-500/80 mb-2">
                    <span>{role.organization}</span>
                    <span className="text-slate-500">{role.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Achievements & Awards */}
        <div>
          <h3 className="text-lg font-mono font-semibold text-cyan-400 mb-8 flex items-center gap-2 border-b border-slate-800 pb-3">
            <Award className="w-5 h-5" /> Achievements & Honors
          </h3>
          <div className="relative border-l-2 border-slate-800 pl-6 space-y-10 ml-3">
            {achievements.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1 bg-[#0b0f19] p-1 border-2 border-slate-700 rounded-full text-slate-400 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all">
                  <Award className="w-3 h-3" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-cyan-500/80 mb-2">
                  <span>{item.organization}</span>
                  <span className="text-slate-500">{item.date}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-2">
                  {item.description}
                </p>
                <span className="inline-block text-[10px] font-mono uppercase bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded border border-slate-700/50">
                  {item.mode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}