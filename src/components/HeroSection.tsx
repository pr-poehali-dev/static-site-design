import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-yalta-terracotta overflow-hidden">
      {/* Органичные волнистые формы фона */}
      <div className="absolute inset-0">
        {/* Верхние светлые формы */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 600,120 900,100 C1200,80 1400,60 1440,50 L1440,300 C1200,250 900,280 600,260 C300,240 0,220 0,200 Z"
            fill="#E6C3B5"
            opacity="0.8"
          />
        </svg>

        {/* Темные холмы */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M0,500 C200,450 400,480 600,460 C800,440 1000,470 1200,450 C1300,440 1400,450 1440,445 L1440,900 L0,900 Z"
            fill="#4E291B"
          />
          <path
            d="M0,600 C150,580 350,590 550,575 C750,560 950,570 1150,555 C1250,548 1350,552 1440,550 L1440,900 L0,900 Z"
            fill="#3C2C1F"
          />
        </svg>

        {/* Морская бухта */}
        <div className="absolute bottom-96 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-yalta-light-blue rounded-full opacity-70"></div>

        {/* Декоративный парусник */}
        <div className="absolute bottom-80 left-1/2 transform -translate-x-1/2">
          <Icon name="Sailboat" size={32} className="text-white" />
        </div>
      </div>

      {/* Навигация */}
      <nav className="relative z-10 flex justify-between items-center p-8">
        <div className="flex items-center">
          <Icon name="Anchor" size={24} className="text-white" />
        </div>

        <div className="hidden md:flex space-x-8 text-sm text-white">
          <a href="#" className="hover:text-yalta-cream transition-colors">
            История
          </a>
          <a href="#" className="hover:text-yalta-cream transition-colors">
            О городе
          </a>
          <a href="#" className="hover:text-yalta-cream transition-colors">
            Достопримечательности
          </a>
          <a href="#" className="hover:text-yalta-cream transition-colors">
            Размещение
          </a>
        </div>
      </nav>

      {/* Заголовок */}
      <div className="relative z-10 text-center pt-32">
        <h1 className="text-6xl md:text-8xl font-bold text-white font-merriweather italic">
          О ЯЛТЕ
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
