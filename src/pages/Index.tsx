import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const services = [
    {
      icon: "Dumbbell",
      title: "Персональные тренировки",
      description: "Индивидуальная программа под ваши цели",
      price: "от 2000₽"
    },
    {
      icon: "Users",
      title: "Групповые занятия",
      description: "Энергичные тренировки в компании единомышленников",
      price: "от 800₽"
    },
    {
      icon: "Heart",
      title: "Онлайн-коучинг",
      description: "Поддержка и мотивация 24/7",
      price: "от 5000₽/мес"
    },
    {
      icon: "Apple",
      title: "Планы питания",
      description: "Персональные рекомендации по питанию",
      price: "от 3000₽"
    }
  ];

  const programs = [
    {
      title: "Похудение",
      duration: "12 недель",
      intensity: "Средняя",
      color: "bg-primary"
    },
    {
      title: "Набор массы",
      duration: "16 недель",
      intensity: "Высокая",
      color: "bg-secondary"
    },
    {
      title: "Функциональный тренинг",
      duration: "8 недель",
      intensity: "Средняя",
      color: "bg-accent"
    }
  ];

  const videoLessons = [
    {
      id: 1,
      title: "Базовые упражнения для начинающих",
      duration: "15 мин",
      exercises: ["Приседания", "Отжимания", "Планка"],
      thumbnail: "https://cdn.poehali.dev/projects/8608eb3c-2019-4dfc-946b-d1c5c5edd374/files/b2f5dca6-1d1b-48f4-b3bc-c2e86e908e58.jpg"
    },
    {
      id: 2,
      title: "Кардио-тренировка высокой интенсивности",
      duration: "20 мин",
      exercises: ["Бёрпи", "Прыжки", "Бег на месте"],
      thumbnail: "https://cdn.poehali.dev/projects/8608eb3c-2019-4dfc-946b-d1c5c5edd374/files/b2f5dca6-1d1b-48f4-b3bc-c2e86e908e58.jpg"
    },
    {
      id: 3,
      title: "Упражнения на пресс",
      duration: "12 мин",
      exercises: ["Скручивания", "Велосипед", "Подъем ног"],
      thumbnail: "https://cdn.poehali.dev/projects/8608eb3c-2019-4dfc-946b-d1c5c5edd374/files/b2f5dca6-1d1b-48f4-b3bc-c2e86e908e58.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Анна К.",
      result: "-15 кг за 3 месяца",
      text: "Невероятный результат! Юра помог мне обрести уверенность и здоровье.",
      rating: 5
    },
    {
      name: "Дмитрий С.",
      result: "+8 кг мышечной массы",
      text: "Профессиональный подход и постоянная поддержка. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Елена М.",
      result: "Улучшение выносливости",
      text: "Тренировки стали частью моей жизни. Чувствую себя прекрасно каждый день!",
      rating: 5
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "07:00 - 09:00, 18:00 - 21:00", type: "Персональные" },
    { day: "Вторник", time: "19:00 - 20:30", type: "Групповые" },
    { day: "Среда", time: "07:00 - 09:00, 18:00 - 21:00", type: "Персональные" },
    { day: "Четверг", time: "19:00 - 20:30", type: "Групповые" },
    { day: "Пятница", time: "07:00 - 09:00, 18:00 - 21:00", type: "Персональные" },
    { day: "Суббота", time: "10:00 - 14:00", type: "Персональные и групповые" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/8608eb3c-2019-4dfc-946b-d1c5c5edd374/files/b2f5dca6-1d1b-48f4-b3bc-c2e86e908e58.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 text-lg py-2 px-6 animate-scale-in" variant="secondary">
            Твой путь к идеальной форме
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-up">
            ТРАНСФОРМИРУЙ СЕБЯ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Персональные тренировки с сертифицированным тренером. Достигай целей быстрее с профессиональной поддержкой.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 py-6 group">
              Начать тренировки
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Услуги и программы</h2>
            <p className="text-xl text-muted-foreground">Выбери подходящий формат тренировок</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`h-2 ${program.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Activity" size={20} className="text-muted-foreground" />
                      <span>Интенсивность: {program.intensity}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 group-hover:scale-105 transition-transform">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">Видеоуроки</Badge>
            <h2 className="text-5xl font-bold mb-4">Техника выполнения упражнений</h2>
            <p className="text-xl text-muted-foreground">Изучай правильную технику с видео-инструкциями</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoLessons.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" className="text-primary ml-1" size={32} />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-background/90">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Упражнения в уроке:</p>
                    {video.exercises.map((exercise, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span className="text-sm">{exercise}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Результаты моих клиентов</h2>
            <p className="text-xl text-muted-foreground">Реальные истории трансформации</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/8608eb3c-2019-4dfc-946b-d1c5c5edd374/files/c6cff7bc-cb21-475a-ab33-8b2610a08733.jpg"
                alt="Результаты клиентов"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">{testimonial.result}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-xl text-muted-foreground">Выбери удобное время для тренировок</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      index !== schedule.length - 1 ? 'border-b' : ''
                    } hover:bg-muted/50 transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Calendar" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.day}</h3>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:ml-auto">
                      <Icon name="Clock" size={18} />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Готов начать трансформацию?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Запишись на бесплатную консультацию и получи персональный план тренировок
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить: +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать на почту
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FitCoach</h3>
              <p className="text-muted-foreground">
                Профессиональные тренировки для достижения твоих целей
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 info@fitcoach.ru</p>
                <p>📍 Москва, ул. Спортивная, 10</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>© 2024 FitCoach. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
