import { object } from "prop-types";

export const COMPANIES_PER_PAGE = 10;

export const API_HOST = "https://dev.octopus-it.ru/api/v1/";

export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "auth/signup",
    SIGNUP_CONFIRM: "auth/signup_confirm",
    SIGNIN: "auth/signin",
    RESET_PASSWORD: "auth/reset_password",
    CHANGE_PASSWORD: "auth/reset_password_confirm",
  },
  USER: {
    ME: "user/me",
    UPDATE_PROFILE: "user/me/change_password",
  },
  INFO: {
    INDUSTRIES: "info/industries",
    CATEGORIES: "info/service_categories",
    SERVICES: "info/services",
    CITIES: "info/cities",
    SEARCH: "info/search_services_companies",
  },
  TOKENS: {
    REFRESH: "refresh",
  },
  COMPANIES: {
    FETCH: (params) => `companies?${new URLSearchParams(params).toString()}`,
    GET: (id) => `companies/${id}`,
  },
  FAVORITE: {
    FILTER: (params) => `companies/${new URLSearchParams(params).toString()}`,
    GET: (id) => `companies/${id}`,
    FAVORITE: (id) => `companies/${id}/favorite`,
  },
};

export function declinationsNumericalValues(value, text) {
  const v = Math.abs(value) % 100;
  const v1 = v % 10;
  if (v > 10 && v < 20) {
    return text[2];
  }
  if (v1 > 1 && v1 < 5) {
    return text[1];
  }
  if (v1 === 1) {
    return text[0];
  }
  return text[2];
}

export function cutText(text, limit) {
  if (text.length < limit) return text;
  return `${text.slice(0, limit)}...`;
}
export const hardcode = {
  requests: ["Веб-дизайн", "Разработка для Android", "Москва"],
  companies: [
    {
      title: "Веб-разработка",
      id: "1",
      comp: [
        { title: "Веб-разработка", link: "/bla-1" },
        { title: "Разработка под e-commerce", link: "/bla-1" },
        { title: "PHP", link: "/bla-2" },
        { title: "Ruby", link: "/bla-3" },
        { title: "JavaScript", link: "/bla-4" },
        { title: "Angular", link: "/bla-5" },
        { title: "React", link: "/bla-6" },
        { title: "Flutter", link: "/bla-7" },
        { title: "Django", link: "/bla-8" },
        { title: "WordPress", link: "/bla-9" },
        { title: "NET", link: "/bla-10" },
        { title: "NodeJS", link: "/bla-11" },
      ],
    },
    {
      title: "Разработка ПО",
      id: "2",
      comp: [
        { title: "Разработка для IOS", link: "/boo-1" },
        { title: "Разработка для Android", link: "/boo-2" },
        { title: "Кроссплатформа", link: "/boo-3" },
        { title: "IoT разработка", link: "/boo-4" },
        { title: "С# разработка", link: "/boo-5" },
        { title: "Swift", link: "/boo-6" },
        { title: "SQL", link: "/boo-7" },
        { title: "Искусственный интеллект", link: "/boo-8" },
        { title: "AR/VR", link: "/boo-9" },
        { title: "Блокчейн", link: "/boo-10" },
        { title: "Тестирование ПО", link: "/boo-11" },
      ],
    },
    {
      title: "Дизайн",
      id: "3",
      comp: [
        { title: "Веб-дизайн", link: "/boo-1" },
        { title: "UX/UI ", link: "/boo-2" },
        { title: "Графический дизайн", link: "/boo-3" },
        { title: "Дизайн логотипа", link: "/boo-4" },
        { title: "Продуктовый дизайн", link: "/boo-5" },
        { title: "Дизайн печати", link: "/boo-6" },
        { title: "Архитектурный дизайн", link: "/boo-7" },
      ],
    },
    {
      title: "Маркетинг",
      id: "4",
      comp: [
        { title: "Реклама", link: "/bla-1" },
        { title: "SMM", link: "/bla-2" },
        { title: "Digital маркетинг", link: "/bla-3" },
        { title: "Content маркетинг", link: "/bla-4" },
        { title: "Брендинг", link: "/bla-5" },
        { title: "Нейминг", link: "/bla-6" },
        { title: "Видео", link: "/bla-7" },
        { title: "PR", link: "/bla-8" },
        { title: "Digital стратегия", link: "/bla-9" },
        { title: "Прямой маркетинг", link: "/bla-10" },
        { title: "E-mail маркетинг", link: "/bla-11" },
        { title: "Исследования рынка", link: "/bla-12" },
      ],
    },
  ],
};

export const companies = [
  {
    name: "LukoilLukoilLukoilLukoilLukoil",
    city: "Москва",
    isFavourite: true,
  },
  {
    name: "GazpromIt",
    city: "Санкт-Петербург",
    isFavourite: false,
  },
  {
    name: "Sberbank",
    city: "Сочи",
    isFavourite: false,
  },
  {
    name: "Magnit-It",
    city: "Москва",
    isFavourite: true,
  },
  {
    name: "TNK-BP",
    city: "Барнаул",
    isFavourite: false,
  },
  {
    name: "GazpromIt",
    city: "Белгород",
    isFavourite: true,
  },
  {
    name: "INOSTUDIO",
    city: "Уфа",
    isFavourite: true,
  },
  {
    name: "Novatek",
    city: "Сочи",
    isFavourite: false,
  },
  {
    name: "Mentalstack",
    city: "Санкт-Петербург",
    isFavourite: true,
  },
  {
    name: "Afterlogic.Works",
    city: "Вологда",
    isFavourite: true,
  },
];

export const company = {
  id: 1212121,
  name: "Planet Express",
  description:
    "Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). ",
  tel: ["+7-999-999-99-99", "+7-888-888-88-88"],
  email: "bender@rodrigez.com",
  city: {
    id: 5454,
    name: "Новый Нью-Йорк",
  },
  address: "Москва, ул. Льва Толстого, 16",
  industries: [
    {
      id: 1,
      name: "Доставка грузов",
    },
    {
      id: 2,
      name: "Полёты в космос",
    },
    {
      id: 3,
      name: "Война с инопланетянами",
    },
  ],
  services: [
    {
      id: 1,
      name: "Маркетинг",
      category: {
        id: 11,
        name: "Реклама",
      },
    },
  ],
  logo: "https://www.looper.com/img/gallery/the-strange-detail-you-never-noticed-about-planet-express-in-futurama/intro-1611689563.jpg",
  website: "https://commons.wikimedia.org/wiki/Category:Futurama",
  team_size: 6,
  year_founded: 1999,
};

export const sleep = (delay) =>
  new Promise((res) => {
    setTimeout(res, delay);
  });

export const allServices = [
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

export const cities = [
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

export const LoadingStatus = {
  idle: "idle",
  loading: "loading",
  succeeded: "succeeded",
  failed: "failed",
};

/**
 *
 * @param {number[]} array
 * @param {[key: string]: boolean} modifications
 * @returns {number[]}
 */
export const modifyArray = (array, modifications) => {
  Object.entries(modifications).forEach(([key, shouldAdd]) => {
    const number = Number(key);
    const index = array.indexOf(number);
    if (shouldAdd && index === -1) {
      array.push(number);
    } else if (!shouldAdd && index !== -1) {
      array.splice(index, 1);
    }
  });

  return array;
};
