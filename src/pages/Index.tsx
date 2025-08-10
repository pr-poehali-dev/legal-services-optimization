import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Семейный юрист",
      description: "Развод, раздел имущества, алименты, опека, брачные договоры",
      price: "от 10 000 ₽",
      icon: "Users",
      rating: 4.8,
      reviews: 47
    },
    {
      title: "Банкротство физических лиц",
      description: "Процедура банкротства для граждан, списание долгов",
      price: "от 30 000 ₽",
      icon: "TrendingDown",
      rating: 4.9,
      reviews: 35
    },
    {
      title: "Недвижимость и перепланировки",
      description: "Сделки с недвижимостью, узаконивание перепланировок",
      price: "от 12 000 ₽",
      icon: "Home",
      rating: 4.7,
      reviews: 28
    },
    {
      title: "Автоюрист по ДТП",
      description: "Взыскание ущерба, представительство в суде по автоавариям",
      price: "от 9 000 ₽",
      icon: "Car",
      rating: 4.6,
      reviews: 22
    },
    {
      title: "Защита прав потребителей",
      description: "Возврат некачественного товара, споры с продавцами",
      price: "от 6 000 ₽",
      icon: "Shield",
      rating: 4.5,
      reviews: 19
    },
    {
      title: "Взыскание долгов",
      description: "Взыскание задолженности, работа с должниками",
      price: "от 8 500 ₽",
      icon: "DollarSign",
      rating: 4.7,
      reviews: 31
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="text-primary" size={28} />
              <span className="text-xl font-bold text-slate-800">ЮрСервис НСК</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-slate-600 hover:text-primary transition-colors">Услуги</Link>
              <Link to="/about" className="text-slate-600 hover:text-primary transition-colors">О компании</Link>
              <Link to="/contacts" className="text-slate-600 hover:text-primary transition-colors">Контакты</Link>
              <a href="#consultation" className="text-slate-600 hover:text-primary transition-colors">Консультация</a>
              <Button size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                +7-999-452-35-00
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
                ⚖️ Опыт более 10 лет
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Профессиональные 
                <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  юридические услуги
                </span>
                в Новосибирске
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Защитим ваши права и интересы. Бесплатная консультация, прозрачные цены, гарантия результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  <Icon name="Video" size={20} className="mr-2" />
                  Онлайн консультация
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-700/50">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/a5e40cb9-000e-4706-9226-d221d14f452a.jpg" 
                alt="Юридическая консультация"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Icon name="Star" className="text-yellow-500 fill-current" size={20} />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm text-slate-500">208+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр юридических услуг для физических лиц и организаций
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="text-white" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      ⭐ {service.rating} ({service.reviews})
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                🎥 Новинка
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Онлайн консультации с видеосвязью
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Получите профессиональную юридическую помощь не выходя из дома. 
                Безопасные видеоконференции, запись консультаций, документооборот онлайн.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-green-600" size={16} />
                  </div>
                  <span className="text-slate-700">Видеосвязь в HD качестве</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-green-600" size={16} />
                  </div>
                  <span className="text-slate-700">Защищенный чат для документов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="text-green-600" size={16} />
                  </div>
                  <span className="text-slate-700">Запись консультации для клиента</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <Icon name="Video" size={20} className="mr-2" />
                Записаться на онлайн встречу
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="/img/49c7ad53-9374-4e2e-8c65-be4dd1ee9b38.jpg" 
                alt="Онлайн консультация"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                🟢 Онлайн
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              О компании ЮрСервис НСК
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Более 10 лет успешно защищаем права и интересы клиентов в Новосибирске и области. 
              Команда опытных юристов, современный подход, честные цены.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "лет опыта", icon: "Calendar" },
              { number: "500+", label: "довольных клиентов", icon: "Users" },
              { number: "95%", label: "выигранных дел", icon: "TrendingUp" },
              { number: "24/7", label: "поддержка", icon: "Clock" }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут для бесплатной консультации.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Телефон</div>
                    <div className="text-slate-600">+7-999-452-35-00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">info@юридический-сервис.рф</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Адрес</div>
                    <div className="text-slate-600">г. Новосибирск, ул. Ленина, 1</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Время работы</div>
                    <div className="text-slate-600">Пн-Пт: 09:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in shadow-xl border-0">
              <CardHeader>
                <CardTitle>Бесплатная консультация</CardTitle>
                <CardDescription>
                  Опишите вашу ситуацию, и мы предложим оптимальное решение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Textarea 
                  placeholder="Опишите вашу юридическую проблему..."
                  className="min-h-[120px]"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="text-blue-400" size={28} />
                <span className="text-xl font-bold">ЮрСервис НСК</span>
              </div>
              <p className="text-slate-300 mb-4">
                Профессиональные юридические услуги в Новосибирске
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Семейное право</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Банкротство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоюрист</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наша команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы клиентов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-300">
                <p>+7-999-452-35-00</p>
                <p>info@юридический-сервис.рф</p>
                <p>г. Новосибирск, ул. Ленина, 1</p>
                <p>Пн-Пт: 09:00-18:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ЮрСервис НСК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;