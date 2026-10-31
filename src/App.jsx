import { useEffect } from 'react';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import TeamSection from './components/TeamSection';
import ProductsGrid from './components/ProductsGrid';
import CTASection from './components/BulkCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

/**
 * Observes every `[data-reveal]` element and adds `.reveal-in`
 * the first time it enters the viewport. Delay is controlled per
 * element with the `--reveal-delay` CSS variable.
 */
function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <div className="bg-white text-zinc-900 min-h-screen font-sans antialiased selection:bg-orange-500 selection:text-white">
      <TopInfoBar />
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <TeamSection />
        <ProductsGrid />
        <CTASection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
