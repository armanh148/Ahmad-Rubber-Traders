import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import SolutionsSection from './components/SolutionsSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ClientReviewsSection from './components/ClientReviewsSection';
import IndustriesSection from './components/IndustriesSection';
import BulkCalculator from './components/BulkCalculator';
import InsightsSection from './components/InsightsSection';
import CtaBannerSection from './components/CtaBannerSection';
import ModernFooter from './components/ModernFooter';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Top reading scroll progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. High-performance IntersectionObserver for scroll-triggered reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-sky-500 selection:text-white relative">
      {/* Top Floating Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600 z-[100] transition-all duration-150 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <main>
        <HeroSection />
        <MissionSection />
        <SolutionsSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ClientReviewsSection />
        <IndustriesSection />
        <BulkCalculator />
        <InsightsSection />
        <CtaBannerSection />
      </main>
      <ModernFooter />
      <FloatingActions />
    </div>
  );
}
