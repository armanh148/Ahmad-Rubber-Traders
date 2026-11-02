import { useEffect } from 'react';
import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExcellenceSection from './components/ExcellenceSection';
import SolutionsSection from './components/SolutionsSection';
import TeamSection from './components/TeamSection';
import ProductsGrid from './components/ProductsGrid';
import CTASection from './components/BulkCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

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

/**
 * Tracks the pointer inside every `[data-spotlight]` card so the
 * CSS radial highlight follows the cursor.
 */
function useCardSpotlight() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('[data-spotlight]'));
    if (cards.length === 0) return;

    const cleanups = cards.map((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
      };
      card.addEventListener('pointermove', move);
      return () => card.removeEventListener('pointermove', move);
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

export default function App() {
  useScrollReveal();
  useCardSpotlight();

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased selection:bg-orange-500 selection:text-white">
      <TopInfoBar />
      <Navbar />
      <main>
        <HeroSection />
        <ExcellenceSection />
        <SolutionsSection />
        <TeamSection />
        <ProductsGrid />
        <CTASection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
