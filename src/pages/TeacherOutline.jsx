import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { Clock, BookOpen, Wallet, ArrowLeft, CheckCircle2, User, ChevronDown } from 'lucide-react';

const TeacherOutline = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(0);
  
  const course = coursesData[courseId];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <Navigate to="/teachers" />;
  }

  return (
    <div className="w-full bg-brand-darkest min-h-screen py-12 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto animate-fade-in-up">
        <button 
          onClick={() => navigate('/teachers')}
          className="flex items-center gap-2 text-brand-textMuted hover:text-brand-blue font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Faculty
        </button>

        <div className="overflow-hidden">
          
          {/* Header Area */}
          <div className="bg-brand-navy p-8 md:p-12 text-brand-textPrimary flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border-b border-brand-blue">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-deepNavy/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="w-32 h-32 bg-brand-darkest border-2 border-brand-blue rounded-full flex items-center justify-center shadow-md z-10 flex-shrink-0 text-brand-blue">
              {course.instructor === 'Umar Attique' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-brand-teal"><path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 10c-3 0-5 2-6 5l-2 5h16l-2-5c-1-3-3-5-6-5z"/></svg>
              )}
            </div>
            
            <div className="text-center md:text-left z-10">
              <span className="inline-block px-3 py-1 bg-brand-darkest text-brand-blue border border-brand-blue text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
                Instructor Profile
              </span>
              <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#12B5CB]">{course.instructor}</h1>
              <p className="text-[#12B5CB] text-lg flex items-center justify-center md:justify-start gap-2 font-bold">
                <span className="opacity-90">{course.icon}</span> Lead Instructor for {course.name}
              </p>
            </div>
          </div>

          {/* Details & Outline */}
          <div className="p-8 md:p-12">
            
            <div className={`grid grid-cols-1 md:grid-cols-${course.instructor === 'Ayesha Khalid' ? '2' : '3'} gap-6 mb-12 py-6 border-y border-brand-navy`}>
              <div className="p-4 flex flex-col items-center justify-center text-center md:border-r border-brand-navy last:border-0">
                <Clock className="text-brand-blue mb-3" size={28} />
                <h4 className="text-sm text-brand-textMuted font-bold mb-1 uppercase tracking-wider">Course Duration</h4>
                <p className="text-lg font-black text-brand-textPrimary">{course.duration}</p>
              </div>
              {course.instructor !== 'Ayesha Khalid' && (
                <div className="p-4 flex flex-col items-center justify-center text-center md:border-r border-brand-navy last:border-0">
                  <BookOpen className="text-brand-blue mb-3" size={28} />
                  <h4 className="text-sm text-brand-textMuted font-bold mb-1 uppercase tracking-wider">Total Lessons</h4>
                  <p className="text-lg font-black text-brand-textPrimary">{course.lessons !== 'N/A' ? course.lessons : 'Comprehensive'}</p>
                </div>
              )}
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Wallet className="text-brand-blue mb-3" size={28} />
                <h4 className="text-sm text-brand-textMuted font-bold mb-1 uppercase tracking-wider">Total Fee</h4>
                <p className="text-lg font-black text-brand-textPrimary">{course.totalFee}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-brand-textPrimary mb-4 border-b border-brand-navy pb-3">About the Course</h2>
              <p className="text-brand-textMuted font-medium leading-relaxed text-lg">
                {course.about}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-textPrimary mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-brand-blue" /> Course Outline & Curriculum
              </h2>
              
              <div className="space-y-4">
                {course.outline.map((module, idx) => {
                  const isOpen = openSection === idx;
                  return (
                    <div key={idx} className="overflow-hidden border-b border-brand-navy transition-colors">
                      <button 
                        onClick={() => setOpenSection(isOpen ? null : idx)}
                        className="w-full p-6 flex items-center justify-between text-left focus:outline-none hover:bg-brand-deepNavy transition-colors"
                      >
                        <h4 className="font-black text-brand-textPrimary text-lg flex items-center gap-4">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue/20 text-brand-blue text-sm">
                            {idx + 1}
                          </span>
                          {module.title}
                        </h4>
                        <ChevronDown 
                          className={`text-brand-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                          size={24} 
                        />
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className="p-6 pt-0 border-t border-brand-navy/50 mt-2">
                          <ul className="space-y-3 mt-4">
                            {module.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="text-brand-textMuted font-medium text-sm md:text-base flex items-start gap-3">
                                <span className="text-brand-blue mt-1 flex-shrink-0">◆</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherOutline;
