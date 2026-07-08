import React, { useEffect } from 'react';
import { ExternalLink, Layers } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Restaurant Ordering System',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      description: 'A comprehensive full-stack solution for restaurants to manage online orders, menu items, and table reservations in real-time.',
      features: ['Real-time order tracking', 'Admin dashboard', 'Payment gateway integration'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Clinic Appointment System',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Vue.js'],
      description: 'A healthcare portal connecting patients with doctors, featuring automated scheduling and electronic health records management.',
      features: ['Doctor availability calendar', 'Automated email reminders', 'Patient history tracking'],
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Salon Appointment System',
      techStack: ['React Native', 'Firebase', 'Express'],
      description: 'A mobile-first application for salons allowing customers to book services, select stylists, and manage loyalty points.',
      features: ['Service catalog', 'Stylist portfolios', 'In-app notifications'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Automated Chatbot System',
      techStack: ['Python', 'OpenAI API', 'FastAPI', 'React'],
      description: 'An intelligent customer support agent capable of resolving common queries, routing complex issues, and learning from interactions.',
      features: ['Natural language understanding', 'Ticket routing', 'Analytics dashboard'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'School Marketing Package',
      techStack: ['Canva', 'Photoshop'],
      description: 'Designed admission campaigns, event posters, certificates, and social media graphics for educational institutes.',
      features: ['Admission posters', 'Event announcements', 'Certificates', 'Award graphics'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      techStack: ['Adobe Illustrator', 'Photoshop', 'Canva'],
      description: 'A complete visual identity designed to help businesses establish a professional and memorable brand.',
      features: ['Custom Logo Design', 'Brand Color Palette', 'Typography Selection', 'Brand Guidelines'],
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen pb-20">
      {/* Hero Section with Background Image */}
      <div className="relative pt-40 pb-24 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
            alt="Portfolio background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/92 via-[#00A6B4]/60 to-[#0B1D34]/92"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Our <span className="text-[#00A6B4]">Projects</span></h1>
          <p className="text-xl text-white/80">
            Explore our featured projects demonstrating expertise across various domains and technology stacks.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 group flex flex-col h-full hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-[#00A6B4] text-white text-[10px] font-bold px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                <div className="flex items-center gap-2 text-[#FF9F1C] text-xs font-bold tracking-wider uppercase mb-3">
                  <Layers size={14} /> Project {project.id}
                </div>
                <h2 className="text-2xl font-bold text-[#0B1D34] mb-3 group-hover:text-[#00A6B4] transition-colors">{project.title}</h2>
                <p className="text-[#64748B] mb-6 flex-grow leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-xs font-bold text-[#0B1D34] mb-3 uppercase tracking-wider">Key Features:</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-[#64748B] flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#00A6B4] before:rounded-full before:mr-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
