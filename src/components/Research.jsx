import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Research() {
  const paper = {
    status: "Research Paper",
    title: "Uropine: An AI-Powered Portable Biomedical Device for Low-Cost LUTS Diagnosis via MEMS Pressure Transduction",
    venue: "Biomedical Instrumentation & Embedded Systems Research",
    abstract: "Presents the hardware architecture and clinical validation of 'Uropine'—a low-cost, portable AI-driven biomedical device designed for real-time intra-vesical and intra-abdominal pressure monitoring. Replaces complex multi-lumen catheter systems with single-catheter MEMS pressure transduction and high-precision analog signal conditioning for accessible urological care.",
    highlights: [
      "MEMS Piezoresistive Sensing",
      "Embedded Microcontroller DAQ",
      "Instrumentation Amplifier Signal Conditioning"
    ],
    link: "https://your-paper-link.com"
  };

  return (
    <section id="research" className="py-24 bg-[#F5F4EE] border-t border-b border-[#E7E4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase">Academic Inquiry</span>
          <h2 className="text-3xl font-serif font-normal text-stone-800 mt-2">Research Contributions</h2>
        </div>

        <div className="bg-[#FAF9F5] border border-[#DDD9CE] p-7 sm:p-9 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#C86D51] text-white font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
            {paper.status}
          </div>

          <div className="flex items-start space-x-4">
            <BookOpen className="w-6 h-6 text-[#587B6D] shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-medium text-stone-900 mb-2 leading-snug font-sans">
                {paper.title}
              </h3>
              <p className="text-xs font-mono text-[#C86D51] mb-4 font-medium">
                {paper.venue}
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                <span className="text-stone-800 font-medium">Abstract: </span>
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.highlights.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#EDE9DF] text-[#4A6B5D] text-[11px] font-mono px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a 
                href={paper.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-[#587B6D] hover:text-[#3E5C4E] hover:underline"
              >
                <span>Read Publication / Manuscript</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}