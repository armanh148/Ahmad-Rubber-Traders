import TopInfoBar from './components/TopInfoBar';
import Navbar from './components/Navbar';
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
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
      <TopInfoBar />
      <Navbar />
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
