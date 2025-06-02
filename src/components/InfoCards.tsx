import Icon from "@/components/ui/icon";

const InfoCards = () => {
  const cards = [
    {
      title: "ИСТОРИЯ",
      subtitle: "Богатое культурное наследие",
      icon: "BookOpen",
      stats: [
        "Основан в XIX веке",
        "1000+ лет истории",
        "Императорский курорт",
      ],
      color: "bg-yalta-cream",
    },
    {
      title: "НАСЕЛЕНИЕ",
      subtitle: "Многонациональный город",
      icon: "Users",
      stats: ["145 тыс. человек", "20+ национальностей", "98% грамотность"],
      color: "bg-yalta-light-cream",
    },
    {
      title: "РАСПОЛОЖЕНИЕ",
      subtitle: "Южный берег Крыма",
      icon: "MapPin",
      stats: [
        "На берегу Чёрного моря",
        "44°29' с.ш. 34°10' в.д.",
        "80 км от Симферополя",
      ],
      color: "bg-yalta-beige",
    },
  ];

  return (
    <section className="py-20 bg-yalta-light-cream">
      <div className="container mx-auto px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yalta-dark mb-4">
            ОБЩАЯ ИНФОРМАЦИЯ
          </h2>
          <div className="w-24 h-1 bg-yalta-terracotta mx-auto"></div>
        </div>

        {/* Карточки */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Иконка и заголовок */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yalta-terracotta rounded-full flex items-center justify-center mr-4">
                  <Icon
                    name={card.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yalta-dark">
                    {card.title}
                  </h3>
                  <p className="text-sm text-yalta-medium">{card.subtitle}</p>
                </div>
              </div>

              {/* Статистика */}
              <div className="space-y-3">
                {card.stats.map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-yalta-terracotta rounded-full mr-3"></div>
                    <span className="text-sm text-yalta-dark">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
