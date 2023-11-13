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
    city: "Moscow",
    inFavorite: true,
  },
  {
    name: "GazpromIt",
    city: "Taganrog",
    inFavorite: false,
  },
  {
    name: "Sberbank",
    city: "Vakanda",
    inFavorite: true,
  },
  {
    name: "Magnit-It",
    city: "Moscow",
    inFavorite: true,
  },
  {
    name: "TNK-BP",
    city: "Tyva",
    inFavorite: true,
  },
  {
    name: "GazpromIt",
    city: "Samara",
    inFavorite: true,
  },
  {
    name: "INOSTUDIO",
    city: "Ufa",
    inFavorite: true,
  },
  {
    name: "Novatek",
    city: "DC2",
    inFavorite: true,
  },
  {
    name: "Mentalstack",
    city: "Taganrog",
    inFavorite: true,
  },
  {
    name: "Afterlogic.Works",
    city: "Krasnodar",
    inFavorite: true,
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
