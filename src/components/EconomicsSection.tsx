import Icon from "@/components/ui/icon";

const EconomicsSection = () => {
  return (
    <section className="py-20 bg-yalta-cream">
      <div className="container mx-auto px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yalta-brown mb-4 font-merriweather">
            ЭКОНОМИКА И ТУРИЗМ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Туристический поток */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Icon
                name="Users"
                size={32}
                className="text-yalta-terracotta mr-4"
              />
              <h3 className="text-2xl font-bold text-yalta-brown">
                Туристический поток
              </h3>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-yalta-terracotta mb-2">
                1.5 млн
              </div>
              <p className="text-yalta-medium">туристов в год</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-yalta-light-cream rounded-lg">
                <span className="text-yalta-brown">200+</span>
                <span className="font-bold text-yalta-brown">
                  объектов размещения
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-yalta-light-cream rounded-lg">
                <span className="text-yalta-brown">50+</span>
                <span className="font-bold text-yalta-brown">
                  достопримечательностей
                </span>
              </div>
            </div>
          </div>

          {/* Основные отрасли */}
          <div className="space-y-6">
            {/* Туризм и рекреация */}
            <div className="bg-yalta-terracotta p-6 rounded-xl text-white">
              <div className="flex items-center mb-3">
                <Icon name="MapPin" size={24} className="mr-3" />
                <h4 className="text-xl font-bold">Туризм и рекреация</h4>
              </div>
              <p className="text-white opacity-90">
                Ведущая отрасль экономики города
              </p>
            </div>

            {/* Виноделие */}
            <div className="bg-yalta-warm-brown p-6 rounded-xl text-white">
              <div className="flex items-center mb-3">
                <Icon name="Wine" size={24} className="mr-3" />
                <h4 className="text-xl font-bold">Виноделие</h4>
              </div>
              <p className="text-white opacity-90">
                Знаменитые винодельни региона
              </p>
            </div>

            {/* Сельское хозяйство */}
            <div className="bg-yalta-medium p-6 rounded-xl text-white">
              <div className="flex items-center mb-3">
                <Icon name="Apple" size={24} className="mr-3" />
                <h4 className="text-xl font-bold">Сельское хозяйство</h4>
              </div>
              <p className="text-white opacity-90">
                Субтропическое садоводство
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;
