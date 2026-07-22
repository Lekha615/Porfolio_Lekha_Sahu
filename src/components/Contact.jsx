import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#090d16] border-t border-slate-900 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">06 // Connect</span>
          <h2 className="text-3xl font-bold text-white mt-2">Initialize Communication</h2>
          <p className="text-sm text-gray-400 mt-2">Drop a line regarding technical projects, research collaborations, or engineering openings.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono text-sm">
          <div>
            <label className="block text-xs uppercase text-slate-400 mb-1">Callsign / Name</label>
            <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="e.g., Engineer" required />
          </div>
          <div>
            <label className="block text-xs uppercase text-slate-400 mb-1">Routing Network Address / Email</label>
            <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500" placeholder="e.g., network@domain.com" required />
          </div>
          <div>
            <label className="block text-xs uppercase text-slate-400 mb-1">Transmission Data / Message</label>
            <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none" placeholder="Type your plaintext request payload here..." required></textarea>
          </div>
          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-2.5 rounded transition-colors shadow-lg shadow-cyan-500/10">
            Transmit Packet
          </button>
        </form>
      </div>
    </section>
  );
}