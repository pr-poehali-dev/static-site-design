import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import ClimateSection from "@/components/ClimateSection";
import EconomicsSection from "@/components/EconomicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfoCards />
      <ClimateSection />
      <EconomicsSection />
      <Footer />
    </div>
  );
};

export default Index;
