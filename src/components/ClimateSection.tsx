import Icon from "@/components/ui/icon";

const ClimateSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-yalta-dark to-yalta-terracotta overflow-hidden">
      {/* Декоративные горы */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-40"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 L0,80 L200,40 L400,60 L600,20 L800,40 L1000,60 L1200,80 L1200,160 Z"
            fill="#3C2C1F"
            opacity="0.8"
          />
          <path
            d="M0,160 L0,100 L150,70 L350,90 L550,50 L750,70 L950,90 L1200,100 L1200,160 Z"
            fill="#250F07"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Icon name="Mountain" size={64} className="text-yalta-cream" />
          </div>
          <h2 className="text-4xl font-bold text-yalta-cream mb-4">
            КЛИМАТ И ПРИРОДА
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Климат */}
          <div className="bg-yalta-terracotta p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Субтропический климат
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="flex items-center">
                  <Icon
                    name="Thermometer"
                    size={24}
                    className="text-white mr-3"
                  />
                  <span className="text-white">Средняя температура</span>
                </div>
                <span className="text-2xl font-bold text-white">+24°C</span>
              </div>

              <div className="flex items-center justify-between bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="flex items-center">
                  <Icon
                    name="Snowflake"
                    size={24}
                    className="text-white mr-3"
                  />
                  <span className="text-white">Зимняя температура</span>
                </div>
                <span className="text-2xl font-bold text-white">+4°C</span>
              </div>
            </div>

            {/* Деревья */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-4">
                <Icon
                  name="Trees"
                  size={48}
                  className="text-yalta-dark-accent"
                />
                <Icon
                  name="Flower"
                  size={32}
                  className="text-yalta-dark-accent"
                />
                <Icon
                  name="Trees"
                  size={56}
                  className="text-yalta-dark-accent"
                />
              </div>
            </div>
          </div>

          {/* Осадки */}
          <div className="bg-yalta-cream p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-yalta-dark mb-6">
              Осадки в году
            </h3>

            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-yalta-terracotta mb-2">
                300+
              </div>
              <p className="text-yalta-medium">дождливых дней</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-yalta-dark">Май–Октябрь</span>
                <div className="w-32 h-2 bg-yalta-terracotta rounded-full"></div>
              </div>

              <div className="bg-yalta-light-cream p-4 rounded-lg text-center">
                <Icon
                  name="Sun"
                  size={32}
                  className="text-yalta-terracotta mx-auto mb-2"
                />
                <p className="text-sm text-yalta-dark">
                  Солнечных дней больше всего летом
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
