import { useState } from "react";
import "./Filter.scss";

import { FilterTabs } from "./FilterTabs/FilterTabs";
import { FilterNav } from "./FilterNav/FilterNav";
import { ServiceForm } from "./FilterForms/ServiceForm/ServiceForm";
import { CityForm } from "./FilterForms/CityForm/CityForm";

const allServices = [
  {
    id: 1,
    category: "Разработка ПО",
    services: [
      "Разработка мобильных приложений",
      "Разработка приложений для носимых устройств",
      "Развитие электронной коммерции",
      "Разработка программного обеспечения на заказ",
      "Модернизация корпоративных приложений",
      "Консалтинг в области IT-стратегии",
      "Управление приложениями и поддержка",
      "Тестирование приложений",
      "Разработка IoT",
      "Искусственный интеллект",
      "Блокчейн",
      "Консалтинг в области информационных технологий и больших данных",
      "Разработка  AR/VR",
      "Облачный консалтинг",
      "Кибербезопасность",
      "Разработка других приложений",
    ],
  },
  {
    id: 2,
    category: "Дизайн",
    services: [
      "Веб-дизайн",
      "UX/UI ",
      "Графический дизайн",
      "Дизайн логотипа",
      "Продуктовый дизайн",
      "Дизайн печати",
      "Архитектурный дизайн",
      "Брендинг",
      "Дизайн упаковки",
      "Наружная реклама",
    ],
  },
  { id: 3, category: "Веб-разработка", services: ["Веб-разработка"] },
  {
    id: 4,
    category: "Маркетинг",
    services: [
      "SEO",
      "Реклама",
      "Контент-маркетинг",
      "Маркетинговая стратегия",
      "PR",
      "Медиапланирование и закупки",
      "Маркетинг мобильных устройств и приложений",
      "Прямой маркетинг",
      "Партнерский маркетинг",
      "Корпоративная фотография",
      "SMM",
      "Цифровая стратегия",
    ],
  },
  {
    id: 5,
    category: "Бизнес-услуги",
    services: [
      "Видеопроизводство",
      "IT-менеджмент",
      "CRM Консалтинг",
      "ERP Консалтинг",
      "Озвучка",
      "Консалтинг в области унифицированных коммуникаций",
      "Дизайн интерьера",
      "ECM консалтинг",
      "Видео трансляции",
      "Бизнес консалтинг",
      "Увеличение числа IT-сотрудников",
      "Человеческие ресурсы",
    ],
  },
];

const cities = [
  "Москва",
  "Сочи",
  "Санкт-Петербург",
  "Барнаул",
  "Белгород",
  "Брянск",
  "Владивосток",
  "Волгоград",
  "Вологда",
  "Воронеж",
  "Ижевск",
  "Иваново",
  "Иркутск",
  "Краснодар",
  "Томск",
  "Красноярск",
  "Тула",
  "Набережные Челны",
  "Ульяновск",
  "Нижний Новгород",
  "Уфа",
  "Новороссийск",
  "Хабаровск",
  "Новосибирск",
  "Челябинск",
  "Новочеркасск",
  "Омск",
  "Орел",
  "Пенза",
  "Пермь",
  "Йошкар-Ола",
  "Таганрог",
  "Казань",
  "Ростов-на-Дону",
  "Калининград",
  "Калуга",
  "Саратов",
];

export function Filter() {
  const [checkedValues, setChekedValues] = useState({ Город: {}, Услуги: {} });

  const [activeForm, setActiveForm] = useState("Город");

  const onSubmit = (e) => {
    e.preventDefault();

    /* логика по отправке данных на сервер */

    setChekedValues({ Город: {}, Услуги: {} });
  };

  return (
    <section className="filter">
      <FilterTabs
        activeForm={activeForm}
        setActiveForm={setActiveForm}
        checkedValues={checkedValues}
      />

      <div className="filter__content">
        <FilterNav
          activeForm={activeForm}
          setActiveForm={setActiveForm}
          checkedValues={checkedValues}
        />

        {activeForm === "Услуги" ? (
          <ServiceForm
            onSubmit={onSubmit}
            allServices={allServices}
            checkedValues={checkedValues}
            setChekedValues={setChekedValues}
          />
        ) : (
          <CityForm
            onSubmit={onSubmit}
            cities={cities}
            checkedValues={checkedValues}
            setChekedValues={setChekedValues}
          />
        )}
      </div>
    </section>
  );
}
