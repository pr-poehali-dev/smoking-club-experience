
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1A1F2C]/80 border-b border-[#333] py-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#D6BCFA]">Smoking Club</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-[#9b87f5] transition">О клубе</a>
          <a href="#services" className="hover:text-[#9b87f5] transition">Услуги</a>
          <a href="#mafia" className="hover:text-[#9b87f5] transition">Мафия</a>
          <a href="#contacts" className="hover:text-[#9b87f5] transition">Контакты</a>
        </nav>
        <Button variant="outline" className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10">
          Забронировать
        </Button>
      </div>
    </header>
  );
};

export default Header;
