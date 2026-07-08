import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ChevronRight, X, CheckCircle2 } from 'lucide-react';

const events = [
  {
    id: 1,
    type: 'Seminar',
    title: 'AI & The Future of Work',
    description: 'An interactive seminar exploring how Artificial Intelligence is transforming industries and what skills you need to stay ahead.',
    date: 'July 20, 2026',
    time: '3:00 PM – 5:00 PM',
    location: 'Online (Zoom)',
    seats: 100,
    tag: 'Featured',
    tagColor: 'bg-[#0B5F73] text-white',
    color: 'from-[#0B5F73] to-[#084554]',
  },
  {
    id: 2,
    type: 'Workshop',
    title: 'Web Development Bootcamp',
    description: 'A hands-on full-day workshop covering HTML, CSS, JavaScript fundamentals. Build your first website from scratch in a single day!',
    date: 'August 2, 2026',
    time: '10:00 AM – 4:00 PM',
    location: 'Online (Google Meet)',
    seats: 50,
    tag: 'Workshop',
    tagColor: 'bg-[#12B5CB] text-white',
    color: 'from-[#12B5CB] to-[#0E90A3]',
  },
  {
    id: 3,
    type: 'Seminar',
    title: 'Freelancing & Career Growth',
    description: 'Learn how to start freelancing as a developer or designer. Topics include portfolio building, client communication, and pricing your services.',
    date: 'August 15, 2026',
    time: '4:00 PM – 6:00 PM',
    location: 'Online (Zoom)',
    seats: 150,
    tag: 'Open to All',
    tagColor: 'bg-[#0F52BA] text-white',
    color: 'from-[#0F52BA] to-[#0A3D8C]',
  },
  {
    id: 4,
    type: 'Workshop',
    title: 'Graphic Design Masterclass',
    description: 'A professional workshop on logo design, brand identity, and social media graphics using Adobe Photoshop and Illustrator.',
    date: 'September 5, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'Online (Zoom)',
    seats: 60,
    tag: 'Workshop',
    tagColor: 'bg-[#F2B544] text-[#E5E7EB]',
    color: 'from-[#F2B544] to-[#C9912E]',
  },
  {
    id: 5,
    type: 'Seminar',
    title: 'Machine Learning for Beginners',
    description: 'A beginner-friendly introduction to Machine Learning. No prior experience required. Understand the basics and see live demos of real ML models.',
    date: 'September 18, 2026',
    time: '3:00 PM – 5:30 PM',
    location: 'Online (Google Meet)',
    seats: 120,
    tag: 'Beginner',
    tagColor: 'bg-[#E5E7EB] text-[#E5E7EB]',
    color: 'from-[#E5E7EB] to-[#D1D5DB]',
  },
  {
    id: 6,
    type: 'Internship Drive',
    title: 'Xynab Internship Orientation',
    description: 'Exclusive orientation session for Premium course students. Learn about internship roles, project assignments, and evaluation criteria.',
    date: 'October 1, 2026',
    time: '5:00 PM – 6:30 PM',
    location: 'Online (Zoom)',
    seats: 30,
    tag: 'Premium Only',
    tagColor: 'bg-[#0B5F73] text-white',
    color: 'from-[#0B5F73] to-[#084554]',
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, this data will be sent to Google Sheets
    console.log('Form Data to be sent to Google Sheets:', {
      event: selectedEvent.title,
      ...formData
    });
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-brand-darkest min-h-screen relative">

      {/* Hero with Background Image */}
      <section className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
            alt="Events background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/70 via-[#0B5F73]/50 to-[#0B1D34]/70"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
            What's Happening
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Upcoming <span className="text-[#12B5CB]">Events</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with our latest seminars, workshops, and internship drives. All events are online and open to registered students.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-10 px-4 md:px-8 bg-brand-darkest">
        <div className="max-w-7xl mx-auto">

          {/* Filter Badges */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {['All Events', 'Seminars', 'Workshops', 'Internship'].map((f) => (
              <span key={f} className="px-5 py-2 rounded-full bg-brand-deepNavy border border-brand-navy text-brand-textMuted text-sm font-bold cursor-pointer hover:border-brand-blue hover:text-brand-blue transition-colors">
                {f}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="brand-card bg-brand-deepNavy flex flex-col group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                {/* Top Color Banner */}
                <div className={`bg-gradient-to-r ${event.color} h-3 w-full`}></div>

                <div className="p-8 flex flex-col flex-grow">
                  {/* Type & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-blue">{event.type}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${event.tagColor}`}>{event.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-brand-textPrimary mb-3 leading-snug">{event.title}</h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>

                  {/* Meta */}
                  <div className="flex flex-col gap-2.5 mb-6 text-sm text-brand-textMuted">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                      <span className="font-medium">Project-Based Learning</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                      <span className="font-medium">Expert Instructors</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                      <span className="font-medium">Flexible Schedule</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                      <span className="font-medium">Certificate Upon Completion</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(event)}
                    className="btn-primary w-full text-center py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 mt-auto"
                  >
                    Register Now <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 px-4 md:px-8 bg-brand-deepNavy border-t border-brand-navy text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-brand-textPrimary mb-5">
            Don't Miss the Next Event
          </h2>
          <p className="text-brand-textMuted mb-8 leading-relaxed">
            Subscribe or contact us on WhatsApp to receive event announcements directly. All events are free for enrolled students.
          </p>
          <a
            href="https://wa.me/923218593646"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 rounded-2xl font-bold inline-flex items-center gap-2"
          >
            Stay Updated on WhatsApp <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-darkest/80 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-brand-deepNavy border border-brand-navy rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative">
            
            {/* Close btn */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-brand-textMuted hover:text-white bg-brand-navy hover:bg-brand-blue rounded-full p-1.5 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className={`bg-gradient-to-r ${selectedEvent.color} h-2 w-full`}></div>
            
            <div className="p-8">
              <h3 className="text-2xl font-black text-brand-textPrimary mb-2">Event Registration</h3>
              <p className="text-brand-blue font-bold text-sm mb-6 pb-6 border-b border-brand-navy">
                {selectedEvent.title} <span className="text-brand-textMuted block font-medium mt-1">{selectedEvent.date} • {selectedEvent.time}</span>
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-textPrimary mb-3">Registration Successful!</h4>
                  <p className="text-brand-textMuted mb-8 leading-relaxed">
                    Thank you for registering. Your details have been saved. We will contact you soon with joining instructions.
                  </p>
                  <button onClick={closeModal} className="btn-secondary px-8 py-2.5 rounded-xl">
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-textMuted uppercase tracking-wider mb-2">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-brand-darkest border border-brand-navy rounded-xl px-4 py-3 text-brand-textPrimary focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="03XX XXXXXXX"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5 rounded-xl font-bold mt-4 shadow-btn-shadow">
                    Submit Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;
