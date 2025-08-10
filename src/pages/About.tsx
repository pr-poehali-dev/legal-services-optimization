import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const team = [
  {
    name: "Александр Петров",
    position: "Управляющий партнер",
    experience: "15 лет опыта",
    specialization: "Семейное право, банкротство",
    education: "НГУ, юридический факультет",
    image: "/team-1.jpg"
  },
  {
    name: "Мария Сидорова",
    position: "Ведущий юрист",
    experience: "12 лет опыта",
    specialization: "Недвижимость, корпоративное право",
    education: "СибУПК, юриспруденция",
    image: "/team-2.jpg"
  },
  {
    name: "Дмитрий Иванов",
    position: "Юрист-консультант",
    experience: "8 лет опыта",
    specialization: "Защита прав потребителей, автоюрист",
    education: "НГУЭУ, правоведение",
    image: "/team-3.jpg"
  }
];

const stats = [
  { number: "10+", label: "лет на рынке" },
  { number: "500+", label: "довольных клиентов" },
  { number: "95%", label: "выигранных дел" },
  { number: "24/7", label: "поддержка клиентов" }
];

const About = () => {
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
              <Link to="/about" className="text-blue-600 font-medium">О нас</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
                О компании
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Надежный <span className="text-blue-300">юридический партнер</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Более 10 лет мы защищаем права наших клиентов в Новосибирске. 
                Профессионализм, честность и результат — наши главные принципы
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                <Icon name="Download" className="w-5 h-5 mr-2" />
                Скачать презентацию
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <Icon name="Users" className="w-24 h-24 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы верим, что каждый человек имеет право на качественную юридическую защиту. 
                Наша команда профессионалов работает для того, чтобы сделать юридические услуги 
                доступными, понятными и эффективными.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Target" className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Индивидуальный подход</h3>
                    <p className="text-gray-600">Каждое дело уникально, поэтому мы разрабатываем персональную стратегию для каждого клиента</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Оперативность</h3>
                    <p className="text-gray-600">Быстрое реагирование на запросы клиентов и соблюдение всех процессуальных сроков</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Shield" className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Конфиденциальность</h3>
                    <p className="text-gray-600">Гарантируем полную конфиденциальность информации наших клиентов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <Icon name="Building" className="w-24 h-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
              Наша команда
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Опытные профессионалы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наши юристы имеют многолетний опыт работы в различных областях права 
              и постоянно повышают свою квалификацию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    {member.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Специализация:</strong> {member.specialization}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Образование:</strong> {member.education}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-xl text-blue-100">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Scale" className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Справедливость</h3>
              <p className="text-blue-100">
                Мы всегда стремимся к справедливому решению вопросов наших клиентов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
              <p className="text-blue-100">
                Высокий уровень экспертизы и постоянное развитие наших специалистов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забота</h3>
              <p className="text-blue-100">
                Внимательное отношение к каждому клиенту и его потребностям
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовы стать нашим клиентом?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Получите бесплатную консультацию и узнайте, как мы можем помочь решить вашу задачу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MapPin" className="w-5 h-5 mr-2" />
              Найти нас на карте
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

export default About;