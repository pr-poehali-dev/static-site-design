import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-yalta-dark overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0">
        {/* Волнистые формы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 C200,150 400,250 600,200 C800,150 1000,250 1200,200 C1300,180 1400,220 1440,200 L1440,0 L0,0 Z"
              fill="#CC8469"
              opacity="0.3"
            />
            <path
              d="M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400 C1300,380 1400,420 1440,400 L1440,0 L0,0 Z"
              fill="#87472E"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Декоративные круги */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yalta-terracotta rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-yalta-warm-brown rounded-full opacity-15"></div>
      </div>

      {/* Навигация */}
      <nav className="relative z-10 flex justify-between items-center p-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yalta-terracotta rounded-full flex items-center justify-center">
            <Icon name="MapPin" size={24} className="text-white" />
          </div>
          <span className="ml-3 text-yalta-cream font-bold text-lg">ЯЛТА</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm text-yalta-cream">
          <a href="#" className="hover:text-yalta-terracotta transition-colors">
            История
          </a>
          <a href="#" className="hover:text-yalta-terracotta transition-colors">
            О городе
          </a>
          <a href="#" className="hover:text-yalta-terracotta transition-colors">
            Достопримечательности
          </a>
          <a href="#" className="hover:text-yalta-terracotta transition-colors">
            Размещение
          </a>
        </div>
      </nav>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-8 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Левая колонка - текст */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-yalta-cream leading-tight mb-6">
              О ЯЛТЕ
            </h1>
            <p className="text-xl text-yalta-light-cream mb-8 leading-relaxed">
              Жемчужина Крыма на берегу Чёрного моря. Город с богатой историей,
              уникальным климатом и незабываемой атмосферой.
            </p>
            <button className="bg-yalta-terracotta text-white px-8 py-4 rounded-lg font-semibold hover:bg-yalta-warm-brown transition-colors">
              Узнать больше
            </button>
          </div>

          {/* Правая колонка - декоративные элементы */}
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-yalta-terracotta to-yalta-warm-brown rounded-full opacity-20 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                name="Waves"
                size={120}
                className="text-yalta-terracotta opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
