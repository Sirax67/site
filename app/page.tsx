
import CardAbout from "@/components/CardAbout";
import CardBenefit from "@/components/CardBenefit";
import CardHero from "@/components/CardHero";
import CardServices from "@/components/CardServices";
import {MoveRight, PackageOpen, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <WhyUs/>
    </div>
  );
}

const HERO_STATS = [
  { icon: PackageOpen, title: "5000+",    text: "заказов в день" },
  { icon: ShieldCheck, title: "99.8%",    text: "точность сборки" },
  { icon: Truck, title: "FBO/FBS",  text: "все маркетплейсы" },
];

function Hero () {
  return(
    <section className=" px-4 py-12 lg:max-h-250 lg:h-screen w-full text-white bg-[#1A2A52] flex flex-col">
      <div className="flex flex-col gap-13 items-center justify-center h-full">
        <div className="flex flex-col gap-13">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-col gap-7">
              <div className="max-w-132 flex flex-col gap-4">
                <p className="text-sm">
                  Автоматизированный фулфилмент
                </p>
                <h1 className="text-5xl font-bold">
                  Фулфилмент, который держит сроки и репутацию
                </h1>
                <p>
                  Автоматизированная упаковка, видеоконтроль 
                  каждого заказа и отправка в день поступления. 
                  Мы берем на себя хранение, сборку, маркировку 
                  и логистику.
                </p>
              </div>
              <div className="flex items-center gap-9">
                <Link href="/" className="text-sm font-bold flex items-center gap-2">
                  Рассчитать стоимость
                  <MoveRight/>
                </Link>
                <button className="cursor-pointer border border-white text-xs font-bold rounded-sm px-4 py-2">
                  Получить консультацию
                </button>
              </div>
            </div>
            <div className="text-black bg-white/80 flex items-center justify-center p-8 rounded-2xl w-100 h-54">
              Видео автоматической упаковочной линии
            </div>
          </div>
          <div className="flex flex-wrap gap-7 ">
              {HERO_STATS.map((item) => (
                <CardHero
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

const STEPS = [
  { title: "Оставляете заявку",           text: "Через сайт или Telegram" },
  { title: "Получаете расчет",            text: "Под ваш объем и формат работы" },
  { title: "Подписываем договор",         text: "Через ЭДО" },
  { title: "Принимаем товар",             text: "От поставщика или транспортной компании" },
  { title: "Автоматизированная упаковка", text: "С видеоконтролем каждого этапа" },
  { title: "Отправляем",                  text: "На маркетплейсы по всей России" },
  { title: "Получаете результат",         text: "Отчеты и прозрачную статистику" },
];

function About () {
  return(
    <section className="px-4 lg:px-48 py-12 flex flex-col items-center">
      <div className="flex flex-col gap-13 items-center">
        <div className="max-w-132 text-center flex flex-col gap-4">
          <h2 className="font-bold text-2xl">
            Как начать работать с нами
          </h2>
          <p>
            Подключение занимает всего несколько дней. 
            Все процессы максимально автоматизированы.
          </p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8">
            {STEPS.map((item, index) => (
              <CardAbout
                key={item.title}
                step={index + 1}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

const SERVICES = [
  { title: "Приемка и сортировка",        text: "Принимаем поставки любого объема и размещаем товар на адресное хранение." },
  { title: "Проверка на брак",            text: "Контроль качества перед отправкой покупателю." },
  { title: "Автоматизированная упаковка", text: "Автоматические линии и видеоконтроль каждого заказа." },
  { title: "Сборка заказов",              text: "Быстрая комплектация заказов по данным маркетплейсов." },
  { title: "Отправка на маркетплейсы",    text: "FBO и FBS для всех крупных площадок." },
  { title: "Хранение товаров",            text: "Безопасное адресное хранение продукции." },
  { title: "Интеграции",                  text: "Синхронизация с маркетплейсами и CRM." },
];

function Services () { 
  return(
    <section className="px-4 lg:px-48 py-12 bg-[#F8F8F8] px-4 lg:px-48 py-12 flex flex-col items-center">
      <div className="flex flex-col gap-13 items-center">
        <div className="max-w-132 text-center flex flex-col gap-4">
          <h2 className="font-bold text-2xl">
            Услуги фулфилмента
          </h2>
          <p>
            Полный цикл обработки товара от приемки до доставки.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((item) => (
              <CardServices
                key={item.title}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

const WHYUS_STATS = [
    { title: "Скорость",    text: "До 20 000 товаров за смену и отправка день в день." },
    { title: "Точность",    text: "99.8% точность сборки благодаря автоматизации." },
    { title: "Надежность",  text: "Страхование товара и круглосуточный контроль." },
    { title: "Поддержка",  text: "Персональный менеджер и оперативная помощь." },
]

function WhyUs () {
    return(
        <footer className="px-4 lg:px-48 py-12 text-white bg-[#1A2A52] flex flex-col gap-12 items-center">
            <h2 className="font-bold text-2xl">
                Почему выбирают BOXPACK
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {WHYUS_STATS.map((item) => (
                <CardBenefit
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
        </footer>
    )
}
