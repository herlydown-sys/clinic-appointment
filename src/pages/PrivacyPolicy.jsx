import React, { useEffect } from 'react';
import { Shield, Lock, EyeOff, FileText, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-brand-light min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E2E8F0] p-8 md:p-12">
        <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-6 mb-8">
          <div className="bg-[#0B5F73]/10 p-4 rounded-full text-[#0B5F73]">
            <Shield size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#0B5F73] mb-1">Privacy Policy</h1>
            <p className="text-[#64748B] font-medium">Protecting your data and educational experience</p>
          </div>
        </div>

        <div className="space-y-8 text-[#64748B] leading-relaxed">
          <p>
            At Xynab Solutions and Care Circle, we are committed to safeguarding the privacy and security of our students, instructors, and staff. This Privacy Policy outlines how we collect, use, and protect your information, particularly focusing on our short courses, lectures, and educational ecosystem.
          </p>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <EyeOff className="text-[#0B5F73]" size={20} />
              1. Lectures and Content Privacy
            </h2>
            <p className="mb-3">
              All live lectures, recorded sessions, course materials, and assignments provided during your enrollment are the exclusive intellectual property of Xynab Solutions.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Unauthorized Distribution:</strong> Students are strictly prohibited from downloading, recording, sharing, or distributing any course content on public forums, social media, or with third parties.</li>
              <li><strong>Confidentiality of Discussions:</strong> Live class discussions, Q&A sessions, and student project presentations must remain confidential to foster a safe learning environment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <UserCheck className="text-[#0B5F73]" size={20} />
              2. Instructors and Teachers Privacy
            </h2>
            <p className="mb-3">
              We highly respect the privacy of our expert instructors. To ensure a professional boundary:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Communication Channels:</strong> All communication with teachers must occur through official platforms (e.g., official Discord, Slack, or Portal).</li>
              <li><strong>Personal Information:</strong> Requesting or sharing an instructor's personal phone number, private email, or social media profile is strictly prohibited.</li>
              <li><strong>Direct Messaging:</strong> Unsolicited direct messages to instructors regarding non-course related matters are not allowed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <Lock className="text-[#0B5F73]" size={20} />
              3. Student Data Protection
            </h2>
            <p className="mb-3">
              Your personal data, including your name, email, contact details, and payment information, is securely stored and only used for administrative and educational purposes.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not sell or rent student data to third-party marketers.</li>
              <li>Your academic progress and project submissions may be used anonymously for quality assurance and institutional improvement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <FileText className="text-[#0B5F73]" size={20} />
              4. Third-Party Tools & Analytics
            </h2>
            <p>
              We may utilize third-party tools (such as Learning Management Systems or video conferencing software) to deliver our courses. These platforms have their own privacy policies, but we ensure that any integrations comply with strict data protection standards to keep your educational journey secure.
            </p>
          </section>

          <div className="mt-10 p-6 bg-[#062F3A]/5 rounded-2xl border border-[#062F3A]/10">
            <h3 className="font-bold text-[#062F3A] mb-2">Contacting the Privacy Team</h3>
            <p className="text-sm">
              If you have any questions or concerns regarding this Privacy Policy or the handling of your data, please contact our administration at <strong>solutionsxynab@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
