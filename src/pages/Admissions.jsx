import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { FileText, Award, CreditCard, ChevronRight, X, Menu } from 'lucide-react';
import { useState } from 'react';

const Admissions = () => {
  const { section } = useParams();
  const courses = Object.values(coursesData);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!section) return <Navigate to="/admissions/how-to-apply" />;

  const navItems = [
    { to: '/admissions/how-to-apply', icon: <FileText size={18} />, label: 'How to Apply', key: 'how-to-apply' },
    { to: '/admissions/internship', icon: <Award size={18} />, label: 'Internship', key: 'internship' },
    { to: '/admissions/tuition-fees', icon: <CreditCard size={18} />, label: 'Tuition Fees', key: 'tuition-fees' },
  ];

  return (
    <div className="w-full bg-brand-darkest min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Mobile Nav Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 bg-brand-deepNavy border border-brand-navy px-4 py-3 rounded-xl text-brand-textPrimary font-bold w-full"
          >
            <Menu size={20} className="text-brand-blue" />
            <span>Admissions Navigation</span>
            <ChevronRight size={18} className={`ml-auto transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
          </button>
          {mobileMenuOpen && (
            <div className="bg-brand-deepNavy border border-brand-navy rounded-xl mt-2 p-2 flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold transition-colors flex items-center gap-3 ${section === item.key ? 'bg-brand-blue text-white' : 'text-brand-textMuted hover:bg-brand-darkest'}`}
                >
                  {item.icon} {item.label}
                </Link>
              ))}
              <Link to="/enroll" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center py-3 rounded-xl font-bold mt-2">
                Apply Now
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4">
            <div className="bg-brand-deepNavy rounded-2xl border border-brand-navy p-4 sticky top-32">
              <h3 className="font-black text-brand-textPrimary mb-4 px-4 text-lg uppercase tracking-widest text-xs text-brand-blue">Admissions</h3>
              <div className="flex flex-col gap-2">
                {navItems.map(item => (
                  <Link
                    key={item.key}
                    to={item.to}
                    className={`px-4 py-3 rounded-xl font-bold transition-colors flex items-center gap-3 ${section === item.key ? 'bg-brand-blue text-white' : 'text-brand-textMuted hover:bg-brand-darkest hover:text-brand-blue'}`}
                  >
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 px-2">
                <Link to="/enroll" className="w-full block text-center btn-primary py-3 rounded-xl font-bold">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-brand-deepNavy rounded-3xl p-6 md:p-10 border border-brand-navy min-h-[500px]">

              {section === 'how-to-apply' && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-brand-textPrimary mb-6">How to Apply</h1>
                  <p className="text-brand-textMuted mb-8 leading-relaxed">
                    Welcome to the admissions process for Xynab Solutions. Applying to our programs is straightforward and completely online.
                  </p>
                  <div className="flex flex-col gap-6">
                    {[
                      { num: '1', title: 'Choose Your Course', desc: 'Review our course offerings and select the one that aligns with your career goals.' },
                      { num: '2', title: 'Review Pricing Tiers', desc: 'Decide between the Beginner, Advance, or Premium tiers based on your learning needs.' },
                      { num: '3', title: 'Submit Application', desc: 'Fill out the detailed admission form with your personal and academic information.' },
                      { num: '4', title: 'Pay Admission Fee', desc: 'Pay the standard PKR 500 admission fee to confirm your seat in the course.' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-black flex-shrink-0 text-lg">
                          {step.num}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-lg font-black text-brand-textPrimary mb-1">{step.title}</h4>
                          <p className="text-brand-textMuted leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link to="/enroll" className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2">
                      Start Application <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              )}

              {section === 'internship' && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-brand-textPrimary mb-6">Internship Facility</h1>
                  <p className="text-brand-textMuted mb-8 leading-relaxed">
                    We offer exclusive internship opportunities for students who enroll in the <strong className="text-brand-textPrimary">Premium</strong> tier of our courses. Gain hands-on experience, work on live projects, and jumpstart your career.
                  </p>
                  <h3 className="text-lg font-black text-brand-textPrimary mb-6 pb-3 border-b border-brand-navy uppercase tracking-widest text-xs text-brand-blue">Eligible Premium Courses</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courses.map(course => (
                      <div key={course.id} className="bg-brand-darkest p-5 rounded-2xl border border-brand-navy hover:border-brand-blue transition-colors">
                        <div className="text-brand-blue mb-3">{course.icon}</div>
                        <h4 className="text-base font-black text-brand-textPrimary">{course.name}</h4>
                        <p className="text-xs text-brand-textMuted mb-2 font-medium uppercase tracking-widest">Premium Category</p>
                        <p className="text-brand-blue font-black">PKR {course.fees.Premium}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section === 'tuition-fees' && (
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-brand-textPrimary mb-6">Tuition Fees & Payments</h1>
                  <p className="text-brand-textMuted mb-6 leading-relaxed">
                    We believe in transparent and affordable pricing. A standard <strong className="text-brand-textPrimary">Admission Fee of PKR 500</strong> applies to all courses, in addition to the course fee.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl mb-8 flex gap-3 text-yellow-400">
                    <Award size={20} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Important Note:</strong> Course fees must be paid on or before the 5th of each month. Late payments incur a fee of PKR 200 per day.
                    </div>
                  </div>
                  <h3 className="text-base font-black text-brand-textPrimary mb-4 uppercase tracking-widest text-xs text-brand-blue">Course Pricing Reference</h3>
                  <div className="overflow-x-auto rounded-2xl border border-brand-navy">
                    <table className="w-full text-left min-w-[400px]">
                      <thead>
                        <tr className="bg-brand-navy">
                          <th className="py-4 px-4 font-black text-white text-sm">Course</th>
                          <th className="py-4 px-4 font-black text-white text-sm">Beginner</th>
                          <th className="py-4 px-4 font-black text-white text-sm">Advance</th>
                          <th className="py-4 px-4 font-black text-white text-sm">Premium</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course, i) => (
                          <tr key={course.id} className={`border-t border-brand-navy ${i % 2 === 0 ? '' : 'bg-brand-darkest/40'}`}>
                            <td className="py-4 px-4 font-bold text-brand-textPrimary text-sm">{course.name}</td>
                            <td className="py-4 px-4 text-brand-textMuted text-sm">PKR {course.fees.Beginner}</td>
                            <td className="py-4 px-4 text-brand-textMuted text-sm">PKR {course.fees.Advance}</td>
                            <td className="py-4 px-4 text-brand-blue font-black text-sm">PKR {course.fees.Premium}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
