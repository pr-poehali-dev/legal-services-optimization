import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    icon: "Phone",
    title: "Телефон",
    value: "+7 (999) 452-35-00",
    description: "Звоните с 9:00 до 18:00"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "info@юр-сервис.рф",
    description: "Ответим в течение часа"
  },
  {
    icon: "MapPin",
    title: "Адрес",
    value: "ул. Ленина, 1, офис 205",
    description: "г. Новосибирск, 630000"
  },
  {
    icon: "Clock",
    title: "Время работы",
    value: "Пн-Пт: 9:00-18:00",
    description: "Сб: 10:00-16:00, Вс: выходной"
  }
];

const socialLinks = [
  { icon: "MessageCircle", name: "WhatsApp", url: "https://wa.me/79994523500" },
  { icon: "Send", name: "Telegram", url: "https://t.me/jurservice_nsk" },
  { icon: "Users", name: "ВКонтакте", url: "https://vk.com/jurservice_nsk" }
];

const Contacts = () => {
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
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
              <Link to="/contacts" className="text-blue-600 font-medium">Контакты</Link>
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
            Свяжитесь с нами
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-blue-300">контакты</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Мы всегда готовы ответить на ваши вопросы и предоставить профессиональную 
            юридическую консультацию
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon as any} className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-1">{info.value}</p>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Отправьте заявку
              </h2>
              <p className="text-gray-600 mb-8">
                Заполните форму ниже, и мы свяжемся с вами для обсуждения вашего вопроса
              </p>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>
                    Все поля обязательны для заполнения
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <Input placeholder="Введите имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема обращения
                    </label>
                    <Input placeholder="Кратко опишите суть вопроса" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Подробное описание
                    </label>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию подробно..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Icon name="Send" className="w-5 h-5 mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Отправляя форму, вы соглашаетесь с обработкой персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Как нас найти
              </h2>
              
              {/* Map Placeholder */}
              <Card className="mb-8 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-600 font-medium">Интерактивная карта</p>
                    <p className="text-sm text-gray-600">ул. Ленина, 1, Новосибирск</p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Share2" className="w-5 h-5 mr-2" />
                    Мы в социальных сетях
                  </CardTitle>
                  <CardDescription>
                    Следите за новостями и получайте полезные советы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                      >
                        <Icon name={social.icon as any} className="w-6 h-6 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-gray-700">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" className="w-5 h-5 mr-2" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Суббота</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Воскресенье</span>
                      <span className="text-red-600">Выходной</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-sm text-gray-600">
                        <Icon name="Info" className="w-4 h-4 inline mr-1" />
                        Экстренные консультации по предварительной договоренности
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Сколько стоит первичная консультация?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Первичная консультация длительностью до 30 минут предоставляется бесплатно. 
                  Это позволяет нам оценить сложность вашего вопроса и предложить оптимальное решение.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как быстро можно получить консультацию?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обычно мы можем предоставить консультацию в день обращения или на следующий день. 
                  Для срочных вопросов возможна консультация в течение нескольких часов.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Возможна ли онлайн-консультация?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, мы проводим консультации по видеосвязи через удобные для вас мессенджеры 
                  или специализированные платформы. Это экономит ваше время и не снижает качество консультации.
                </p>
              </CardContent>
            </Card>
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

export default Contacts;