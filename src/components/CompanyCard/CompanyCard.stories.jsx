import { MemoryRouter } from "react-router-dom";
import { CompanyCard } from "./CompanyCard";

export default {
  title: "components/CompanyCard",
  component: CompanyCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Карточка компании. Используется для вывода на странице фильтрации с типом 'filterCard' и в ЛК (избранное) с типом 'favoriteCard'",
      },
    },
  },
  argTypes: {
    type: {
      description:
        "Тип карточки. Для вывода на странице фильтрации - 'filterCard', для ЛК (избранное) -  'favoriteCard'",
      options: ["filterCard", "favoriteCard"],
      control: { type: "radio" },
    },
    logo: {
      description: "Лого компании. Если его не указывать, то будет заглушка",
    },
    name: {
      description: "Название компании",
    },
    city: {
      description: "Город, в котором находится центральный офис компании",
    },
    description: {
      description: "Описание компании",
    },
    services: {
      description: "Массив услуг (объектов) , которые оказывает компания",
    },
    onIconHeartClick: {
      description: "Функция, обработка события добавления карточки в избранное",
    },
    iconHeartFill: {
      description:
        "Дефолтное состоянии кнопки лайка (все неактивные, если пользователь не вошел или не добавил в избранное. И активная, если уже добавлял в избранное",
    },
    extClassCardName: {
      description: "Дополнительный класс для изменения стилей карточки",
    },
    inFavorite: {
      description: "Состояние для лайка",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const CardCompany = {
  args: {
    type: "filterCard",
    services: [
      { id: 1, name: "Исчезновение Статуи Свободы" },
      { id: 2, name: "Полет перед зрителями на сцене" },
      { id: 3, name: "Проход вскозь Великую китайскую стену" },
      { id: 4, name: "Разрезание ассистентки" },
      { id: 5, name: "блаблабла" },
    ],
    city: "Город N",
    name: "Дэвид Блейн",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?",
    iconHeartFill: false,
  },
};

export const FavoriteCardCompany = {
  args: {
    type: "filterCard",
    inFavorite: true,
    services: [
      { id: 1, name: "Исчезновение Статуи Свободы" },
      { id: 2, name: "Полет перед зрителями на сцене" },
      { id: 3, name: "Проход вскозь Великую китайскую стену" },
      { id: 4, name: "Разрезание ассистентки" },
      { id: 5, name: "блаблабла" },
    ],
    city: "Город N",
    name: "Дэвид Блейн",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?",
  },
};

export const CardCompanyInFavorite = {
  args: {
    type: "favoriteCard",
    city: "Город N",
    name: "Дэвид Блейн",
    inFavorite: true,
  },
};
