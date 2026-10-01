import React from 'react';
import { Briefcase, Award, Shield, Palette } from 'lucide-react';

export default function Experience() {
  const leadershipRoles = [
    {
      title: "Coordinator — Robotics Club",
      organization: "Student Activity Club (SAC)",
      period: "Apr 2025 – Present",
      icon: Briefcase,
      description: "Managing lab infrastructure setups, leading hands-on microcontroller bootcamps, and orchestrating design challenges focused on autonomous obstacle tracking."
    },
    {
      title: "Lance Corporal — NCC Volunteer",
      organization: "National Cadet Corps",
      period: "Oct 2023 – Feb 2026",
      icon: Shield,
      description: "Served as Lance Corporal. Participated in intensive field camps including CATC-15 (Lakholi), CATC-132 (Rajnandgaon), and CATC-146 Pre-TSC Camp (Lakholi)."
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
      title: "Theme Winner — Hack-Arena National Hackathon",
      organization: "GNIT, Hyderabad",
      date: "Nov 2024",
      description: "Secured top position in the national hackathon track competing against teams nationwide in system architecture."
    },
    {
      title: "2nd Position — Agri-Tech Hackathon",
      organization: "K.J. Somaiya School of Engineering",
      date: "March 2025",
      description: "Recognized for prototyping functional automation technology for agricultural challenges."
    },
    {
      title: "2nd Position — Speech Competition",
      organization: "Toastmasters – SSIPMT Raipur",
      date: "Oct 2023",
      description: "Awarded for public address and communication clarity on the campus Toastmasters circuit."
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FBFBF9]">
      <div className="mb-14 text-center">
        <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase">Trajectory</span>
        <h2 className="text-3xl font-serif font-normal text-stone-800 mt-2">Roles & Milestones</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Leadership */}
        <div>
          <h3 className="text-sm font-mono font-semibold text-[#587B6D] uppercase tracking-wider mb-8 flex items-center gap-2 border-b border-[#E5E3DC] pb-3">
            <Briefcase className="w-4 h-4 text-[#C86D51]" /> Leadership & Service
          </h3>
          <div className="relative border-l-2 border-[#E0DCD2] pl-6 space-y-10 ml-3">
            {leadershipRoles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 bg-[#FBFBF9] p-1.5 border-2 border-[#587B6D] rounded-full text-[#587B6D]">
                    <Icon className="w-3 h-3" />
                  </div>
                  <h4 className="text-base font-medium text-stone-900 font-sans">
                    {role.title}
                  </h4>
                  <div className="flex justify-between items-center text-xs font-mono text-[#587B6D] mb-2 mt-0.5">
                    <span>{role.organization}</span>
                    <span className="text-stone-400">{role.period}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed font-sans">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honors */}
        <div>
          <h3 className="text-sm font-mono font-semibold text-[#587B6D] uppercase tracking-wider mb-8 flex items-center gap-2 border-b border-[#E5E3DC] pb-3">
            <Award className="w-4 h-4 text-[#C86D51]" /> Recognitions & Awards
          </h3>
          <div className="relative border-l-2 border-[#E0DCD2] pl-6 space-y-10 ml-3">
            {achievements.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 bg-[#FBFBF9] p-1.5 border-2 border-[#C86D51] rounded-full text-[#C86D51]">
                  <Award className="w-3 h-3" />
                </div>
                <h4 className="text-base font-medium text-stone-900 font-sans">
                  {item.title}
                </h4>
                <div className="flex justify-between items-center text-xs font-mono text-[#C86D51] mb-2 mt-0.5">
                  <span>{item.organization}</span>
                  <span className="text-stone-400">{item.date}</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}