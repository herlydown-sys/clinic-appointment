import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-brand-deepNavy rounded-2xl p-6 shadow-sm border border-brand-navy hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
      
      <h3 className="text-xl font-bold text-[#0B5F73] mb-3 flex items-center gap-3">
        <span className="text-[#0B5F73] group-hover:scale-110 transition-transform">{course.icon}</span>
        {course.name}
      </h3>
      <p className="text-brand-textMuted text-sm mb-6 flex-grow leading-relaxed">
        {course.shortDescription}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-navy">
        <div className="flex items-center text-sm font-medium text-brand-textMuted bg-brand-darkest px-3 py-1.5 rounded-full">
          <Clock size={14} className="mr-1.5 text-primary" /> {course.duration}
        </div>
        <Link 
          to={`/course/${course.id}`} 
          className="text-primary font-semibold text-sm flex items-center group-hover:text-primary-dark transition-colors"
        >
          Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
