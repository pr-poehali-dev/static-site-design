import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Фоновые волны */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1200,0 L1200,300 C1000,350 800,250 600,300 C400,350 200,250 0,300 Z"
            fill="#CC8469"
            opacity="0.8"
          />
          <path
            d="M0,200 C200,150 400,250 600,200 C800,150 1000,250 1200,200 L1200,500 C1000,450 800,550 600,500 C400,450 200,550 0,500 Z"
            fill="#87472E"
            opacity="0.9"
          />
          <path
            d="M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400 L1200,800 L0,800 Z"
            fill="#3C2C1F"
          />
        </svg>

        {/* Река и кораблик */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-32">
          <div className="w-full h-16 bg-yalta-blue-grey rounded-full opacity-70"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <Icon name="Ship" size={32} className="text-white" />
          </div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="relative z-10 flex justify-between items-center p-6 text-white">
        <div className="flex items-center">
          <Icon name="Anchor" size={32} className="mr-2" />
        </div>
        <div className="flex space-x-8 text-sm">
          <a
            href="#"
            className="hover:text-yalta-light-cream transition-colors"
          >
            История
          </a>
          <a
            href="#"
            className="hover:text-yalta-light-cream transition-colors"
          >
            О городе
          </a>
          <a
            href="#"
            className="hover:text-yalta-light-cream transition-colors"
          >
            Достопримечательности
          </a>
          <a
            href="#"
            className="hover:text-yalta-light-cream transition-colors"
          >
            Размещение
          </a>
        </div>
      </nav>

      {/* Заголовок */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
          О ЯЛТЕ
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
