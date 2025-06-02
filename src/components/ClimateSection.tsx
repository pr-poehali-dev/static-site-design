import Icon from "@/components/ui/icon";

const ClimateSection = () => {
  return (
    <section className="py-20 bg-yalta-terracotta relative overflow-hidden">
      {/* Декоративные горы */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-48"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L120,160 L240,180 L360,140 L480,160 L600,120 L720,140 L840,100 L960,120 L1080,80 L1200,100 L1320,60 L1440,80 L1440,200 Z"
            fill="#87472E"
          />
          <path
            d="M0,200 L100,180 L200,190 L300,170 L400,180 L500,160 L600,170 L700,150 L800,160 L900,140 L1000,150 L1100,130 L1200,140 L1300,120 L1400,130 L1440,125 L1440,200 Z"
            fill="#4E291B"
          />
        </svg>

        {/* Елки */}
        <div className="absolute bottom-12 left-20">
          <Icon name="Trees" size={24} className="text-yalta-dark" />
        </div>
        <div className="absolute bottom-16 left-32">
          <Icon name="Trees" size={20} className="text-yalta-dark" />
        </div>
        <div className="absolute bottom-14 left-44">
          <Icon name="Trees" size={18} className="text-yalta-dark" />
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-merriweather">
            КЛИМАТ И ПРИРОДА
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Левая колонка - климат */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Субтропический климат
            </h3>

            <div className="space-y-6">
              {/* Летняя температура */}
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Средняя температура лета</span>
                  <Icon name="Sun" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">+24°C</div>
              </div>

              {/* Зимняя температура */}
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Средняя температура зимы</span>
                  <Icon name="Snowflake" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">+4°C</div>
              </div>
            </div>
          </div>

          {/* Правая колонка - осадки */}
          <div className="space-y-6">
            {/* Осадки */}
            <div className="bg-yalta-rust p-8 rounded-2xl text-center">
              <Icon
                name="CloudRain"
                size={32}
                className="text-white mx-auto mb-4"
              />
              <div className="text-4xl font-bold text-white mb-2">300+</div>
              <p className="text-white">солнечных дней</p>
              <div className="mt-4 text-sm text-white opacity-90">
                Май-Октябрь
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
