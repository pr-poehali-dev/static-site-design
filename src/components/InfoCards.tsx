import Icon from "@/components/ui/icon";

const InfoCards = () => {
  const cards = [
    {
      title: "ИСТОРИЯ",
      subtitle: "Богатое культурное наследие",
      icon: "ScrollText",
      details: ["Основан в XIX веке", "1000+ лет истории"],
      bgColor: "bg-yalta-light-cream",
    },
    {
      title: "НАСЕЛЕНИЕ",
      subtitle: "Многонациональный город",
      icon: "Users",
      details: ["145 тыс человек", "20+ национальностей", "98% грамотность"],
      bgColor: "bg-yalta-light-cream",
    },
    {
      title: "РАСПОЛОЖЕНИЕ",
      subtitle: "Южный берег Крыма",
      icon: "MapPin",
      details: [
        "На берегу Чёрного моря",
        "между 44°29' с.ш. и 34°10' в.д.",
        "В 80 км от Симферополя",
      ],
      bgColor: "bg-yalta-light-cream",
    },
  ];

  return (
    <section className="relative py-16 bg-yalta-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yalta-cream mb-4">
            ОБЩАЯ ИНФОРМАЦИЯ
          </h2>
          <div className="flex justify-center mb-8">
            <div className="bg-yalta-cream p-4 rounded-lg">
              <Icon name="FileCheck" size={48} className="text-yalta-dark" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-6 rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300`}
            >
              <div className="flex items-center mb-4">
                <Icon
                  name={card.icon as any}
                  size={24}
                  className="text-yalta-dark mr-3"
                />
                <h3 className="text-lg font-bold text-yalta-dark">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-yalta-medium mb-4">{card.subtitle}</p>
              <ul className="space-y-2">
                {card.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-yalta-dark flex items-center"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-yalta-medium"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Декоративные элементы */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-16 border-2 border-yalta-terracotta rounded-full flex items-center justify-center">
            <Icon name="MapPin" size={24} className="text-yalta-terracotta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
