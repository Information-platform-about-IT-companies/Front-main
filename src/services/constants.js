export const COMPANIES_PER_PAGE = 10;

export const API_HOST = "https://dev.octopus-it.ru/api/v1/";
export const API_PATH = "/api/v1/";

export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "auth/signup/",
    SIGNUP_CONFIRM: "auth/signup_confirm/",
    SIGNIN: "auth/signin/",
    RESET_PASSWORD: "auth/reset_password/",
    CONFIRM_RESET_PASSWORD: "auth/reset_password_confirm/",
  },
  USER: {
    ME: "users/me/",
    UPDATE_PROFILE: "users/me/",
    CHANGE_PASSWORD: "users/change_password/",
  },
  INFO: {
    INDUSTRIES: "info/industries/",
    CATEGORIES: "info/service_categories/",
    SERVICES: "info/services/",
    CITIES: "info/cities/",
    SEARCH: "info/search_services_companies/",
  },
  TOKENS: {
    REFRESH: "tokens/refresh/",
  },
  COMPANIES: {
    FETCH: (params) => `companies/?${new URLSearchParams(params).toString()}`,
    GET: (id) => `companies/${id}/`,
  },
  FAVORITE: {
    ADD: (id) => `companies/${id}/favorite/`,
    REMOVE: (id) => `companies/${id}/favorite/`,
  },
};

export const ROUTES = {
  ROOT: "/",
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  FILTER: "/filter",
  PROFILE: "/profile",
  COMPANY: "/company",
  PASS_RECOVERY: "/passrecovery",
  NOT_FOUND: "/400",
};

const ICONS = {
  BUSINESS: "IconCategoryBusiness",
  SOFTWARE: "IconCategorySoftware",
  DESIGN: "IconCategoryDesign",
  MARKETING: "IconCategoryMarketing",
};

export const selectedCategoriesMap = [
  { id: 1, icon: ICONS.SOFTWARE },
  { id: 2, icon: ICONS.DESIGN },
  { id: 4, icon: ICONS.MARKETING },
  { id: 5, icon: ICONS.BUSINESS },
];

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
  requests: [
    {
      id: "001",
      name: "Веб-разработка",
      link: "/filter?services=[27]",
    },
    {
      id: "002",
      name: "Веб-дизайн",
      link: "/filter?services=[17]",
    },
    {
      id: "003",
      name: "Москва",
      link: "/filter?cities=[9]",
    },
  ],
};

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
