
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import SolutionsSection from '../components/SolutionsSection';
import TechnologySection from '../components/TechnologySection';
import HowItWorksSection from '../components/HowItWorksSection';
import ContactSection from '../components/ContactSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ProgressIndicator from '../components/ProgressIndicator';

const Index = () => {
  useEffect(() => {
    // Add a custom style for the scanning animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scan {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          transform: translateY(100%);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ProgressIndicator />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <SolutionsSection />
      <TechnologySection />
      <HowItWorksSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
