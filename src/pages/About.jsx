import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Rocket, Eye, Heart, Users, Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Rocket size={28} />,
      title: 'Our Mission',
      desc: 'To provide world-class technical education through high-quality content and highly affordable courses, empowering students to build successful careers.'
    },
    {
      icon: <Eye size={28} />,
      title: 'Our Vision',
      desc: 'To become Pakistan\'s leading EdTech institute, producing skilled professionals while ensuring quality tech education remains accessible to everyone.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Our Values',
      desc: 'Integrity, accessibility, and community. We treat education as a cause. As a proud initiative by Care Circle, 5% of all our revenue is donated directly to Care Circle welfare.'
    },
  ];

  const highlights = [
    { icon: <Users size={22} />, label: '500+ Students Enrolled' },
    { icon: <BookOpen size={22} />, label: '5 Professional Courses' },
    { icon: <Award size={22} />, label: 'Industry Certifications' },
    { icon: <Briefcase size={22} />, label: 'Internship Programs' },
  ];

  const pamphlets = [
    {
      title: 'Web Development',
      color: 'bg-[#12B5CB]',
      points: ['HTML5, CSS3, JavaScript', 'React.js Framework', '3 Months Program', 'PKR 7,500 – 9,000'],
    },
    {
      title: 'Artificial Intelligence',
      color: 'bg-[#0E90A3]',
      points: ['Python & ML Foundations', 'Deep Learning & NLP', '6 Months Program', 'PKR 16,500 – 18,000'],
    },
    {
      title: 'Machine Learning',
      color: 'bg-[#0B6B7A]',
      points: ['Data Science Basics', 'Regression & Classification', '3 Months Program', 'PKR 7,500 – 9,000'],
    },
    {
      title: 'Flutter Development',
      color: 'bg-[#084853]',
      points: ['Dart Programming', 'Cross-Platform Apps', '3 Months Program', 'PKR 10,500 – 12,000'],
    },
    {
      title: 'Graphic Designing',
      color: 'bg-[#05272D]',
      points: ['Adobe Photoshop & Illustrator', 'Branding & Typography', '3 Months Program', 'PKR 10,500 – 12,000'],
    },
  ];

  return (
    <div className="w-full bg-brand-darkest min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* USER INSTRUCTION: Change the 'src' link below to use a different background image */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="About Xynab Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/75 via-[#0B5F73]/55 to-[#0B1D34]/75"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
            About Xynab Solutions
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Education as a <span className="text-[#12B5CB]">Cause, Not a Business</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Xynab Solutions is an initiative by <strong className="text-white">Care Circle</strong> — dedicated to delivering high-quality, 
            affordable tech education to students across Pakistan.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-10 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-gray-100 p-10 flex flex-col items-start group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 rounded-3xl">
                <div className="w-14 h-14 bg-[#00A6B4]/10 text-[#00A6B4] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A6B4] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black text-[#0B1D34] mb-3">{v.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-12 px-4 md:px-8 bg-[#0B1D34]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-white">
                <div className="w-14 h-14 bg-[#00A6B4]/20 text-[#00A6B4] rounded-2xl flex items-center justify-center">{h.icon}</div>
                <span className="font-bold text-sm text-[#E5E7EB]">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-4 md:px-8 bg-brand-darkest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-navy text-white font-extrabold text-xs mb-5 uppercase tracking-widest border border-brand-blue">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-textPrimary mb-6 leading-tight">
                Born from a Passion for <span className="text-brand-blue">Accessible Education</span>
              </h2>
              <p className="text-brand-textMuted leading-relaxed mb-5">
                Xynab Solutions was founded with a single belief: that quality tech education should not be a privilege. Too many talented students in Pakistan lack access to the skills needed for modern careers — and we are here to change that.
              </p>
              <p className="text-brand-textMuted leading-relaxed mb-8">
                As an initiative by <strong className="text-brand-textPrimary">Care Circle</strong>, we combine social responsibility with professional excellence. Driven by our commitment to giving back, <strong className="text-brand-blue">5% of all our revenue is proudly donated to Care Circle</strong> to support impactful community initiatives across Pakistan. Our instructors are industry practitioners who bring real-world experience into every lesson.
              </p>
              <Link to="/enroll" className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2">
                Join Us Today <ChevronRight size={20} />
              </Link>
            </div>

            {/* Pamphlets / Course Highlights */}
            <div className="flex flex-col gap-4">
              {pamphlets.map((p, i) => (
                <div key={i} className={`${p.color} rounded-2xl p-5 flex items-center justify-between group hover:scale-[1.02] transition-transform duration-300 shadow-lg`}>
                  <div>
                    <h4 className="text-white font-black text-lg mb-1">{p.title}</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {p.points.map((pt, j) => (
                        <span key={j} className="text-white/80 text-xs font-medium">{pt}</span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/course/${p.title.toLowerCase().replace(/\s+/g, '-').replace('artificial-', 'artificial-').replace('flutter-', 'app-')}`}
                    className="text-white/70 hover:text-white ml-4 flex-shrink-0 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Teachers CTA */}
      <section className="py-10 px-4 md:px-8 bg-brand-deepNavy border-t border-brand-navy text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-navy text-white font-extrabold text-xs mb-5 uppercase tracking-widest border border-brand-blue">
            Our Team
          </span>
          <h2 className="text-4xl font-black text-brand-textPrimary mb-5">
            Meet the Experts Behind the Courses
          </h2>
          <p className="text-brand-textMuted mb-10 leading-relaxed">
            Our instructors are not just teachers — they are professionals actively working in the industry. They bring current, relevant, and practical knowledge to every session.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link to="/teachers" className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2">
              View Our Teachers <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
