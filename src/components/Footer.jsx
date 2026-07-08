import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ChevronRight, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const exploreLinks = [
    { to: '/',                  label: 'Home' },
    { to: '/about',             label: 'About Us' },
    { to: '/events',            label: 'Events' },
    { to: '/contact',           label: 'Contact Us' },
    { to: '/faqs',              label: 'Help & FAQs' },
  ];

  const categories = [
    { to: '/course/web-development',            label: 'Web Development' },
    { to: '/course/artificial-intelligence',    label: 'Artificial Intelligence' },
    { to: '/course/machine-learning',           label: 'Machine Learning' },
    { to: '/course/app-development',            label: 'App Development' },
    { to: '/course/graphic-designing',          label: 'Graphic Designing' },
  ];

  return (
    <footer className="relative text-white font-sans mt-12 overflow-hidden shadow-2xl border-t-4 border-[#12B5CB]">
      
      {/* ── Background Image & Overlay ── */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Footer background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B1D34]/90"></div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative z-10 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Column 1: Brand & Address ── */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-3 mb-6 bg-transparent hover:opacity-80 transition-opacity">
              <img src={logo} alt="Xynab Solutions" className="h-12 object-contain" />
              <div className="flex flex-col pr-2">
                <span className="font-black text-2xl tracking-tight leading-none drop-shadow-md">
                  <span className="text-[#0B5F73]">Xynab</span> <span className="text-[#12B5CB]">Solutions</span>
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-gray-300">
              An initiative by Care Circle — empowering 
              students across Pakistan with world-class, affordable tech education.
            </p>
            <ul className="flex flex-col gap-5 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail size={18} strokeWidth={2.5} />
                </div>
                <a href="mailto:solutionsxynab@gmail.com" className="hover:text-white transition-colors">solutionsxynab@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <a href="https://wa.me/923218593646" className="hover:text-white transition-colors">+92 321 8593646</a>
              </li>
            </ul>
          </div>

          {/* ── Column 2: Explore Links ── */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-3 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#12B5CB] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    <ChevronRight size={14} className="text-[#12B5CB]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Categories ── */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-3 relative inline-block">
              Categories
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#12B5CB] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.map((course, i) => (
                <li key={i}>
                  <Link to={course.to} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                    <ChevronRight size={14} className="text-[#12B5CB]" />
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Newsletter & Social ── */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-3 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#12B5CB] rounded-full"></span>
            </h3>
            <form className="flex flex-col gap-3 mb-8">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-[#12B5CB] transition-colors text-sm"
              />
              <button type="button" className="bg-[#12B5CB] text-white font-bold w-full py-3 rounded-lg text-sm hover:bg-[#0B5F73] transition-colors">
                Subscribe Now
              </button>
            </form>

            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Connect With Us</h4>
            <div className="flex items-center gap-3">
              <a href="mailto:solutionsxynab@gmail.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#12B5CB] hover:border-[#12B5CB] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <Mail size={20} strokeWidth={2.5} />
              </a>
              <a href="https://wa.me/923218593646" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#12B5CB] hover:border-[#12B5CB] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
              <a href="tel:+923218593646" className="w-11 h-11 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#12B5CB] hover:border-[#12B5CB] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <Phone size={20} strokeWidth={2.5} />
              </a>
              <a href="https://www.instagram.com/xynabsolutions.pk" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#12B5CB] hover:border-[#12B5CB] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 py-6 px-4 md:px-8 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="font-medium text-center md:text-left">
            © {new Date().getFullYear()} <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors"><span className="text-[#0B5F73] font-bold">Xynab</span> <span className="text-[#12B5CB] font-bold">Solutions</span></Link>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
