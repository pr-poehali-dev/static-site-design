import Icon from "@/components/ui/icon";

const ClimateSection = () => {
  return (
    <section className="py-20 bg-yalta-dark relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-yalta-terracotta rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-yalta-warm-brown rounded-full opacity-5"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yalta-cream mb-4">
            КЛИМАТ И ПРИРОДА
          </h2>
          <div className="w-24 h-1 bg-yalta-terracotta mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Климатические показатели */}
          <div className="bg-yalta-terracotta p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Icon name="Sun" size={32} className="text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Субтропический климат
              </h3>
            </div>

            <div className="space-y-6">
              {/* Летняя температура */}
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Средняя температура лета</span>
                  <Icon name="Thermometer" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">+24°C</div>
              </div>

              {/* Зимняя температура */}
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Средняя температура зимы</span>
                  <Icon name="Snowflake" size={20} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white">+4°C</div>
              </div>
            </div>
          </div>

          {/* Осадки и природа */}
          <div className="space-y-6">
            {/* Осадки */}
            <div className="bg-yalta-cream p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Icon
                  name="CloudRain"
                  size={32}
                  className="text-yalta-dark mr-3"
                />
                <h3 className="text-xl font-bold text-yalta-dark">
                  Осадки в году
                </h3>
              </div>

              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-yalta-terracotta">
                  300+
                </div>
                <p className="text-yalta-medium">дождливых дней</p>
              </div>

              <div className="bg-yalta-light-cream p-4 rounded-lg text-center">
                <Icon
                  name="Sun"
                  size={24}
                  className="text-yalta-terracotta mx-auto mb-2"
                />
                <p className="text-sm text-yalta-dark">
                  Солнечных дней больше всего летом
                </p>
              </div>
            </div>

            {/* Природа */}
            <div className="bg-yalta-warm-brown p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Icon name="Trees" size={32} className="text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Растительность</h3>
              </div>
              <p className="text-white opacity-90">
                Уникальная субтропическая флора с вечнозелёными растениями
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
