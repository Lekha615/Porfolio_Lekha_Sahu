import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Research() {
  const paper = {
    status: "Research Paper",
    title: "Uropine: An AI-Powered Portable Biomedical Device for Low-Cost LUTS Diagnosis via MEMS Pressure Transduction",
    venue: "International Journal of Recent Advances in Engineering and Technology (IJRAET)",
    // Cleaned & summarized abstract optimized for quick scanning
    abstract: "Presents the hardware architecture and clinical validation of 'Uropine'—a low-cost, portable AI-driven biomedical device designed for real-time intra-vesical and intra-abdominal pressure monitoring. Replaces complex multi-lumen catheter systems with single-catheter MEMS pressure transduction and high-precision analog signal conditioning for accessible urological care.",
    highlights: [
      "MEMS Piezoresistive Sensing",
      "Embedded Microcontroller DAQ",
      "Instrumentation Amplifier Signal Conditioning"
    ],
    link: "https://doi.org/10.65521/intjournalrecadvengtech.v15i1.2065" // 👈 Add your paper link/DOI here
  };

  return (
    <section id="research" className="py-24 bg-[#090d16] border-t border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">04 // Scientific Inquiry</span>
          <h2 className="text-3xl font-bold text-white mt-2">Academic & Research Contributions</h2>
        </div>

        <div className="bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 rounded-xl backdrop-blur relative">
          {/* Paper Status Badge */}
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-cyan-500 text-slate-950 font-mono text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded">
            {paper.status}
          </div>

          <div className="flex items-start space-x-4">
            <BookOpen className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              {/* Paper Title */}
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {paper.title}
              </h3>

              {/* Conference / Journal / Focus Area */}
              <p className="text-xs font-mono text-cyan-500/80 mb-4">
                {paper.venue}
              </p>

              {/* Condensed Abstract */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                <span className="text-gray-200 font-semibold">Abstract: </span>
                {paper.abstract}
              </p>

              {/* Key Technical Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {paper.highlights.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-800/60 border border-slate-700/60 text-cyan-300 text-[11px] font-mono px-2.5 py-0.5 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* External Paper Link */}
              <a 
                href={paper.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:underline"
              >
                <span>Access Publication / Manuscript</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}