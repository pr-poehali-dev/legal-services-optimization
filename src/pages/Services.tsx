import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Семейный юрист",
    description: "Развод, раздел имущества, алименты, опека, брачные договоры",
    price: "от 10,000 ₽",
    rating: 4.8,
    reviews: 47,
    icon: "Heart",
    features: ["Развод и раздел имущества", "Взыскание алиментов", "Опека и усыновление", "Брачные договоры"]
  },
  {
    id: 2,
    title: "Банкротство физических лиц",
    description: "Процедура банкротства для граждан, списание долгов",
    price: "от 30,000 ₽",
    rating: 4.9,
    reviews: 35,
    icon: "TrendingDown",
    features: ["Анализ долговой нагрузки", "Подготовка документов", "Представительство в суде", "Сопровождение процедуры"]
  },
  {
    id: 3,
    title: "Недвижимость и перепланировки",
    description: "Сделки с недвижимостью, узаконивание перепланировок, споры с застройщиками",
    price: "от 12,000 ₽",
    rating: 4.7,
    reviews: 28,
    icon: "Home",
    features: ["Сделки купли-продажи", "Узаконивание перепланировок", "Споры с застройщиками", "Оформление наследства"]
  },
  {
    id: 4,
    title: "Автоюрист по ДТП",
    description: "Взыскание ущерба, представительство в суде по автоавариям",
    price: "от 9,000 ₽",
    rating: 4.6,
    reviews: 22,
    icon: "Car",
    features: ["Оценка ущерба", "Взыскание со страховых", "Споры с ГИБДД", "Представительство в суде"]
  },
  {
    id: 5,
    title: "Защита прав потребителей",
    description: "Возврат некачественного товара, споры с продавцами",
    price: "от 6,000 ₽",
    rating: 4.5,
    reviews: 19,
    icon: "ShieldCheck",
    features: ["Возврат товаров", "Защита от недобросовестных продавцов", "Споры с банками", "Возмещение морального вреда"]
  },
  {
    id: 6,
    title: "Взыскание долгов",
    description: "Взыскание задолженности, работа с должниками",
    price: "от 8,500 ₽",
    rating: 4.7,
    reviews: 31,
    icon: "DollarSign",
    features: ["Досудебное взыскание", "Исполнительное производство", "Банкротство должников", "Работа с приставами"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Icon name="Scale" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ЮрСервис НСК</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</Link>
              <Link to="/services" className="text-blue-600 font-medium">Услуги</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
            Профессиональные услуги
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-blue-300">юридические услуги</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Полный спектр юридических услуг для физических лиц в Новосибирске. 
            Опыт более 10 лет, честные цены, результат
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-amber-500 mb-1">
                        <Icon name="Star" className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">{service.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{service.reviews} отзывов</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Icon name="Check" className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Нужна консультация по вашему вопросу?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и узнайте стоимость решения вашей задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Scale" className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">ЮрСервис НСК</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные юридические услуги в Новосибирске
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/services" className="block hover:text-white transition-colors">Семейное право</Link>
                <Link to="/services" className="block hover:text-white transition-colors">Банкротство</Link>
                <Link to="/services" className="block hover:text-white transition-colors">Недвижимость</Link>
                <Link to="/services" className="block hover:text-white transition-colors">Автоюрист</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <Link to="/about" className="block hover:text-white transition-colors">О нас</Link>
                <Link to="/contacts" className="block hover:text-white transition-colors">Контакты</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (999) 452-35-00</p>
                <p>info@юр-сервис.рф</p>
                <p>г. Новосибирск, ул. Ленина, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ЮрСервис НСК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;