
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="bg-[#222533] border-[#333] hover:border-[#9b87f5] transition-all hover:shadow-lg hover:shadow-[#9b87f5]/20">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <span className="text-3xl mr-2">{icon}</span> {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2 text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-[#9b87f5] mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: "💭",
      title: "Премиум кальяны",
      description: "Мы используем только лучшие табаки и фрукты для наших кальянов. Наши мастера помогут подобрать идеальный вкус именно для вас.",
      features: ["Классические миксы", "Авторские сочетания", "Кальяны на фруктах"]
    },
    {
      icon: "🍶",
      title: "Чайная карта",
      description: "Большой выбор чая — от нежных фруктовых до терпких травяных. Идеальное дополнение к кальяну.",
      features: ["Фруктовые чаи", "Классические сорта", "Травяные сборы"]
    },
    {
      icon: "🫗",
      title: "Домашние настойки",
      description: "Домашние настойки с неповторимым вкусом — пробуйте и удивляйтесь! Наши бармены готовят их по особым рецептам.",
      features: ["Фруктовые миксы", "Ягодные сочетания", "Пряные напитки"]
    },
    {
      icon: "🎮",
      title: "Развлечения",
      description: "Не скучайте! У нас есть все для интересного вечера: настольные игры, PlayStation и многое другое.",
      features: ["Большой выбор настольных игр", "PlayStation с популярными играми", "Комфортная зона для общения"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#9b87f5]">Н</span>аши услуги
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              features={service.features} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
