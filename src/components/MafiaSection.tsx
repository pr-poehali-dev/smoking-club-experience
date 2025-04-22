
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const MafiaSection = () => {
  return (
    <section id="mafia" className="py-20 bg-[#222533]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#9b87f5]">И</span>граем в Мафию
              <span className="text-[#9b87f5]">!</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              По субботам мы проводим захватывающие игры в Мафию с профессиональным ведущим.
              Это отличный способ провести вечер, познакомиться с новыми людьми и проверить свою
              интуицию!
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Наши правила:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2 mt-1">•</span> 
                  <span>Количество мест ограничено — бронируйте заранее</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2 mt-1">•</span> 
                  <span>Игры начинаются в 19:00 каждую субботу</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2 mt-1">•</span> 
                  <span>Специальные призы для победителей</span>
                </li>
              </ul>
            </div>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6">
              Записаться на игру
            </Button>
          </div>
          <div className="md:w-1/2 bg-[#1A1F2C] rounded-lg p-8 border border-[#333]">
            <div className="aspect-video bg-[url('/placeholder.svg')] bg-cover bg-center rounded mb-6"></div>
            <h3 className="text-2xl font-bold mb-3">Ближайшая игра:</h3>
            <div className="flex items-center text-gray-300 mb-4">
              <Clock className="h-5 w-5 mr-2 text-[#9b87f5]" />
              <span>Суббота, 19:00</span>
            </div>
            <p className="text-gray-300 mb-4">
              Тема: Классическая мафия с дополнительными ролями
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#9b87f5] font-semibold">Осталось мест: 5/12</span>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MafiaSection;
