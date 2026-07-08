import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I apply for a course?",
    answer: "Visit 'Admissions → Admission Form' from the navigation menu. Fill out your personal and academic details, select your desired course and category, then click 'Proceed to Submit'. You will be asked to read and accept the Terms & Conditions before your form is submitted."
  },
  {
    question: "What is the admission fee?",
    answer: "A standard admission fee of PKR 500 applies to all courses. This is a one-time fee in addition to the course fee."
  },
  {
    question: "What are the available courses?",
    answer: "We offer 5 professional courses: Web Development (3 months), Artificial Intelligence (6 months), Machine Learning (3 months), Flutter Development (3 months), and Graphic Designing (3 months). Each course has Beginner, Advance, and Premium tiers."
  },
  {
    question: "What is the tuition fee structure?",
    answer: "Web Development: PKR 7,500 – 9,000 | Artificial Intelligence: PKR 16,500 – 18,000 | Machine Learning: PKR 7,500 – 9,000 | Flutter Development: PKR 10,500 – 12,000 | Graphic Designing: PKR 10,500 – 12,000. Fees vary by Beginner, Advance, and Premium tiers."
  },
  {
    question: "Can I pay the fee in installments?",
    answer: "Yes! You can choose 1, 2, or 3 installments during the enrollment form. The total amount (course fee + PKR 500 admission fee) is divided equally. Course fees must be paid on or before the 5th of each month."
  },
  {
    question: "What happens if I miss the fee payment deadline?",
    answer: "Course fees must be paid on or before the 5th of each month. If payment is not received by the due date, a late fee of PKR 200 per day will be charged until the outstanding amount is cleared."
  },
  {
    question: "Do you offer internships?",
    answer: "Yes! Students who enroll in the Premium category of any course are eligible for our exclusive internship programs. This is a great opportunity to gain real-world experience before graduation."
  },
  {
    question: "Are classes held online or physically?",
    answer: "All classes are conducted 100% online. You can attend live sessions from anywhere in Pakistan using Zoom or Google Meet. Recordings are also provided for enrolled students."
  },
  {
    question: "Can I contact teachers directly?",
    answer: "No. Students are not allowed to send personal messages (DMs) to teachers or staff members. All queries must be sent through official email or the designated discussion group. Teachers respond through official channels only."
  },
  {
    question: "What happens if I miss a class?",
    answer: "Students are expected to attend classes regularly and participate actively. If you cannot attend a class, please inform the instructor in advance whenever possible. Recorded sessions are available for enrolled students."
  },
  {
    question: "Can I share course materials with friends?",
    answer: "No. Course materials, recorded lectures, notes, and assignments are strictly for enrolled students. Recording, copying, distributing, or sharing course content without permission is strictly prohibited and may result in suspension."
  },
  {
    question: "How do I contact Xynab Solutions?",
    answer: "You can reach us via Email: solutionsxynab@gmail.com, Phone/WhatsApp: +923218593646. Working hours: Monday–Friday 9 AM–6 PM, Saturday 10 AM–2 PM. You can also send us a message through the Contact Us page."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-brand-darkest min-h-screen">

      {/* Hero with Background Image */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="FAQ background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/88 via-[#0B5F73]/72 to-[#0B1D34]/88"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
            Got Questions?
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 drop-shadow-lg" style={{textShadow:'0 2px 18px rgba(0,0,0,0.8)'}}>
            Frequently Asked Questions
          </h1>
          <p className="text-white text-lg drop-shadow" style={{textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>
            Find answers to common questions about our courses, admissions, fees, and policies.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4 md:px-8 bg-brand-darkest">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-brand-deepNavy border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-brand-blue shadow-lg' : 'border-brand-navy'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className={`font-bold text-lg leading-snug ${openIndex === idx ? 'text-brand-blue' : 'text-brand-textPrimary'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-brand-blue text-white' : 'bg-brand-navy text-brand-textMuted'}`}>
                  {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-brand-textMuted leading-relaxed border-t border-brand-navy pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="max-w-3xl mx-auto mt-16 text-center bg-brand-deepNavy border border-brand-navy rounded-3xl p-10">
          <h3 className="text-2xl font-black text-brand-textPrimary mb-3">Still have questions?</h3>
          <p className="text-brand-textMuted mb-6">Our team is ready to help you. Reach out on WhatsApp or email us anytime.</p>
          <a
            href="https://wa.me/923218593646"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

export default Faq;
