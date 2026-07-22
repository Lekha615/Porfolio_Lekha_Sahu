import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '1acff4fd-751b-4456-af75-a5dcefdffcc5', // 👈 Paste your key here!
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">06 // Contact</span>
        <h2 className="text-3xl font-bold text-white mt-2">Initialize Communication</h2>
      </div>

      <div className="bg-[#0f172a]/60 border border-slate-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Sender Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#0b0f19] border border-slate-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-[#0b0f19] border border-slate-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Message Payload</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here..."
              className="w-full bg-[#0b0f19] border border-slate-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          {/* TRANSMIT BUTTON */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 text-slate-950 font-mono font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Transmit Packet
              </>
            )}
          </button>

          {/* FEEDBACK MESSAGES */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono mt-4">
              <CheckCircle2 className="w-4 h-4" /> Packet transmitted successfully! Check your inbox soon.
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-rose-400 text-sm font-mono mt-4">
              <AlertCircle className="w-4 h-4" /> Transmission failed. Please try again or email directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}