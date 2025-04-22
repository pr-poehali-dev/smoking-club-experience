
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MafiaSection from "@/components/MafiaSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white font-sans">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MafiaSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
