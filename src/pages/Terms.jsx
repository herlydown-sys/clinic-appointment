import React, { useEffect } from 'react';
import { BookOpen, AlertTriangle, MessageSquare, ShieldAlert, FileX, Users } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-brand-light min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-[#E2E8F0] p-8 md:p-12">
        <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-6 mb-8">
          <div className="bg-[#0B5F73]/10 p-4 rounded-full text-[#0B5F73]">
            <BookOpen size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-[#0B5F73] mb-1">Terms of Service</h1>
            <p className="text-[#64748B] font-medium">Institutional Guidelines and Policies</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-[#64748B] leading-relaxed space-y-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800 text-sm font-medium">
            <AlertTriangle className="flex-shrink-0 mt-0.5" size={20} />
            <p>Students must read these terms and conditions carefully before applying and submitting the application form.</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <MessageSquare className="text-[#0B5F73]" size={20} />
              1. Communication Guidelines
            </h2>
            <p className="mb-3">
              Students are not allowed to send personal messages (DMs) to teachers or staff members. If you have any questions or need assistance, please send an email or ask your question in the official discussion group or communication channel. Teachers will respond to queries through these official channels.
            </p>
            <p>
              All students must communicate respectfully with teachers and fellow students. The use of abusive, offensive, discriminatory, threatening, or inappropriate language in any group or platform is strictly prohibited. Harassment, bullying, or disrespectful behavior will not be tolerated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <ShieldAlert className="text-[#0B5F73]" size={20} />
              2. Privacy and Confidentiality
            </h2>
            <p className="mb-3">
              Students are not permitted to request, collect, or share the personal information of any teacher or staff member, including personal phone numbers, home addresses, social media accounts, personal email addresses, or any other private information. Teachers also reserve the right to keep their personal information confidential.
            </p>
            <p>
              Any student who sends inappropriate personal messages, behaves unprofessionally, or attempts to contact teachers outside the official communication channels may face disciplinary action. Serious violations may result in immediate removal from the course without prior warning.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <FileX className="text-[#0B5F73]" size={20} />
              3. Academic Integrity & Course Materials
            </h2>
            <p className="mb-3">
              Students must submit their own work. Copying assignments, cheating, plagiarism, or sharing solutions during assessments is strictly prohibited.
            </p>
            <p>
              Course materials, recorded lectures, notes, assignments, and any learning resources provided by the academy are for enrolled students only. Recording, copying, distributing, or sharing course content without permission is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3 flex items-center gap-2">
              <Users className="text-[#0B5F73]" size={20} />
              4. Community & Discussion Groups
            </h2>
            <p className="mb-3">
              Discussion groups are for educational purposes only. Avoid spam, advertisements, promotions, political discussions, religious debates, or unrelated conversations. Keep all discussions focused on the course material.
            </p>
            <p>
              Students must not share screenshots, recordings, personal information, or private conversations of other students without their consent. Treat everyone with respect regardless of their background, gender, religion, nationality, or experience level to maintain a friendly, professional, and supportive learning environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#062F3A] mb-3">
              5. Fees and Attendance
            </h2>
            <p className="mb-3">
              Course fees must be paid on or before the 5th of each month. If payment is not received by the due date, a late fee of PKR 200 per day will be charged until the outstanding amount is cleared.
            </p>
            <p>
              Students are expected to attend classes regularly and participate actively. If you are unable to attend a class, please inform the instructor in advance whenever possible. The academy reserves the right to issue warnings, suspend access, or permanently remove any student who violates these rules or disrupts the learning environment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
