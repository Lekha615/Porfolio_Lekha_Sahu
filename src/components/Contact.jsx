import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FBFBF9]">
      <div className="mb-12 text-center">
        <span className="font-mono text-[#587B6D] text-xs tracking-widest uppercase">Direct Channel</span>
        <h2 className="text-3xl font-serif font-normal text-stone-800 mt-2">Initialize Communication</h2>
      </div>

      <div className="bg-[#F4F3EE] border border-[#E5E3DC] rounded-2xl p-7 sm:p-9 shadow-xs">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-600 uppercase mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full bg-[#FAF9F5] border border-[#DDD7CC] rounded-lg px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#587B6D] transition-colors placeholder:text-stone-400"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-stone-600 uppercase mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full bg-[#FAF9F5] border border-[#DDD7CC] rounded-lg px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#587B6D] transition-colors placeholder:text-stone-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-stone-600 uppercase mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your note or project inquiry..."
              className="w-full bg-[#FAF9F5] border border-[#DDD7CC] rounded-lg px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#587B6D] transition-colors placeholder:text-stone-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-8 py-3 bg-[#587B6D] hover:bg-[#48665A] disabled:bg-[#8EA197] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#587B6D]/15"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Note
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-[#4A6B5D] text-sm font-medium mt-4">
              <CheckCircle2 className="w-4 h-4" /> Message sent successfully! I'll be in touch soon.
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-[#C86D51] text-sm font-medium mt-4">
              <AlertCircle className="w-4 h-4" /> Delivery failed. Please try again or email directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}