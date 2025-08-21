
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import TransformationSection from '@/components/TransformationSection';
import PortfolioSection from '@/components/PortfolioSection';
// import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ChatBox from '@/components/ChatBox';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ServicesSection />
      <ProcessSection />
      <TransformationSection />
      <PortfolioSection />
      {/* <PricingSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
      <ChatBox />
    </div>
  );
};

export default Index;
