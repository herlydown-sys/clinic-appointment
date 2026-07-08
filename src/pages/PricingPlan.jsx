import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { CheckCircle2, X } from 'lucide-react';

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out h-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PricingPlan = () => {
  const courses = Object.values(coursesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen pb-24">
      {/* Hero with Background Image */}
      <div className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
            alt="Pricing plans background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/72 via-[#0B5F73]/52 to-[#0B1D34]/72"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-extrabold text-xs mb-4 uppercase tracking-widest border border-white/20">
              Invest in Your Future
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Pricing Plans</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Choose the tier that best fits your learning goals. All courses require a standard Admission Fee of PKR 500.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 mt-16 relative z-20">
        <div>
          {courses.map((course, idx) => (
            <div key={course.id} className="mb-24">
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-200">
                  <div className="w-16 h-16 bg-[#00A6B4]/10 text-[#00A6B4] rounded-2xl flex items-center justify-center border border-[#00A6B4]/20">
                    {course.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-[#0B1D34] mb-2">{course.name}</h2>
                    <p className="text-gray-500 font-medium flex items-center gap-2">
                      <span className="text-[#00A6B4] font-bold">Instructor: {course.instructor}</span> • Duration: {course.duration}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                
                {/* Beginner Tier */}
                <ScrollReveal delay={100}>
                  <div className="bg-white rounded-3xl p-7 md:p-10 flex flex-col border border-[#12B5CB]/20 shadow-xl hover:shadow-2xl transition-shadow relative h-full">
                    <h3 className="text-2xl font-black text-[#062F3A] mb-3">Beginner</h3>
                    <div className="text-4xl font-black text-[#0B5F73] mb-8">
                      PKR {course.fees.Beginner}
                    </div>
                    <ul className="space-y-5 mb-10 flex-grow">
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Core Curriculum</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Basic Assignments</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Group Support</li>
                      <li className="flex gap-3 text-[#64748B] font-medium opacity-50"><X className="shrink-0" size={22}/> 1-on-1 Mentoring</li>
                      <li className="flex gap-3 text-[#64748B] font-medium opacity-50"><X className="shrink-0" size={22}/> Internship</li>
                    </ul>
                    <Link to="/enroll" className="btn-secondary w-full py-4 rounded-2xl font-bold text-center block text-lg mt-auto">
                      Select Beginner
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Advance Tier */}
                <ScrollReveal delay={250}>
                  <div className="bg-white rounded-3xl p-7 md:p-10 flex flex-col border border-[#12B5CB]/20 shadow-xl hover:shadow-2xl transition-shadow relative h-full">
                    <h3 className="text-2xl font-black text-[#062F3A] mb-3">Advance</h3>
                    <div className="text-4xl font-black text-[#0B5F73] mb-8">
                      PKR {course.fees.Advance}
                    </div>
                    <ul className="space-y-5 mb-10 flex-grow">
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Core Curriculum</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Advanced Projects</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Priority Support</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> 1-on-1 Mentoring</li>
                      <li className="flex gap-3 text-[#64748B] font-medium opacity-50"><X className="shrink-0" size={22}/> Internship</li>
                    </ul>
                    <Link to="/enroll" className="btn-secondary w-full py-4 rounded-2xl font-bold text-center block text-lg mt-auto">
                      Select Advance
                    </Link>
                  </div>
                </ScrollReveal>

                {/* Premium Tier */}
                <ScrollReveal delay={400}>
                  <div className="bg-white rounded-3xl p-7 md:p-10 flex flex-col border-2 border-[#12B5CB] shadow-xl hover:shadow-2xl transition-shadow relative transform md:-translate-y-4 z-10 h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#12B5CB] text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                      Popular
                    </div>
                    <h3 className="text-2xl font-black text-[#062F3A] mb-3">Premium</h3>
                    <div className="text-4xl font-black text-[#0B5F73] mb-8">
                      PKR {course.fees.Premium}
                    </div>
                    <ul className="space-y-5 mb-10 flex-grow">
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Everything in Advance</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Real-world Client Projects</li>
                      <li className="flex gap-3 text-[#64748B] font-medium"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Career Coaching</li>
                      <li className="flex gap-3 text-[#062F3A] font-bold bg-[#12B5CB]/10 p-3 rounded-xl -ml-3"><CheckCircle2 className="text-[#12B5CB] shrink-0" size={22}/> Guaranteed Internship</li>
                    </ul>
                    <Link to="/enroll" className="btn-primary w-full py-4 rounded-2xl font-bold text-center block text-lg mt-auto">
                      Select Premium
                    </Link>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
