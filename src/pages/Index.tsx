import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" size={32} className="text-coffee-primary" />
              <h1
                className="text-2xl font-bold text-coffee-primary"
                style={{ fontFamily: "Roboto" }}
              >
                КофеМастер
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-coffee-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-coffee-primary transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-coffee-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-coffee-primary transition-colors"
              >
                Связаться
              </a>
            </nav>
            <Button className="bg-coffee-primary hover:bg-coffee-dark text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-light via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h2
              className="text-5xl font-bold text-coffee-secondary mb-6"
              style={{ fontFamily: "Roboto" }}
            >
              Профессиональный ремонт кофемашин
            </h2>
            <p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: "Open Sans" }}
            >
              Быстро, качественно, с гарантией. Восстановим вашу кофемашину
              любой сложности и марки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-coffee-primary hover:bg-coffee-dark text-white px-8 py-4"
              >
                <Icon name="Wrench" size={20} className="mr-2" />
                Диагностика бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-coffee-primary text-coffee-primary hover:bg-coffee-primary hover:text-white"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h3
              className="text-4xl font-bold text-coffee-secondary mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              О нас
            </h3>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Open Sans" }}
            >
              Более 10 лет опыта в ремонте кофемашин. Работаем с любыми марками
              и моделями.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-coffee-light/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Clock"
                  size={48}
                  className="text-coffee-primary mx-auto mb-4"
                />
                <CardTitle className="text-coffee-secondary">
                  Быстрый сервис
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Большинство ремонтов выполняем в течение 24 часов
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-coffee-light/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Award"
                  size={48}
                  className="text-coffee-primary mx-auto mb-4"
                />
                <CardTitle className="text-coffee-secondary">
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Предоставляем гарантию до 6 месяцев на все работы
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-coffee-light/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Users"
                  size={48}
                  className="text-coffee-primary mx-auto mb-4"
                />
                <CardTitle className="text-coffee-secondary">
                  Опытные мастера
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Сертифицированные специалисты с многолетним опытом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h3
              className="text-4xl font-bold text-coffee-secondary mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              Наши работы
            </h3>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Open Sans" }}
            >
              Примеры успешно выполненных ремонтов различных марок кофемашин
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                brand: "Delonghi",
                model: "ESAM 3200",
                issue: "Замена помпы",
                time: "2 часа",
              },
              {
                brand: "Saeco",
                model: "Xelsis SM7580",
                issue: "Очистка кофемолки",
                time: "1 час",
              },
              {
                brand: "Jura",
                model: "E8",
                issue: "Ремонт заварочного блока",
                time: "3 часа",
              },
              {
                brand: "Siemens",
                model: "EQ.6",
                issue: "Замена уплотнителей",
                time: "1.5 часа",
              },
              {
                brand: "Bosch",
                model: "VeroBar",
                issue: "Декальцинация",
                time: "30 мин",
              },
              {
                brand: "Philips",
                model: "EP5447",
                issue: "Настройка кофемолки",
                time: "45 мин",
              },
            ].map((work, index) => (
              <Card
                key={index}
                className="hover-scale hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-coffee-secondary">
                        {work.brand}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{work.model}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-coffee-light text-coffee-dark"
                    >
                      {work.time}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{work.issue}</p>
                  <div className="mt-4 flex items-center text-green-600">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    <span className="text-sm">Выполнено</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 slide-up">
            <h3
              className="text-4xl font-bold text-coffee-secondary mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              Отзывы клиентов
            </h3>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Open Sans" }}
            >
              Что говорят о нас наши клиенты на различных площадках
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Голубцова",
                platform: "Яндекс Карты",
                rating: 5,
                text: "Цены не задирают, после ремонта машинка действительно обрела вторую жизнь. Большое спасибо мастеру за качественную работу!",
                date: "3 дня назад",
              },
              {
                name: "Владимир Лабутин",
                platform: "Яндекс Карты",
                rating: 5,
                text: "Мастер грамотно и квалифицированно консультирует по вопросам связанным с особенностями эксплуатации и ремонта.",
                date: "1 неделю назад",
              },
              {
                name: "Людмила Л.",
                platform: "Авито",
                rating: 5,
                text: "Вежливые приятные мастера, быстро ремонтируют. Нормальный адекватный ремонт кофемашин.",
                date: "2 дня назад",
              },
              {
                name: "Оленька Т.",
                platform: "Google Карты",
                rating: 5,
                text: "Машинка выдавала ошибку, приехали быстро, починили качественно, все доходчиво объяснили и дали рекомендации.",
                date: "5 дней назад",
              },
              {
                name: "Клиент профи.ру",
                platform: "Профи.ру",
                rating: 5,
                text: "Профессионал! Выполнил сложный ремонт кофемашины Jura F50 качественно и аккуратно. Большое спасибо!",
                date: "1 день назад",
              },
              {
                name: "Константин М.",
                platform: "Яндекс Карты",
                rating: 5,
                text: "Чинят день в день, мастер очень компетентный. Хорошо разбирается в кофемашинах, быстро нашел поломку.",
                date: "4 дня назад",
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="hover-scale hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-coffee-secondary text-lg">
                        {review.name}
                      </CardTitle>
                      <div className="flex items-center mt-1">
                        <Badge variant="secondary" className="text-xs mr-2">
                          {review.platform}
                        </Badge>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className="text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">"{review.text}"</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-coffee-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Roboto" }}
            >
              Связаться с нами
            </h3>
            <p
              className="text-coffee-light max-w-2xl mx-auto"
              style={{ fontFamily: "Open Sans" }}
            >
              Готовы помочь вам восстановить работу вашей кофемашины
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    size={20}
                    className="mr-4 text-coffee-light"
                  />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="mr-4 text-coffee-light"
                  />
                  <span>Москва, ул. Кофейная, 15</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="mr-4 text-coffee-light"
                  />
                  <span>Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    size={20}
                    className="mr-4 text-coffee-light"
                  />
                  <span>info@kofemaster.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6">Быстрая заявка</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded-lg text-gray-900 border border-coffee-light focus:outline-none focus:ring-2 focus:ring-coffee-light"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  className="w-full p-3 rounded-lg text-gray-900 border border-coffee-light focus:outline-none focus:ring-2 focus:ring-coffee-light"
                />
                <textarea
                  placeholder="Описание проблемы"
                  rows={4}
                  className="w-full p-3 rounded-lg text-gray-900 border border-coffee-light focus:outline-none focus:ring-2 focus:ring-coffee-light"
                />
                <Button className="w-full bg-white text-coffee-primary hover:bg-coffee-light hover:text-coffee-dark">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Coffee" size={24} className="text-coffee-light" />
              <span className="text-xl font-bold">КофеМастер</span>
            </div>
            <p className="text-gray-300 text-sm">
              © 2024 КофеМастер. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
