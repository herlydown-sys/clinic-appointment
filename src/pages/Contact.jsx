import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-[#F8FAFC]">
      {/* Hero with Background Image */}
      <div className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/85 via-[#0B5F73]/70 to-[#0B1D34]/85"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg" style={{textShadow:'0 2px 18px rgba(0,0,0,0.8)'}}>
              Contact <span className="text-[#12B5CB]">Us</span>
            </h1>
            <p className="text-white max-w-2xl mx-auto leading-relaxed drop-shadow" style={{textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>
              Have questions about our courses, admissions, or anything else? Our team is ready to help you take the next step in your career.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-5">
            <a href="tel:923218593646" className="brand-card bg-brand-deepNavy p-6 flex items-center gap-5 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Phone size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">Phone</h4>
                <p className="text-brand-textPrimary font-bold text-lg">+92 321 8593646</p>
              </div>
            </a>

            <a href="https://wa.me/923218593646" target="_blank" rel="noopener noreferrer" className="brand-card bg-brand-deepNavy p-6 flex items-center gap-5 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-green-400 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <MessageCircle size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-xs font-black text-green-400 uppercase tracking-widest mb-1">WhatsApp</h4>
                <p className="text-brand-textPrimary font-bold text-lg">+92 321 8593646</p>
                <span className="text-green-400 text-xs font-bold">Message us directly →</span>
              </div>
            </a>

            <a href="mailto:solutionsxynab@gmail.com" className="brand-card bg-brand-deepNavy p-6 flex items-center gap-5 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Mail size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">Email</h4>
                <p className="text-brand-textPrimary font-bold break-all">solutionsxynab@gmail.com</p>
              </div>
            </a>

            <div className="brand-card bg-brand-deepNavy p-6 flex items-center gap-5">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0">
                <Clock size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">Working Hours</h4>
                <p className="text-brand-textPrimary font-medium text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="brand-card bg-brand-deepNavy p-6 md:p-10">
            <h3 className="text-xl font-black text-brand-textPrimary mb-8">Send a Quick Message</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail size={36} className="text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-brand-textPrimary mb-3">Message Sent!</h4>
                <p className="text-brand-textMuted">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-navy"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-navy"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows="5"
                    required
                    className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-navy resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-3.5 rounded-xl font-black text-base">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
