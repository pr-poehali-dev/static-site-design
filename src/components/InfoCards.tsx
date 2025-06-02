import Icon from "@/components/ui/icon";

const InfoCards = () => {
  return (
    <section className="py-20 bg-yalta-brown relative overflow-hidden">
      {/* Органичные темные формы фона */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C200,80 400,120 600,100 C800,80 1000,110 1200,90 C1300,85 1400,88 1440,85 L1440,400 C1200,350 900,380 600,360 C300,340 0,320 0,300 Z"
            fill="#3C2C1F"
            opacity="0.8"
          />
          <path
            d="M0,200 C150,180 350,220 550,200 C750,180 950,210 1150,190 C1250,183 1350,187 1440,185 L1440,500 C1200,450 900,480 600,460 C300,440 0,420 0,400 Z"
            fill="#250F07"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yalta-cream mb-4 font-merriweather">
            ОБЩАЯ ИНФОРМАЦИЯ
          </h2>
        </div>

        {/* Информационные карточки с органичными формами */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* История */}
          <div className="relative">
            <div
              className="bg-yalta-cream p-8 rounded-[3rem] shadow-lg transform rotate-2"
              style={{
                clipPath: "polygon(10% 0%, 90% 5%, 95% 85%, 5% 90%)",
              }}
            >
              <div className="flex items-center mb-4">
                <Icon
                  name="BookOpen"
                  size={24}
                  className="text-yalta-brown mr-3"
                />
                <h3 className="text-xl font-bold text-yalta-brown">ИСТОРИЯ</h3>
              </div>
              <div className="space-y-2 text-sm text-yalta-brown">
                <p>✓ Древние времена в средние века</p>
                <p>✓ 1154 год</p>
                <p>✓ ХІХ век</p>
              </div>
            </div>
          </div>

          {/* Данные с графиками */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <Icon
                name="BarChart3"
                size={32}
                className="text-yalta-brown mx-auto mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">☑</span>
                  <div className="flex-1 h-2 bg-yalta-light-cream mx-2 rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">☑</span>
                  <div className="flex-1 h-2 bg-yalta-light-cream mx-2 rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">☑</span>
                  <div className="flex-1 h-2 bg-yalta-light-cream mx-2 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Население */}
          <div className="relative">
            <div
              className="bg-yalta-cream p-8 rounded-[3rem] shadow-lg transform -rotate-1"
              style={{
                clipPath: "polygon(5% 10%, 95% 0%, 90% 85%, 10% 95%)",
              }}
            >
              <div className="flex items-center mb-4">
                <Icon
                  name="Users"
                  size={24}
                  className="text-yalta-brown mr-3"
                />
                <h3 className="text-xl font-bold text-yalta-brown">
                  НАСЕЛЕНИЕ
                </h3>
              </div>
              <div className="space-y-2 text-sm text-yalta-brown">
                <p>• 78 000 человек</p>
                <p>• 568 км²</p>
                <p>• 194 чел/км²</p>
              </div>
            </div>
          </div>

          {/* Карта расположения */}
          <div className="md:col-start-1 lg:col-start-1">
            <div className="bg-yalta-medium p-6 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
              <Icon name="MapPin" size={32} className="text-white" />
            </div>
            <div className="text-center mt-4">
              <p className="text-yalta-cream text-sm">Южный берег Крыма</p>
            </div>
          </div>

          {/* Расположение */}
          <div className="relative md:col-span-2 lg:col-span-2">
            <div
              className="bg-yalta-cream p-8 rounded-[4rem] shadow-lg transform rotate-1"
              style={{
                clipPath: "polygon(8% 5%, 92% 10%, 95% 90%, 5% 85%)",
              }}
            >
              <div className="flex items-center mb-4">
                <Icon
                  name="MapPin"
                  size={24}
                  className="text-yalta-brown mr-3"
                />
                <h3 className="text-xl font-bold text-yalta-brown">
                  РАСПОЛОЖЕНИЕ
                </h3>
              </div>
              <div className="space-y-2 text-sm text-yalta-brown">
                <p>
                  • На южном берегу Крымского полуострова, между 44°29' северной
                  широты и 34°10' восточной долготы
                </p>
                <p>• В 80 км от аэропорта Симферополь</p>
              </div>
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute bottom-10 right-10">
          <Icon
            name="Mountain"
            size={48}
            className="text-yalta-terracotta opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
