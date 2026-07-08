import React from 'react';
import { Monitor, Code, BrainCircuit, Cpu, Smartphone, Palette } from 'lucide-react';

export const coursesData = {
  'web-development': {
    id: 'web-development',
    name: 'Web Development',
    icon: <Monitor size={28} />,
    shortDescription: 'Master modern full-stack web development with HTML, CSS, JavaScript, and React.',
    duration: '3 months',
    lessons: 'N/A',
    instructor: 'Isha Naveed',
    fees: {
      Beginner: 7500,
      Advance: 8500,
      Premium: 9000
    },
    totalFee: 'PKR 9,000', // Default display fee (or average)
    about: 'Our Web Development course is designed to take you from a beginner to a professional full-stack developer. You will learn the core technologies of the web (HTML5, CSS3, JavaScript ES6+) and modern frameworks like React.js. Build responsive, dynamic, and interactive web applications from scratch.',
    whyChoose: [
      'Industry-oriented curriculum',
      'Hands-on projects (Portfolio, Business, Restaurant websites)',
      'Live coding sessions',
      'Expert mentors',
      'Placement guidance',
      'Real-world assignments',
      'Certificate upon completion'
    ],
    outline: [
      { title: 'Basics', topics: ['HTML5 Structure & Semantics', 'CSS3 Styling & Animations', 'Responsive Design (Flexbox & Grid)', 'Version Control (Git/GitHub)'] },
      { title: 'Intermediate', topics: ['JavaScript ES6+ Fundamentals', 'DOM Manipulation', 'Asynchronous JavaScript (Promises/Async)', 'API Fetching & Integrations'] },
      { title: 'Advanced', topics: ['React.js Architecture', 'React Hooks (useState, useEffect)', 'React Router & Navigation', 'Capstone Project: Full-Stack App'] }
    ]
  },
  'app-development': {
    id: 'app-development',
    name: 'Flutter Development',
    icon: <Smartphone size={28} />,
    shortDescription: 'Learn cross-platform mobile app development using Flutter and Dart.',
    duration: '3 months',
    lessons: '34',
    instructor: 'Ayesha Khalid',
    fees: {
      Beginner: 10500,
      Advance: 11000,
      Premium: 12000
    },
    totalFee: 'PKR 12,000',
    about: 'Master Flutter and Dart to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    whyChoose: [
      'Cross-platform development skills',
      'UI/UX design principles',
      'State management',
      'API integrations',
      'Real-world app projects'
    ],
    outline: [
      { title: 'Basics', topics: ['Dart Programming Fundamentals', 'Flutter Environment Setup', 'Basic UI Widgets', 'Stateful vs Stateless Widgets'] },
      { title: 'Intermediate', topics: ['Advanced Layouts & Styling', 'Navigation & Routing', 'Form Handling & Validation', 'State Management (Provider/GetX)'] },
      { title: 'Advanced', topics: ['REST API Integration', 'Firebase Auth & Firestore', 'Flutter Architecture', 'Flutter Lifecycle', 'Session Management'] }
    ]
  },
  'artificial-intelligence': {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    icon: <Cpu size={28} />,
    shortDescription: 'Explore the cutting edge of tech: Neural Networks, NLP, Computer Vision, and LLMs.',
    duration: '6 months',
    lessons: 'N/A',
    instructor: 'Umar Attique',
    fees: {
      Beginner: 16500,
      Advance: 17500,
      Premium: 18000
    },
    totalFee: 'PKR 18,000',
    about: 'The ultimate Artificial Intelligence program designed for future tech leaders. Master deep learning, computer vision, natural language processing, and generative AI.',
    whyChoose: [
      'State-of-the-art curriculum including Generative AI',
      'Build your own AI Agents',
      'Learn Prompt Engineering',
      'Extensive Capstone Project',
      'Mentorship from AI Industry Experts',
      'Premium Certification'
    ],
    outline: [
      { title: 'Basics', topics: ['Python for AI', 'Statistics & Probability', 'Exploratory Data Analysis', 'Fundamentals of Machine Learning'] },
      { title: 'Intermediate', topics: ['Deep Learning Fundamentals', 'Neural Networks (CNNs & RNNs)', 'Natural Language Processing (NLP)', 'Computer Vision Basics'] },
      { title: 'Advanced', topics: ['Generative AI Architecture', 'Large Language Models (LLMs)', 'Advanced Prompt Engineering', 'Building Autonomous AI Agents'] }
    ]
  },
  'machine-learning': {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: <BrainCircuit size={28} />,
    shortDescription: 'Learn ML algorithms, data preprocessing, regression, and classification models.',
    duration: '3 months',
    lessons: 'N/A',
    instructor: 'Rohab Tahir',
    fees: {
      Beginner: 7500,
      Advance: 8500,
      Premium: 9000
    },
    totalFee: 'PKR 9,000',
    about: 'Step into the world of Data Science with our comprehensive Machine Learning course. Learn how to build predictive models, analyze data, and implement powerful algorithms.',
    whyChoose: [
      'Math fundamentals included',
      'Extensive Data Preprocessing techniques',
      'In-depth Coverage of Regression and Classification',
      'Hands-on Machine Learning Projects',
      'Expert guidance and interview preparation',
      'Certificate of Completion'
    ],
    outline: [
      { title: 'Basics', topics: ['Python Programming Basics', 'Data Manipulation (NumPy, Pandas)', 'Data Visualization (Matplotlib, Seaborn)'] },
      { title: 'Intermediate', topics: ['Supervised Learning (Regression, Classification)', 'Unsupervised Learning (Clustering, PCA)', 'Model Evaluation Metrics'] },
      { title: 'Advanced', topics: ['Hyperparameter Tuning', 'Ensemble Methods (Random Forest, XGBoost)', 'Model Deployment Basics'] }
    ]
  },
  'graphic-designing': {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    icon: <Palette size={28} />,
    shortDescription: 'Master visual communication using industry-standard design tools.',
    duration: '3 months',
    lessons: 'N/A',
    instructor: 'Aleeza Fatima',
    fees: {
      Beginner: 10500,
      Advance: 11500,
      Premium: 12000
    },
    totalFee: 'PKR 12,000',
    about: 'Learn the principles of design, typography, color theory, and master tools like Adobe Photoshop and Illustrator to create stunning visuals.',
    whyChoose: [
      'Creative project portfolio',
      'Master industry tools',
      'UI/UX basics included',
      'Freelancing guidance'
    ],
    outline: [
      { title: 'Basics', topics: ['Visual Hierarchy & Composition', 'Color Theory & Psychology', 'Typography Fundamentals'] },
      { title: 'Intermediate', topics: ['Adobe Photoshop Mastery', 'Image Manipulation & Retouching', 'Adobe Illustrator Essentials', 'Vector Graphics & Logos'] },
      { title: 'Advanced', topics: ['Advanced Branding & Identity', 'UI/UX Design Principles', 'Social Media Campaigns', 'Professional Portfolio Creation'] }
    ]
  }
};

export const featuredCoursesList = Object.values(coursesData);
