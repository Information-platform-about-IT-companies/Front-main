export const makeFakeServices = {
  requests: ["Веб-дизайн", "Разработка для Android", "Москва"],
  companies: [
    {
      id: 1,
      name: "Разработка ПО",
      icon: "IconCategorySoftware",
      services: [
        { id: 1, name: "Разработка мобильных приложений", link: "/filter?services=[1]" },
        { id: 2, name: "E-Commerce", link: "/filter?services=[2]" },
        { id: 3, name: "Модернизация корпоративного ПО", link: "/filter?services=[3]" },
        { id: 4, name: "Управление и поддержка ПО", link: "/filter?services=[4]" },
        { id: 5, name: "Искусственный интеллект", link: "/filter?services=[5]" },
        {
          id: 6,
          name: "Консалтинг в области бизнес анализа и больших данных",
          link: "/filter?services=[6]",
        },
        { id: 7, name: "Разработка специализированного ПО", link: "/filter?services=[7]" },
        {
          id: 8,
          name: "Разработка приложений для носимых устройств",
          link: "/filter?services=[8]",
        },
        { id: 9, name: "Разработка ПО на заказ", link: "/filter?services=[9]" },
        { id: 10, name: "Консалтинг в области IT-стратегии", link: "/filter?services=[10]" },
        { id: 11, name: "Тестирование ПО", link: "/filter?services=[11]" },
        { id: 12, name: "Разработка IoT", link: "/filter?services=[12]" },
        { id: 13, name: "Блокчейн", link: "/filter?services=[13]" },
        { id: 14, name: "Разработка AR/VR", link: "/filter?services=[14]" },
        { id: 15, name: "Консалтинг в области облачных технологий", link: "/filter?services=[15]" },
        { id: 16, name: "Кибербезопасность", link: "/filter?services=[16]" },
      ],
    },
    {
      id: 2,
      name: "Дизайн",
      icon: "IconCategoryDesign",
      services: [
        { id: 17, name: "Веб-дизайн", link: "/filter?services=[17]" },
        { id: 18, name: "UX/UI-дизайн", link: "/filter?services=[18]" },
        { id: 19, name: "Графический дизайн", link: "/filter?services=[19]" },
        { id: 20, name: "Дизайн логотипов", link: "/filter?services=[20]" },
        { id: 21, name: "Продуктовый дизайн", link: "/filter?services=[21]" },
        { id: 22, name: "Полиграфический дизайн", link: "/filter?services=[22]" },
        { id: 23, name: "Другие виды дизайна", link: "/filter?services=[23]" },
        { id: 24, name: "Разработка фирменного стиля", link: "/filter?services=[24]" },
        { id: 25, name: "Дизайн упаковки", link: "/filter?services=[25]" },
        { id: 26, name: "Наружная реклама", link: "/filter?services=[26]" },
      ],
    },
    {
      id: 3,
      name: "Веб-разработка",
      icon: "IconCategoryWeb",
      services: [{ id: 27, name: "Веб-разработка", link: "/filter?services=[27]" }],
    },
    {
      id: 4,
      name: "Маркетинг",
      icon: "IconCategoryMarketing",
      services: [
        { id: 28, name: "SEO", link: "/filter?services=[28]" },
        { id: 29, name: "Реклама", link: "/filter?services=[29]" },
        { id: 30, name: "Pay Per Click", link: "/filter?services=[30]" },
        { id: 31, name: "Оптимизация конверсий", link: "/filter?services=[31]" },
        // ... остальные сервисы
      ],
    },
    // ... остальные категории
  ],
};

export const makeFakeCard = {
  logo: "logo",
  name: "Gazprompt",
  city: "Moscow",
  services: ["Веб-разработка", "Дизайн"],
  description: "Описание картонки",
  inFavorite: true,
};

export const makeFakeUser = {
  firstName: "Vasya",
  lastName: "Pupkin",
  email: "VasyaPupkin@yandex.ru",
};
