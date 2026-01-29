import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollLine from "@/components/ScrollLine";
import FloatingDots from "@/components/FloatingDots";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ScrollLine />
      <FloatingDots />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
