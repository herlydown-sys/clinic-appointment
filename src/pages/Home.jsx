import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import {
  Users, GraduationCap, Trophy, Briefcase, ChevronRight,
  CheckCircle2, Play, Star, Calendar, Clock,
  ArrowRight, Search, BookOpen, MapPin, Phone, Mail, ChevronLeft,
  Layout, Monitor, Palette, Code, BrainCircuit, Wallet
} from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const testimonials = [
  { name: 'Ali Hassan',    role: 'Web Developer', text: 'Xynab Solutions changed my career. I got my first freelancing project within a month of completing the course!', rating: 5, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop' },
  { name: 'Fatima Zahra',  role: 'Graphic Designer', text: 'The teachers are so supportive and the curriculum is practical. I now design for 3 brands on Fiverr.', rating: 5, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop' },
  { name: 'Bilal Ahmed',   role: 'ML Engineer', text: 'Best institute for AI and ML in Pakistan. The affordability and quality combination is unmatched.', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
  { name: 'Sara Khan',     role: 'App Developer', text: 'I built a complete mobile app for my final project. The instructor Ayesha Khalid is amazing!', rating: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop' },
];
const MaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 mx-auto text-blue-500 mb-4">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const FemaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 mx-auto text-brand-teal mb-4">
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
    <path d="M18 21v-2a6 6 0 0 0-12 0v2"></path>
    <path d="M7 11l-2 4"></path>
    <path d="M17 11l2 4"></path>
  </svg>
);

const CountUpStat = ({ end, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (observer) observer.disconnect(); };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'left': return 'translate(-50px, 0)';
      case 'right': return 'translate(50px, 0)';
      case 'down': return 'translate(0, -50px)';
      case 'up':
      default: return 'translate(0, 50px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const TeacherCard = ({ t }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-sm border border-cycle border-brand-border overflow-hidden group text-center p-6 hover:-translate-y-1 transition-all duration-300">
      {t.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
      <h3 className="font-bold text-lg mb-1 text-brand-primary">{t.name}</h3>
      <p className="text-brand-secondary font-semibold text-xs uppercase tracking-widest mb-4">{t.role}</p>
      
      <div className="mt-4 h-10 flex items-center justify-center">
        <button 
          onClick={() => navigate(`/teachers/${t.id}`)}
          className="border border-cycle border-brand-border text-brand-primary font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-brand-teal hover:text-white transition-colors hover:border-brand-teal"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full bg-brand-light overflow-hidden">

      {/* ══════════════════════════════════════════
          ── HERO SECTION (Eduka Full BG style) ──
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[600px] md:min-h-[750px] flex items-center pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062F3A]/95 via-[#062F3A]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <ScrollReveal direction="left" className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-white">
              Build Your Future in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5F73] to-[#12B5CB]">Technology</span>
            </h1>
            <p className="text-lg text-[#64748B] mb-10 leading-relaxed font-medium">
              An initiative by Care Circle — delivering world-class, affordable tech education to students across Pakistan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── HIGHLIGHT CARDS (Overlapping Hero) ──
      ══════════════════════════════════════ */}
      <section className="w-full px-4 md:px-8 relative z-20 -mt-24 md:-mt-32 mb-8 flex justify-end">
        <style>
          {`
            @keyframes coinToss {
              0% { transform: translateY(0) rotateY(0deg); }
              50% { transform: translateY(-20px) rotateY(180deg); }
              100% { transform: translateY(0) rotateY(360deg); }
            }
            .group:hover .coin-icon {
              animation: coinToss 0.8s ease-in-out;
            }
          `}
        </style>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl ml-auto">
          {[
            { num: '01', title: 'Internship Facility', desc: 'Gain practical experience through exclusive internships with top tech companies.', icon: <Briefcase size={24} color="#12B5CB" /> },
            { num: '02', title: 'Skilled Instructors', desc: 'Learn from industry professionals with years of real-world building experience.', icon: <Users size={24} color="#12B5CB" /> },
            { num: '03', title: 'Affordable Prices', desc: 'Access world-class tech education without breaking the bank. Highly affordable fees.', icon: <Wallet size={24} color="#12B5CB" /> },
            { num: '04', title: 'Quality Content', desc: 'Our curriculum is regularly updated to match the latest industry tech trends.', icon: <BookOpen size={24} color="#12B5CB" /> }
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100} className="bg-white rounded-[1.5rem] p-5 shadow-xl border border-[#E2E8F0] group flex flex-col relative z-20 hover:shadow-2xl transition-all duration-300 w-full max-w-[250px] mx-auto sm:mx-0">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-full bg-[#0B5F73] text-[#12B5CB] flex items-center justify-center shrink-0 coin-icon shadow-md border-2 border-[#12B5CB]">
                  {item.icon}
                </div>
                <div 
                  className="text-4xl font-black text-transparent opacity-80 select-none" 
                  style={{ WebkitTextStroke: '1.5px #0B5F73' }}
                >
                  {item.num}
                </div>
              </div>
              <h3 className="text-lg font-black text-[#0B5F73] mb-2 leading-tight">{item.title}</h3>
              <p className="text-[#64748B] text-xs leading-relaxed flex-grow">{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Info Boxes section removed as requested */}

      {/* ══════════════════════════════════════
          ── ABOUT SECTION ──
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px]">
            <ScrollReveal direction="left" className="absolute top-0 right-10 w-[70%] h-[350px] z-10">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white" alt="About main" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200} className="absolute bottom-0 left-0 w-[55%] h-[250px] z-20">
              <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white" alt="About secondary" />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400} className="absolute top-1/2 left-10 -translate-y-1/2 z-30">
              <div className="w-32 h-32 bg-[#00A6B4] rounded-full flex flex-col items-center justify-center text-white shadow-xl animate-spin-slow">
                <span className="text-3xl font-black">5+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center">Years<br/>Experience</span>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">About Xynab Solution</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">
              We Can Help You Achieve Your <span className="text-[#00A6B4]">Goals</span>
            </h2>
            <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
              Our industry-focused curriculum ensures you gain the practical skills needed to thrive in today's tech world. Driven by our commitment to giving back, <span className="text-[#00A6B4] font-bold">5% of all our revenue is proudly donated to Care Circle</span>, supporting impactful community initiatives across Pakistan. Join us to build your career while making a meaningful difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Industry-oriented curriculum', 'Expert instructors', '100% online classes', 'Internship opportunities'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00A6B4]/10 flex items-center justify-center text-[#00A6B4]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-[#64748B]">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-gradient">
              Learn More <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── STATS STRIP ──
      ══════════════════════════════════════ */}
      <section className="py-10 px-4 md:px-8 text-white relative overflow-hidden shadow-inner">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B5F73]/85"></div>
        </div>

        <ScrollReveal direction="up" className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { num: 500, label: 'Students Enrolled', icon: <Users size={40} color="#12B5CB" className="mx-auto mb-4"/> },
            { num: 5,   label: 'Professional Courses', icon: <BookOpen size={40} color="#12B5CB" className="mx-auto mb-4"/> },
            { num: 10,  label: 'Expert Instructors', icon: <Trophy size={40} color="#12B5CB" className="mx-auto mb-4"/> },
            { num: 50,  label: 'Success Stories', icon: <Briefcase size={40} color="#12B5CB" className="mx-auto mb-4"/> },
          ].map((stat, i) => (
            <div key={i}>
              {stat.icon}
              <div className="text-4xl md:text-5xl font-black mb-2"><CountUpStat end={stat.num} /></div>
              <div className="font-semibold uppercase tracking-widest text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════
          ── COURSES SECTION ──
      ══════════════════════════════════════ */}
      <section className="py-12 px-4 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Our Courses</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">
              Let's Check Our <span className="text-[#00A6B4]">Courses</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.values(coursesData).map((course, i) => {
              const courseImages = {
                'web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
                'app-development': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
                'artificial-intelligence': 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop',
                'machine-learning': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
                'graphic-designing': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop'
              };
              const imgUrl = courseImages[course.id] || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop';
              return (
                <ScrollReveal key={course.id} direction="up" delay={(i % 4) * 100}>
                  <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-cycle border-[#E2E8F0] overflow-hidden group flex flex-col h-full">
                    <div className="relative h-32 md:h-40 overflow-hidden shrink-0">
                      <img src={imgUrl} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-2 right-2 bg-[#00A6B4] text-[#E5E7EB] font-black text-[10px] md:text-xs px-2 py-1 rounded-full shadow-sm">
                        PKR {course.fees.Premium}
                      </div>
                    </div>
                    <div className="p-3 md:p-4 flex flex-col flex-1">
                      <h3 className="text-sm md:text-base font-bold mb-2 hover:text-[#00A6B4] transition-colors text-[#E5E7EB] line-clamp-2">
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                      </h3>
                      <p className="text-[#64748B] text-[10px] md:text-xs mb-4 line-clamp-2 flex-1">{course.shortDescription}</p>
                      
                      <div className="pt-3 border-t border-cycle border-[#E2E8F0] flex items-center justify-end">
                        <Link to={`/course/${course.id}`} className="flex items-center gap-1 font-bold text-xs text-[#00A6B4] hover:text-[#E5E7EB] transition-colors">
                          Details <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── VIDEO SECTION ──
      ══════════════════════════════════════ */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <ScrollReveal direction="left" className="w-full lg:w-1/3">
           
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#E5E7EB]">Let's Check Our <span className="text-[#00A6B4]">Environment</span></h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">Explore our short, intensive tech courses designed to quickly upskill you for the modern IT industry. Master cutting-edge technologies in weeks, not years.</p>
            <Link to="/courses" className="btn-gradient">View Courses <ArrowRight size={20}/></Link>
          </ScrollReveal>
          <ScrollReveal direction="right" className="w-full lg:w-2/3 relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop" alt="Video cover" className="w-full h-full object-cover" />
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── CATEGORIES SECTION ──
      ══════════════════════════════════════ */}
      <section className="py-12 px-4 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Categories</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">
              Top <span className="text-[#00A6B4]">Courses</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { title: 'Web Development', icon: <Monitor size={40}/> },
              { title: 'App Development', icon: <Layout size={40}/> },
              { title: 'Graphic Design', icon: <Palette size={40}/> },
              { title: 'Programming', icon: <Code size={40}/> },
              { title: 'Artificial Intelligence', icon: <BrainCircuit size={40}/> },
            ].map((dept, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center group hover:-translate-y-2 transition-all duration-300 border border-cycle border-[#E2E8F0] flex flex-col items-center">
                <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center text-[#00A6B4] mb-4 group-hover:bg-[#00A6B4] group-hover:text-white transition-colors">
                  {dept.icon}
                </div>
                <h3 className="text-sm md:text-lg font-bold text-[#E5E7EB] mb-2 leading-tight">{dept.title}</h3>
              </div>
            ))}
            </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── TEACHERS ──
      ══════════════════════════════════════ */}
      <section className="py-10 px-4 md:px-8 my-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Instructors</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">Meet With Our <span className="text-[#00A6B4]">Instructors</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { id: 'machine-learning', name: 'Rohab Tahir', role: 'ML Instructor', course: 'Machine Learning', gender: 'female' },
              { id: 'app-development', name: 'Ayesha Khalid', role: 'Flutter Instructor', course: 'App Development', gender: 'female' },
              { id: 'web-development', name: 'Isha Naveed', role: 'Web Instructor', course: 'Web Development', gender: 'female' },
              { id: 'graphic-designing', name: 'Aleeza Fatima', role: 'Graphic Design Instructor', course: 'Graphic Designing', gender: 'female' },
              { id: 'artificial-intelligence', name: 'Umar Attique', role: 'AI Instructor', course: 'Artificial Intelligence', gender: 'male' }
            ].map((t, i) => (
              <TeacherCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── WHY CHOOSE US (Split dark/img) ──
      ══════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row max-w-7xl mx-auto my-8 px-4 md:px-8">
        <ScrollReveal direction="left" className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black mb-10 text-[#E5E7EB]">We Can Expand & Go Our Best For Your <span className="text-[#00A6B4]">Goal</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Expert Tutors', icon: <Users/> },
              { title: 'Online Learning', icon: <Play/> },
              { title: 'Certification', icon: <Trophy/> },
              { title: 'Internships', icon: <Briefcase/> },
            ].map((f, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-2xl p-6 border border-cycle border-[#E2E8F0] flex items-center gap-4 hover:border-[#00A6B4] transition-colors group cursor-pointer shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#00A6B4] border border-cycle border-[#E2E8F0] group-hover:text-[#00A6B4] transition-colors">
                  {f.icon}
                </div>
                <h4 className="text-[#E5E7EB] font-bold text-lg">{f.title}</h4>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="w-full lg:w-1/2 h-[500px] lg:h-auto relative overflow-hidden flex items-center justify-center bg-[#F8FAFC]">
          {/* Circular Yellow shape holding image */}
          <div className="w-[80%] h-[80%] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-8 border-[#00A6B4] absolute">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Goal" />
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════
          ── UPCOMING EVENTS ──
      ══════════════════════════════════════ */}
      <section className="py-10 px-4 md:px-8 my-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Events</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">Our Upcoming <span className="text-[#00A6B4]">Events</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', title: 'AI & The Future of Work', date: 'Jul 20, 2026', time: '3:00 PM', loc: 'Lahore' },
              { img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600&auto=format&fit=crop', title: 'Web Dev Bootcamp', date: 'Aug 2, 2026', time: '10:00 AM', loc: 'Online' },
              { img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop', title: 'Internship Orientation', date: 'Oct 1, 2026', time: '5:00 PM', loc: 'Online' },
            ].map((ev, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow overflow-hidden border border-cycle border-[#E2E8F0] flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={ev.img} className="w-full h-full object-cover" alt="Event" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-6 hover:text-[#00A6B4] transition-colors cursor-pointer text-[#E5E7EB] flex-1">{ev.title}</h3>
                  <Link to="/events" className="text-[#0F52BA] font-bold flex items-center justify-center gap-2 border border-cycle border-[#E2E8F0] rounded-full py-2 hover:bg-[#F8FAFC] transition-colors w-full mt-auto">Read More <ArrowRight size={16}/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ── NEWSLETTER / CONTACT SPLIT ──
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row relative mb-8 rounded-[40px] overflow-hidden">
        <ScrollReveal direction="left" className="w-full md:w-1/2 p-8 md:p-24 bg-[#F8FAFC] flex flex-col justify-center">
          <h3 className="text-3xl font-black text-[#E5E7EB] mb-6">Request A Quote</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A6B4] font-medium border border-cycle border-[#E2E8F0]" />
            <input type="email" placeholder="Your Email" className="p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A6B4] font-medium border border-cycle border-[#E2E8F0]" />
            <textarea placeholder="Your Message" rows="4" className="p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A6B4] font-medium resize-none border border-cycle border-[#E2E8F0]"></textarea>
            <button type="button" className="btn-primary self-start mt-2">
              Send Message <ArrowRight size={20}/>
            </button>
          </form>
        </ScrollReveal>
        <ScrollReveal direction="right" className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-gradient-to-br from-[#E5E7EB] to-[#00A6B4] text-white">
          <span className="inline-block text-[#12B5CB] font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Explore Your <span className="text-[#00A6B4]">Creativity</span> And Talent With Us</h2>
          <p className="text-white/90 mb-8 leading-relaxed">Join thousands of students learning in-demand tech skills. Contact us today to learn more about our admission process and internship opportunities.</p>
          <ul className="flex flex-col gap-4 font-medium">
            <li className="flex items-center gap-3"><div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white"><Phone size={18}/></div> +92 321 8593646</li>
            <li className="flex items-center gap-3"><div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white"><Mail size={18}/></div> solutionsxynab@gmail.com</li>
          </ul>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════
          ── TESTIMONIALS ──
      ══════════════════════════════════════ */}
      <section className="py-10 px-4 md:px-8 relative mb-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="inline-block text-[#00A6B4] font-bold text-sm uppercase tracking-widest mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#E5E7EB]">What Our Students <span className="text-[#00A6B4]">Say?</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100}>
                <div className="bg-[#F8FAFC] p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-cycle border-[#E2E8F0] text-[#E5E7EB] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-[#00A6B4] mb-4">
                      {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[#64748B] italic mb-6 text-sm leading-relaxed">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#00A6B4]" />
                    <div>
                      <h4 className="font-bold text-[#E5E7EB] text-sm">{t.name}</h4>
                      <span className="text-[#00A6B4] text-xs font-semibold">{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
