import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const courses = [
    { name: 'Web development', path: '/course/web-development' },
    { name: 'App development', path: '/course/app-development' },
    { name: 'AI', path: '/course/artificial-intelligence' },
    { name: 'Machine learning', path: '/course/machine-learning' },
    { name: 'Graphic designing', path: '/course/graphic-designing' },
  ];

  const pages = [
    { name: 'About us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Pricing plan', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const admissions = [
    { name: 'How to apply', path: '/admissions/how-to-apply' },
    { name: 'Admission form', path: '/enroll' },
    { name: 'Internship', path: '/admissions/internship' },
    { name: 'Tution fees', path: '/admissions/tuition-fees' },
  ];

  const isActive = (path) => location.pathname === path ? 'text-[#0B5F73]' : 'text-[#12B5CB] hover:text-[#0B5F73]';
  const isParentActive = (paths) => paths.some(p => location.pathname.startsWith(p)) ? 'text-[#0B5F73]' : 'text-[#12B5CB] hover:text-[#0B5F73]';

  return (
    <div className="w-full flex flex-col z-50 sticky top-0">
      
      {/* ── Main Header ── */}
      <header className="w-full bg-white border-b border-cycle border-brand-border shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Xynab Solutions Logo" className="h-8 md:h-12 object-contain group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl tracking-tight leading-none">
                  <span className="text-[#0B5F73]">Xynab</span> <span className="text-[#12B5CB]">Solutions</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">

              
              <div className="group relative py-6">
                <button className={`flex items-center gap-1 font-bold transition-colors ${isParentActive(['/course'])}`}>
                  Courses <ChevronDown size={16} strokeWidth={2.5} />
                </button>
                <div className="absolute top-[80%] left-0 w-56 bg-white shadow-card rounded-xl border border-cycle border-[#12B5CB]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col py-2">
                  {courses.map(item => (
                    <Link key={item.path} to={item.path} className="px-5 py-2.5 hover:bg-[#0B5F73]/5 text-[#64748B] hover:text-[#0B5F73] transition-colors text-sm font-semibold">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="group relative py-8">
                <button className={`flex items-center gap-1 font-bold transition-colors ${isParentActive(['/about', '/events', '/portfolio', '/teachers', '/pricing', '/faqs'])}`}>
                  Pages <ChevronDown size={16} strokeWidth={2.5} />
                </button>
                <div className="absolute top-[80%] left-0 w-56 bg-white shadow-card rounded-xl border border-cycle border-[#12B5CB]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col py-2">
                  {pages.map(item => (
                    <Link key={item.path} to={item.path} className="px-5 py-2.5 hover:bg-[#0B5F73]/5 text-[#64748B] hover:text-[#0B5F73] transition-colors text-sm font-semibold">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="group relative py-8">
                <button className={`flex items-center gap-1 font-bold transition-colors ${isParentActive(['/admissions', '/enroll'])}`}>
                  Admissions <ChevronDown size={16} strokeWidth={2.5} />
                </button>
                <div className="absolute top-[80%] left-0 w-56 bg-white shadow-card rounded-xl border border-cycle border-[#12B5CB]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col py-2">
                  {admissions.map(item => (
                    <Link key={item.path} to={item.path} className="px-5 py-2.5 hover:bg-[#0B5F73]/5 text-[#64748B] hover:text-[#0B5F73] transition-colors text-sm font-semibold">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/contact" className={`font-bold transition-colors ${isActive('/contact')}`}>
                Contact us
              </Link>
              
              <Link to="/enroll" className="btn-gradient ml-4 px-8 py-3 rounded-full text-sm">
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-[#0B5F73] hover:text-[#12B5CB] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-xl border-t border-[#12B5CB]/20 absolute top-full left-0 right-0 z-40 flex flex-col p-4 overflow-y-auto max-h-[80vh]">

            
            <div className="py-3 px-4 font-bold border-b border-[#12B5CB]/20">
              <div className="mb-3 text-[#0B5F73] uppercase tracking-widest text-xs">Courses</div>
              <div className="flex flex-col pl-4 gap-3">
                {courses.map(course => (
                  <Link key={course.path} to={course.path} className="text-sm text-[#64748B] hover:text-[#0B5F73] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-3 px-4 font-bold border-b border-[#12B5CB]/20">
              <div className="mb-3 text-[#0B5F73] uppercase tracking-widest text-xs">Pages</div>
              <div className="flex flex-col pl-4 gap-3">
                {pages.map(page => (
                  <Link key={page.path} to={page.path} className="text-sm text-[#64748B] hover:text-[#0B5F73] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-3 px-4 font-bold border-b border-[#12B5CB]/20">
              <div className="mb-3 text-[#0B5F73] uppercase tracking-widest text-xs">Admissions</div>
              <div className="flex flex-col pl-4 gap-3">
                {admissions.map(item => (
                  <Link key={item.path} to={item.path} className="text-sm text-[#64748B] hover:text-[#0B5F73] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={`py-4 px-4 font-bold border-b border-[#12B5CB]/20 ${location.pathname === '/contact' ? 'text-[#0B5F73]' : 'text-[#12B5CB]'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link>
            
            <div className="p-4 mt-2">
              <Link to="/enroll" className="block w-full text-center btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
