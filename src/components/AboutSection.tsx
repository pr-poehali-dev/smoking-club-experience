
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Gamepad, Gamepad2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Coffee className="h-12 w-12 text-[#9b87f5] mb-4" />,
      title: "Премиум кальяны",
      description: "Лучшие табаки и профессиональные кальянщики"
    },
    {
      icon: <Gamepad className="h-12 w-12 text-[#9b87f5] mb-4" />,
      title: "Настольные игры",
      description: "Большой выбор игр на любой вкус"
    },
    {
      icon: <Gamepad2 className="h-12 w-12 text-[#9b87f5] mb-4" />,
      title: "PlayStation",
      description: "Захватывающие баттлы с друзьями"
    },
    {
      icon: <span className="text-4xl mb-2">🎭</span>,
      title: "Мафия",
      description: "Игры каждую субботу"
    }
  ];

  return (
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
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#1A1F2C] border-[#333]">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
