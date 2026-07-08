import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { Users, Clock, BookOpen, Wallet, ChevronRight } from 'lucide-react';

const Teachers = () => {
  const navigate = useNavigate();
  
  const rawTeachers = Object.values(coursesData).map(course => ({
    id: course.id,
    name: course.instructor,
    courseName: course.name,
    duration: course.duration,
    fees: course.fees.Premium,
    displayFee: course.totalFee,
    lessons: course.lessons,
    icon: course.icon
  }));
  const teachers = rawTeachers.sort((a, b) => {
    if (a.name === 'Umar Attique') return 1;
    if (b.name === 'Umar Attique') return -1;
    return 0;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen pb-20 bg-[#F8FAFC]">
      {/* Hero with Background Image */}
      <div className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            alt="Instructors background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/88 via-[#0B5F73]/72 to-[#0B1D34]/88"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-extrabold text-xs mb-4 uppercase tracking-widest border border-white/20">
              Our Faculty
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Our Instructors</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Learn directly from industry experts who bring real-world experience to the classroom.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-20 pt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-8">
          {teachers.map((teacher, idx) => {
            const isMale = teacher.name === 'Umar Attique';
            const MaleIcon = () => (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-blue group-hover:text-brand-teal transition-colors"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            );
            const FemaleIcon = () => (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-brand-teal group-hover:text-brand-blue transition-colors"><path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 10c-3 0-5 2-6 5l-2 5h16l-2-5c-1-3-3-5-6-5z"/></svg>
            );
            
            return (
            <div 
              key={idx} 
              className={`brand-card p-8 md:p-10 cursor-pointer group flex flex-col h-full bg-white shadow-card border border-brand-veryLightGray hover:border-brand-teal hover:shadow-card-hover rounded-[30px] lg:rounded-[40px] transition-all duration-300 animate-fade-in-up-delay-${idx % 2 === 0 ? '1' : '2'}`}
              onClick={() => navigate(`/teachers/${teacher.id}`)}
            >
              <div className="w-24 h-24 bg-brand-bgBase rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border border-brand-veryLightGray group-hover:border-brand-teal transition-colors">
                {isMale ? <MaleIcon /> : <FemaleIcon />}
              </div>
              
              <div className="text-center mb-6 flex-grow">
                <h3 className="text-2xl font-black text-[#12B5CB] mb-2">{teacher.name}</h3>
                <p className="text-[#12B5CB] font-bold mb-4 flex items-center justify-center gap-2">
                  <span className="opacity-80 text-brand-teal">{teacher.icon}</span> {teacher.courseName}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-veryLightGray space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-slateLight flex items-center gap-1.5"><Clock size={16} className="text-brand-teal"/> Duration:</span>
                  <span className="font-bold text-brand-slateDark">{teacher.duration}</span>
                </div>
                {teacher.name !== 'Ayesha Khalid' && teacher.lessons && teacher.lessons !== 'N/A' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-brand-slateLight flex items-center gap-1.5"><BookOpen size={16} className="text-brand-teal"/> Lessons:</span>
                    <span className="font-bold text-brand-slateDark">{teacher.lessons}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-slateLight flex items-center gap-1.5"><Wallet size={16} className="text-brand-teal"/> Fees:</span>
                  <span className="font-black text-brand-navy">{teacher.displayFee}</span>
                </div>
              </div>

              <button className="w-full py-2 font-black flex items-center justify-center gap-2 text-[#0B5F73] group-hover:text-[#12B5CB] transition-colors uppercase tracking-widest text-sm">
                View Outline <ChevronRight size={18} />
              </button>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
