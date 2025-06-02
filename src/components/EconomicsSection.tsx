import Icon from "@/components/ui/icon";

const EconomicsSection = () => {
  return (
    <section className="py-20 bg-yalta-light-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-yalta-dark text-center mb-16">
          ЭКОНОМИКА И ТУРИЗМ
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Туристический поток */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-yalta-dark mb-6">
              Туристический поток
            </h3>

            <div className="flex items-center mb-6">
              <Icon
                name="Users"
                size={32}
                className="text-yalta-terracotta mr-4"
              />
              <div>
                <div className="text-3xl font-bold text-yalta-dark">
                  1.5+ млн
                </div>
                <p className="text-yalta-medium">туристов в год</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-yalta-light-cream rounded-lg">
                <span className="text-yalta-dark">Летний сезон</span>
                <span className="font-bold text-yalta-terracotta">200+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yalta-light-cream rounded-lg">
                <span className="text-yalta-dark">Гостиниц и санаториев</span>
                <span className="font-bold text-yalta-terracotta">50+</span>
              </div>
            </div>
          </div>

          {/* Основные отрасли */}
          <div className="space-y-6">
            <div className="bg-yalta-terracotta p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Туризм и рекреация</h4>
              <p className="text-sm opacity-90">
                Ведущая отрасль экономики города
              </p>
              <Icon name="Palmtree" size={32} className="mt-3" />
            </div>

            <div className="bg-yalta-warm-brown p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Виноделие</h4>
              <p className="text-sm opacity-90">
                Знаменитые винодельни и дегустации
              </p>
              <Icon name="Wine" size={32} className="mt-3" />
            </div>

            <div className="bg-yalta-medium p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Сельское хозяйство</h4>
              <p className="text-sm opacity-90">
                Субтропическое садоводство и виноградарство
              </p>
              <Icon name="Apple" size={32} className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicsSection;
