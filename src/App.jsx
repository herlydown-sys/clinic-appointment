import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import EnrollmentForm from './components/EnrollmentForm';
import PricingPlan from './pages/PricingPlan';
import Faq from './pages/Faq';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Teachers from './pages/Teachers';
import TeacherOutline from './pages/TeacherOutline';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bgBase font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/enroll" element={<EnrollmentForm />} />
            <Route path="/pricing" element={<PricingPlan />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/admissions/:section?" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:courseId" element={<TeacherOutline />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
