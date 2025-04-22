
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-[#9b87f5]">S</span>moking <span className="text-[#9b87f5]">C</span>lub
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300">
          Место, где вы можете расслабиться, насладиться атмосферой комфорта и дымным кальяном
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg">
            Забронировать кальян
          </Button>
          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 px-8 py-6 text-lg">
            Наше меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
