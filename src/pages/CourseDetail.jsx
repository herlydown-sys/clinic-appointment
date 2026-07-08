import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { CheckCircle2, Clock, BookOpen, GraduationCap, User, ChevronRight, Calendar, Award, ChevronDown } from 'lucide-react';

// Circular Booking Indicator
const BookingCircle = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e2d4d" strokeWidth="10" />
        <circle
          cx="50" cy="50" r="40" fill="none"
          stroke="#3b82f6" strokeWidth="10"
          strokeDasharray="251.2"
          strokeDashoffset="62.8"
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-brand-blue font-black text-sm">75%</span>
      </div>
    </div>
    <span className="text-[#64748B] font-bold text-sm uppercase tracking-widest">Booking</span>
  </div>
);

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId];
  const [openOutlineIdx, setOpenOutlineIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) return <Navigate to="/" />;

  return (
    <div className="w-full bg-brand-darkest min-h-screen pb-20">

      {/* Hero Section */}
      <div className="bg-white pt-24 pb-8 border-b border-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#062F3A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* Left: Course Info */}
          <div className="flex-1">
            <span className="inline-block py-1 px-4 rounded-full bg-[#062F3A]/10 text-[#062F3A] font-bold text-xs mb-4 uppercase tracking-widest border border-[#062F3A]/20">
              {course.duration} Program
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#062F3A] mb-4 leading-tight flex items-center gap-4">
              <span className="text-[#0B5F73]">{course.icon}</span>
              {course.name}
            </h1>
            <p className="text-base md:text-xl text-[#64748B] mb-6 max-w-2xl leading-relaxed">
              {course.shortDescription}
            </p>

            {/* Instructor Banner */}
            <div className="flex items-center gap-4 bg-brand-deepNavy border border-brand-navy rounded-2xl px-5 py-4 w-full sm:w-fit mb-6 md:mb-8">
              <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                <User size={22} />
              </div>
              <div>
                <p className="text-[#64748B] text-xs font-bold uppercase tracking-wider">Instructor</p>
                <p className="text-[#062F3A] font-black text-base md:text-lg">{course.instructor}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link to="/enroll" className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                Enroll Now <ChevronRight size={20} />
              </Link>
              <Link to="/pricing" className="btn-secondary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                View Pricing
              </Link>
            </div>

            <div className="mt-10 space-y-8">
              {/* About */}
              <section className="bg-brand-deepNavy rounded-3xl p-8 border border-brand-navy">
                <h2 className="text-2xl font-black text-[#062F3A] mb-5 flex items-center gap-3">
                  <BookOpen className="text-brand-blue" size={26} /> About This Course
                </h2>
                <p className="text-[#64748B] leading-relaxed text-lg">{course.about}</p>
              </section>

              {/* Why Choose */}
              <section className="bg-brand-deepNavy rounded-3xl p-8 border border-brand-navy">
                <h2 className="text-2xl font-black text-[#062F3A] mb-6 flex items-center gap-3">
                  <GraduationCap className="text-brand-blue" size={26} /> Why Choose This Course
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whyChoose.map((benefit, idx) => (
                    <div key={idx} className="bg-brand-darkest p-4 rounded-xl border border-brand-navy flex items-start gap-3 hover:border-brand-blue transition-colors">
                      <CheckCircle2 className="text-brand-blue shrink-0 mt-0.5" size={20} />
                      <span className="text-[#64748B] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right: Course Card */}
          <div className="w-full lg:w-80 bg-brand-deepNavy rounded-3xl shadow-xl border border-brand-navy overflow-hidden flex-shrink-0 lg:sticky lg:top-32">
            {/* Booking Circle */}
            <div className="flex flex-col items-center py-8 border-b border-brand-navy bg-brand-darkest">
              <BookingCircle />
              <p className="text-[#64748B] text-xs mt-2">Seats filling fast!</p>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#64748B] flex items-center gap-2 text-sm font-medium"><Clock size={16} className="text-brand-blue" /> Duration</span>
                <span className="font-black text-[#062F3A]">{course.duration}</span>
              </div>
              {course.lessons && course.lessons !== 'N/A' && (
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B] flex items-center gap-2 text-sm font-medium"><BookOpen size={16} className="text-brand-blue" /> Lessons</span>
                  <span className="font-black text-[#062F3A]">{course.lessons}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-[#64748B] flex items-center gap-2 text-sm font-medium"><Calendar size={16} className="text-brand-blue" /> Admission Fee</span>
                <span className="font-black text-[#062F3A]">PKR 500</span>
              </div>

              {/* Price Tiers */}
              <div className="pt-4 border-t border-brand-navy space-y-3">
                <p className="text-[#64748B] font-bold text-xs uppercase tracking-wider">Fee Tiers</p>
                {[
                  { label: 'Beginner', fee: course.fees.Beginner },
                  { label: 'Advance', fee: course.fees.Advance },
                  { label: 'Premium', fee: course.fees.Premium, highlight: true },
                ].map((tier) => (
                  <div key={tier.label} className={`flex justify-between items-center px-4 py-2.5 rounded-xl ${tier.highlight ? 'bg-[#062F3A]/10 border border-[#062F3A]/20' : 'bg-brand-darkest'}`}>
                    <span className={`font-bold text-sm ${tier.highlight ? 'text-[#062F3A]' : 'text-[#64748B]'}`}>{tier.label}</span>
                    <span className={`font-black ${tier.highlight ? 'text-[#062F3A]' : 'text-[#062F3A]'}`}>PKR {tier.fee}</span>
                  </div>
                ))}
              </div>

              <Link to="/enroll" className="btn-primary w-full py-4 rounded-2xl font-black text-center block mt-2">
                Start Booking →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-10">

            {/* About and Why Choose moved to top */}

            {/* Course Outline */}
            <section>
              <h2 className="text-2xl font-black text-[#062F3A] mb-6 flex items-center gap-3">
                <Award className="text-brand-blue" size={26} /> Complete Course Outline
              </h2>
              <div className="space-y-4">
                {course.outline.map((module, idx) => {
                  const isOpen = openOutlineIdx === idx;
                  return (
                    <div key={idx} className="bg-brand-deepNavy rounded-2xl overflow-hidden border border-brand-navy">
                      <button 
                        onClick={() => setOpenOutlineIdx(isOpen ? -1 : idx)}
                        className="w-full text-left bg-brand-navy hover:bg-brand-blue/10 transition-colors px-6 py-4 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">{idx + 1}</span>
                          <h3 className="font-black text-[#062F3A] text-lg">{module.title}</h3>
                        </div>
                        <ChevronDown 
                          size={20} 
                          className={`text-brand-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] border-t border-brand-navy' : 'max-h-0'}`}>
                        <ul className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-center gap-3 text-[#64748B]">
                              <div className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Instructor Card */}
            <div className="bg-brand-deepNavy rounded-3xl p-8 border border-brand-navy text-center">
              <div className="w-20 h-20 bg-brand-navy rounded-full mx-auto mb-4 flex items-center justify-center text-brand-blue">
                <User size={36} />
              </div>
              <h3 className="font-black text-[#062F3A] text-xl mb-1">{course.instructor}</h3>
              <p className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Instructor</p>
              <div className="space-y-2 text-sm text-[#64748B]">
                <div className="flex justify-between bg-brand-darkest px-4 py-2.5 rounded-xl">
                  <span>Duration</span>
                  <span className="font-bold text-[#062F3A]">{course.duration}</span>
                </div>
                {course.lessons && course.lessons !== 'N/A' && (
                  <div className="flex justify-between bg-brand-darkest px-4 py-2.5 rounded-xl">
                    <span>Lessons</span>
                    <span className="font-bold text-[#062F3A]">{course.lessons}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl p-8 text-white text-center">
              <h3 className="text-xl font-black mb-3">Ready to Start?</h3>
              <p className="text-white/80 text-sm mb-6">Join our next batch and transform your career with industry experts.</p>
              <Link to="/enroll" className="block w-full text-center bg-white text-brand-blue hover:bg-brand-textPrimary font-black py-3.5 rounded-2xl transition-colors">
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
