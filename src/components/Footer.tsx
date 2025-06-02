import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-yalta-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Anchor" size={32} className="text-yalta-cream mr-3" />
            <span className="text-yalta-cream font-bold">Ялта</span>
          </div>

          <div className="flex space-x-8 text-sm text-yalta-cream">
            <a
              href="#"
              className="hover:text-yalta-terracotta transition-colors"
            >
              История
            </a>
            <a
              href="#"
              className="hover:text-yalta-terracotta transition-colors"
            >
              О городе
            </a>
            <a
              href="#"
              className="hover:text-yalta-terracotta transition-colors"
            >
              Достопримечательности
            </a>
            <a
              href="#"
              className="hover:text-yalta-terracotta transition-colors"
            >
              Размещение
            </a>
          </div>

          <div className="text-yalta-cream text-sm">
            <span>🚀 ПОЕХАЛИ!</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
