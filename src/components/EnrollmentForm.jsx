import React, { useState, useEffect } from 'react';
import {
  User, Mail, Phone, Book, CreditCard, ChevronRight,
  CheckCircle2, ShieldAlert, GraduationCap, School,
  MapPin, FileText, MessageCircle, ChevronDown, Calendar,
  Hash, Users
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

const inputClass = "w-full bg-brand-darkest border-2 border-transparent focus:border-brand-blue rounded-2xl px-5 py-4 focus:outline-none transition-all font-medium text-brand-textPrimary placeholder-brand-textMuted/40";
const selectClass = "w-full bg-brand-darkest border-2 border-transparent focus:border-brand-blue rounded-2xl px-5 py-4 pr-10 focus:outline-none transition-all appearance-none cursor-pointer font-bold text-brand-textPrimary";
const labelClass = "text-sm font-bold text-brand-textMuted uppercase tracking-wider";

const fullTerms = [
  "Students are not allowed to send personal messages (DMs) to teachers or staff members.",
  "If you have any questions, please send an email or ask in the official discussion group or communication channel.",
  "Teachers will respond to queries through official channels only.",
  "All students must communicate respectfully with teachers and fellow students.",
  "The use of abusive, offensive, discriminatory, threatening, or inappropriate language in any group or platform is strictly prohibited.",
  "Harassment, bullying, or disrespectful behavior will not be tolerated.",
  "Students are not permitted to request, collect, or share the personal information of any teacher or staff member, including personal phone numbers, home address, social media accounts, or personal email addresses.",
  "Teachers reserve the right to keep their personal information confidential.",
  "Any student who sends inappropriate personal messages or contacts teachers outside official channels may face disciplinary action.",
  "Serious violations may result in immediate removal from the course without prior warning.",
  "Course fees must be paid on or before the 5th of each month.",
  "If payment is not received by the due date, a late fee of PKR 200 per day will be charged until the outstanding amount is cleared.",
  "Students must submit their own work. Copying assignments, cheating, plagiarism, or sharing solutions during assessments is strictly prohibited.",
  "Course materials, recorded lectures, notes, assignments, and any learning resources are for enrolled students only. Recording, copying, or distributing content without permission is strictly prohibited.",
  "Discussion groups are for educational purposes only. Avoid spam, advertisements, promotions, political discussions, religious debates, or unrelated conversations.",
  "Students are expected to attend classes regularly and participate actively.",
  "Students must not share screenshots, recordings, or personal information of other students without their consent.",
  "Treat everyone with respect regardless of their background, gender, religion, nationality, or experience level.",
  "The academy reserves the right to issue warnings, suspend access, or permanently remove any student who violates these rules.",
];

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    cnic: '',
    dob: '',
    gender: 'Male',
    address: '',
    instituteName: '',
    currentStatus: 'School',
    highestQualification: 'Intermediate',
    courseType: 'Web Development',
    courseCategory: 'Beginner',
    installments: '1',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [calculatedFee, setCalculatedFee] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-calculate fee when course/category changes
  useEffect(() => {
    const course = Object.values(coursesData).find(c => c.name === formData.courseType);
    if (course) {
      const tierMap = { Beginner: 'Beginner', Advance: 'Advance', Premium: 'Premium' };
      setCalculatedFee(course.fees[tierMap[formData.courseCategory]] || 0);
    }
  }, [formData.courseType, formData.courseCategory]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  const handleFinalSubmit = () => {
    if (!termsAccepted) return;

    const installmentAmount = Math.ceil((calculatedFee + 500) / parseInt(formData.installments));
    const message =
`*New Admission Application — Xynab Solutions*

*Personal Information*
Name: ${formData.firstName} ${formData.lastName}
Father's Name: ${formData.fathersName}
CNIC: ${formData.cnic}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}

*Academic Information*
Institute: ${formData.instituteName}
Current Status: ${formData.currentStatus}
Highest Qualification: ${formData.highestQualification}

*Course Enrollment*
Course: ${formData.courseType}
Category: ${formData.courseCategory}
Course Fee: PKR ${calculatedFee}
Admission Fee: PKR 500
Total Fee: PKR ${calculatedFee + 500}
Installments: ${formData.installments} (PKR ${installmentAmount}/installment)

_Terms & Conditions Accepted: Yes_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923218593646?text=${encodedMessage}`, '_blank');
    setShowTermsModal(false);
  };

  return (
    <div className="w-full bg-brand-darkest py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#062F3A]/10 text-[#062F3A] font-extrabold text-xs mb-4 uppercase tracking-widest border border-[#062F3A]/20">
            Admissions Open
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-brand-textPrimary mb-6 tracking-tight">
            Application Form
          </h1>
          <p className="text-brand-textMuted text-lg leading-relaxed">
            Complete the form below to secure your spot. Standard admission fee is <strong className="text-brand-textPrimary">PKR 500</strong>.
          </p>
        </div>

        {/* ── Terms Modal ── */}
        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darkest/80 backdrop-blur-md">
            <div className="bg-brand-deepNavy rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-navy">

              {/* Modal Header */}
              <div className="p-8 border-b border-brand-navy flex items-center gap-4 sticky top-0 bg-brand-deepNavy z-10">
                <ShieldAlert className="text-brand-blue" size={32} strokeWidth={2.5} />
                <div>
                  <h2 className="text-2xl font-black text-brand-textPrimary">Terms & Conditions</h2>
                  <p className="text-brand-textMuted text-sm">Please read carefully before submitting</p>
                </div>
              </div>

              {/* Terms List */}
              <div className="p-8 space-y-4">
                {fullTerms.map((term, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-brand-blue font-black text-sm min-w-[24px]">{i + 1}.</span>
                    <p className="text-brand-textMuted leading-relaxed text-sm">{term}</p>
                  </div>
                ))}
              </div>

              {/* Accept & Submit */}
              <div className="p-8 border-t border-brand-navy sticky bottom-0 bg-brand-deepNavy">
                <label className="flex items-start gap-4 cursor-pointer mb-6 group">
                  <div className="relative flex items-center justify-center mt-1">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-7 h-7 border-2 border-brand-navy rounded-xl checked:bg-brand-blue checked:border-brand-blue transition-colors cursor-pointer"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <CheckCircle2 className="absolute text-brand-textPrimary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" size={20} strokeWidth={3} />
                  </div>
                  <span className="text-brand-textMuted font-bold group-hover:text-brand-textPrimary transition-colors">
                    I have read, understood, and agree to all the Terms & Conditions stated above.
                  </span>
                </label>
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="px-8 py-3.5 font-bold text-brand-textPrimary hover:bg-brand-navy rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    disabled={!termsAccepted}
                    className={`px-10 py-3.5 font-bold rounded-2xl transition-all shadow-md ${termsAccepted ? 'btn-primary' : 'bg-brand-navy text-brand-textMuted cursor-not-allowed'}`}
                  >
                    Confirm & Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Main Form ── */}
        <div className="brand-card p-8 md:p-14 bg-brand-deepNavy animate-fade-in-up-delay-1">
          <form onSubmit={handleInitialSubmit} className="space-y-14">

            {/* ── Section 1: Personal Information ── */}
            <div>
              <h3 className="text-2xl font-black text-brand-textPrimary mb-8 flex items-center gap-3 border-b border-brand-navy pb-4">
                <User className="text-brand-blue" size={28} strokeWidth={2.5} />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className={labelClass}>First Name <span className="text-brand-blue">*</span></label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="Muhammad" />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Last Name <span className="text-brand-blue">*</span></label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="Ahmed" />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Father's Name <span className="text-brand-blue">*</span></label>
                  <input required type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} className={inputClass} placeholder="Muhammad Ali" />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>CNIC <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <Hash className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-textMuted pointer-events-none" size={18} />
                    <input required type="text" name="cnic" value={formData.cnic} onChange={handleChange} className={`${inputClass} pl-12`} placeholder="42101-1234567-1" maxLength={15} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Date of Birth <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-textMuted pointer-events-none" size={18} />
                    <input required type="date" name="dob" value={formData.dob} onChange={handleChange} className={`${inputClass} pl-12`} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Gender <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-textMuted pointer-events-none" size={18} />
                    <select name="gender" value={formData.gender} onChange={handleChange} className={`${selectClass} pl-12`}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className={labelClass}>Address <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-5 top-5 text-brand-textMuted pointer-events-none" size={18} />
                    <textarea required name="address" value={formData.address} onChange={handleChange} rows="2"
                      className="w-full bg-brand-darkest border-2 border-transparent focus:border-brand-blue rounded-2xl pl-12 pr-5 py-4 focus:outline-none transition-all resize-none font-medium text-brand-textPrimary placeholder-brand-textMuted/40"
                      placeholder="House no, Street, Area, City"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section 2: Academic Information ── */}
            <div>
              <h3 className="text-2xl font-black text-brand-textPrimary mb-8 flex items-center gap-3 border-b border-brand-navy pb-4">
                <School className="text-brand-blue" size={28} strokeWidth={2.5} />
                Academic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2 md:col-span-2">
                  <label className={labelClass}>Institute Name <span className="text-brand-blue">*</span></label>
                  <input required type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} className={inputClass} placeholder="Government High School / Punjab University..." />
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Current Status <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <select name="currentStatus" value={formData.currentStatus} onChange={handleChange} className={selectClass}>
                      <option>School</option>
                      <option>College</option>
                      <option>University</option>
                      <option>Graduated</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Highest Qualification <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <GraduationCap className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-textMuted pointer-events-none" size={18} />
                    <select name="highestQualification" value={formData.highestQualification} onChange={handleChange} className={`${selectClass} pl-12`}>
                      <option>Matriculation</option>
                      <option>Intermediate</option>
                      <option>Bachelors</option>
                      <option>Masters</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section 3: Course Enrollment ── */}
            <div>
              <h3 className="text-2xl font-black text-brand-textPrimary mb-8 flex items-center gap-3 border-b border-brand-navy pb-4">
                <Book className="text-brand-blue" size={28} strokeWidth={2.5} />
                Course Enrollment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <div className="space-y-2">
                  <label className={labelClass}>Course Type <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <select name="courseType" value={formData.courseType} onChange={handleChange} className={selectClass}>
                      {Object.values(coursesData).map(course => (
                        <option key={course.id} value={course.name}>{course.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Course Category <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <select name="courseCategory" value={formData.courseCategory} onChange={handleChange} className={selectClass}>
                      <option value="Beginner">Beginner — PKR {Object.values(coursesData).find(c => c.name === formData.courseType)?.fees.Beginner}</option>
                      <option value="Advance">Advance — PKR {Object.values(coursesData).find(c => c.name === formData.courseType)?.fees.Advance}</option>
                      <option value="Premium">Premium — PKR {Object.values(coursesData).find(c => c.name === formData.courseType)?.fees.Premium}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Total Fee</label>
                  <div className="w-full bg-brand-darkest border-2 border-brand-blue rounded-2xl px-5 py-4 font-black text-brand-blue text-xl">
                    PKR {calculatedFee}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>No of Installments <span className="text-brand-blue">*</span></label>
                  <div className="relative">
                    <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-textMuted pointer-events-none" size={18} />
                    <select name="installments" value={formData.installments} onChange={handleChange} className={`${selectClass} pl-12`}>
                      <option value="1">1 Installment (Full Payment)</option>
                      <option value="2">2 Installments</option>
                      <option value="3">3 Installments</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue pointer-events-none" size={20} />
                  </div>
                </div>
              </div>

              {/* Fee Breakdown Box */}
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0]">
                <h4 className="font-black text-brand-textPrimary mb-6 flex items-center gap-3 text-xl">
                  <FileText className="text-brand-blue" size={24} />
                  Fee Summary
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-brand-textMuted text-lg">
                    <span className="font-medium">Course Fee ({formData.courseCategory})</span>
                    <span className="font-bold text-brand-textPrimary">PKR {calculatedFee}</span>
                  </div>
                  <div className="flex justify-between text-brand-textMuted text-lg">
                    <span className="font-medium">Admission Fee</span>
                    <span className="font-bold text-brand-textPrimary">PKR 500</span>
                  </div>
                  <div className="pt-5 border-t border-brand-blue flex justify-between items-center">
                    <span className="font-black text-brand-textPrimary text-xl">Total Payable</span>
                    <span className="text-3xl font-black text-brand-blue">PKR {calculatedFee + 500}</span>
                  </div>
                  {formData.installments !== '1' && (
                    <div className="flex justify-between text-sm text-brand-textMuted pt-2">
                      <span>Per Installment ({formData.installments} installments)</span>
                      <span className="font-bold text-brand-blue">
                        PKR {Math.ceil((calculatedFee + 500) / parseInt(formData.installments))}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t border-brand-navy">
              <p className="text-brand-textMuted text-sm mb-6 text-center">
                By clicking "Proceed to Submit", you will be asked to review and accept the Terms & Conditions.
              </p>
              <button
                type="submit"
                className="btn-primary px-12 py-5 rounded-2xl font-black text-xl w-full shadow-btn-shadow hover:shadow-2d-hover inline-flex items-center justify-center gap-3"
              >
                Proceed to Submit <ChevronRight size={24} />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
