
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-6">Наш адрес</h3>
      <div className="flex items-start mb-4">
        <MapPin className="h-6 w-6 text-[#9b87f5] mr-3 mt-1" />
        <div>
          <p className="text-lg font-medium">ул. Федерации д. 6</p>
          <p className="text-gray-400">г. Ульяновск</p>
        </div>
      </div>
      
      <div className="flex items-start mb-4">
        <Phone className="h-6 w-6 text-[#9b87f5] mr-3 mt-1" />
        <div>
          <p className="text-lg font-medium">+7 (936) 219-16-30</p>
          <p className="text-gray-400">Ежедневно с 16:00 до 01:00</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="h-6 w-6 text-[#9b87f5] mr-3 mt-1" />
        <div>
          <p className="text-lg font-medium">Время работы:</p>
          <p className="text-gray-400">Пн-Пт: с 16:00 до 01:00</p>
          <p className="text-gray-400">Сб-Вс: с 16:00 до 02:00</p>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Мы в соцсетях</h3>
      <div className="flex space-x-4">
        <a href="#" className="h-12 w-12 rounded-full bg-[#222533] flex items-center justify-center hover:bg-[#9b87f5] transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="#" className="h-12 w-12 rounded-full bg-[#222533] flex items-center justify-center hover:bg-[#9b87f5] transition-colors">
          <span className="text-2xl">📱</span>
        </a>
        <a href="#" className="h-12 w-12 rounded-full bg-[#222533] flex items-center justify-center hover:bg-[#9b87f5] transition-colors">
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </div>
  );
};

const BookingSection = () => {
  return (
    <div className="p-4 bg-[#1A1F2C] rounded-lg">
      <h3 className="text-xl font-bold mb-3">Забронировать стол</h3>
      <p className="text-gray-400 mb-4">
        Хотите забронировать стол или заказать кальян? Позвоните нам или оставьте свой номер,
        и мы свяжемся с вами.
      </p>
      <div className="flex items-center">
        <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 mr-4">
          Позвонить
        </Button>
        <span className="text-gray-400">#ЛаунжКальянная #МафияПоСубботам #ЧайИНастолки</span>
      </div>
    </div>
  );
};

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#9b87f5]">К</span>онтакты
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>
          
          <div className="bg-[#222533] p-6 rounded-lg border border-[#333]">
            <div className="aspect-video bg-gray-800 rounded mb-6 flex items-center justify-center">
              <p className="text-gray-400 text-center p-4">Здесь будет карта с местоположением</p>
            </div>
            <BookingSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
