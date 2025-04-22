
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Coffee, Game, Gamepad2, Clock, MapPin, Phone, Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white font-sans">
      {/* Верхний навигационный бар */}
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

      {/* Главная секция - hero */}
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

      {/* О клубе */}
      <section id="about" className="py-20 bg-[#222533]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b87f5]">О</span> нашем клубе
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Smoking Club — это не просто кальянная, а настоящий клуб для отдыха и развлечений. Мы создали уютное место, 
                где вы можете насладиться качественным кальяном, поиграть в настольные игры, PlayStation, 
                и попробовать наши фирменные чаи и настойки.
              </p>
              <p className="text-lg text-gray-300">
                Наша особая гордость — игры в Мафию по субботам, которые собирают любителей этой игры со всего города.
                Приходите к нам и становитесь частью нашего дружного сообщества!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#1A1F2C] border-[#333]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Coffee className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Премиум кальяны</h3>
                  <p className="text-gray-400">Лучшие табаки и профессиональные кальянщики</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-[#333]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Game className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Настольные игры</h3>
                  <p className="text-gray-400">Большой выбор игр на любой вкус</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-[#333]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Gamepad2 className="h-12 w-12 text-[#9b87f5] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">PlayStation</h3>
                  <p className="text-gray-400">Захватывающие баттлы с друзьями</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-[#333]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">🎭</span>
                  <h3 className="text-xl font-semibold mb-2">Мафия</h3>
                  <p className="text-gray-400">Игры каждую субботу</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b87f5]">Н</span>аши услуги
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#222533] border-[#333] hover:border-[#9b87f5] transition-all hover:shadow-lg hover:shadow-[#9b87f5]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">💭</span> Премиум кальяны
                </h3>
                <p className="text-gray-300 mb-4">
                  Мы используем только лучшие табаки и фрукты для наших кальянов. Наши мастера помогут
                  подобрать идеальный вкус именно для вас.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Классические миксы
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Авторские сочетания
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Кальяны на фруктах
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#222533] border-[#333] hover:border-[#9b87f5] transition-all hover:shadow-lg hover:shadow-[#9b87f5]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🍶</span> Чайная карта
                </h3>
                <p className="text-gray-300 mb-4">
                  Большой выбор чая — от нежных фруктовых до терпких травяных. Идеальное дополнение к кальяну.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Фруктовые чаи
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Классические сорта
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Травяные сборы
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#222533] border-[#333] hover:border-[#9b87f5] transition-all hover:shadow-lg hover:shadow-[#9b87f5]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🫗</span> Домашние настойки
                </h3>
                <p className="text-gray-300 mb-4">
                  Домашние настойки с неповторимым вкусом — пробуйте и удивляйтесь! Наши бармены готовят их по
                  особым рецептам.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Фруктовые миксы
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Ягодные сочетания
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Пряные напитки
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#222533] border-[#333] hover:border-[#9b87f5] transition-all hover:shadow-lg hover:shadow-[#9b87f5]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🎮</span> Развлечения
                </h3>
                <p className="text-gray-300 mb-4">
                  Не скучайте! У нас есть все для интересного вечера: настольные игры, PlayStation и многое другое.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Большой выбор настольных игр
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> PlayStation с популярными играми
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#9b87f5] mr-2">•</span> Комфортная зона для общения
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Мафия */}
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

      {/* Контакты */}
      <section id="contacts" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-[#9b87f5]">К</span>онтакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
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
            </div>
            
            <div className="bg-[#222533] p-6 rounded-lg border border-[#333]">
              <div className="aspect-video bg-gray-800 rounded mb-6 flex items-center justify-center">
                <p className="text-gray-400 text-center p-4">Здесь будет карта с местоположением</p>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 border-t border-[#333] bg-[#1A1F2C]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-[#D6BCFA]">Smoking Club</h2>
              <p className="text-gray-400 mt-1">Лаунж кальянная в Ульяновске</p>
            </div>
            
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center gap-6">
                <li><a href="#about" className="text-gray-300 hover:text-[#9b87f5]">О клубе</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#9b87f5]">Услуги</a></li>
                <li><a href="#mafia" className="text-gray-300 hover:text-[#9b87f5]">Мафия</a></li>
                <li><a href="#contacts" className="text-gray-300 hover:text-[#9b87f5]">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <p className="text-gray-400">© 2023 Smoking Club. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
