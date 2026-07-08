import React, { useEffect } from 'react';
import { Search, Code2, Bot, Smartphone, Share2, ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'seo',
      title: 'SEO',
      icon: <Search size={32} />,
      overview: 'Boost your digital visibility and drive organic traffic with advanced Search Engine Optimization strategies.',
      benefits: ['Higher search rankings', 'Targeted audience reach', 'Improved brand authority']
    },
    {
      id: 'full-stack',
      title: 'Full Stack Development',
      icon: <Code2 size={32} />,
      overview: 'End-to-end web solutions built with modern frameworks, ensuring scalable and secure applications.',
      benefits: ['Custom web applications', 'Scalable architecture', 'Seamless user experience']
    },
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      icon: <Bot size={32} />,
      overview: 'Automate workflows and enhance customer interaction using intelligent AI-powered agents.',
      benefits: ['24/7 automated support', 'Reduced operational costs', 'Data-driven insights']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      icon: <Smartphone size={32} />,
      overview: 'High-performance native and cross-platform mobile applications for iOS and Android.',
      benefits: ['Cross-platform compatibility', 'Intuitive UI/UX', 'App Store deployment']
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: <Share2 size={32} />,
      overview: 'Engaging content and targeted campaigns to build your brand presence across social networks.',
      benefits: ['Increased brand awareness', 'Community engagement', 'Lead generation']
    }
  ];

  return (
    <div className="w-full bg-brand-darkest min-h-screen pb-20">
      <div className="relative pt-40 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Services background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D34]/88 via-[#0B5F73]/72 to-[#0B1D34]/88"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white font-bold text-xs mb-5 uppercase tracking-widest border border-white/20">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg" style={{textShadow:'0 2px 18px rgba(0,0,0,0.8)'}}>Our Premium <span className="text-[#12B5CB]">Services</span></h1>
          <p className="text-xl text-white drop-shadow" style={{textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>
            Beyond education, Xynab Solutions offers top-tier digital services to help businesses thrive in the modern landscape.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-brand-deepNavy rounded-3xl p-8 shadow-lg border border-brand-navy hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-brand-textMuted mb-4">{service.title}</h2>
              <p className="text-brand-textMuted mb-6 leading-relaxed">
                {service.overview}
              </p>
              
              <div className="border-t border-brand-navy pt-6 mt-auto">
                <h3 className="text-sm font-bold text-brand-textMuted uppercase tracking-wider mb-3">Business Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-brand-textMuted before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:mr-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-semibold flex items-center group-hover:text-primary-dark transition-colors">
                  Discuss Your Project <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
