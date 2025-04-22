
const Footer = () => {
  return (
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
  );
};

export default Footer;
