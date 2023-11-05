import { MemoryRouter } from "react-router-dom";
import CompanyCard from "./CompanyCard";

export default {
  title: "component/CompanyCard",
  component: CompanyCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Карточка компании на странице фильтрации",
      },
    },
  },
  argTypes: {
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
      description: "Массив услуг, которые оказывает компания",
    },
    onIconLikeClick: {
      description: "Функция, обработка события добавления карточки в избранное",
    },
    iconLikeState: {
      description:
        "Дефолтное состоянии кнопки лайка (все неактивные, если пользователь не вошел или не добавил в избранное. И активная, если уже добавлял в избранное",
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
    name: "Дэвид Коперфильд",
    services: [
      "Исчезновение Статуи Свободы",
      "Полет перед зрителями на сцене",
      "Проход вскозь Великую китайскую стену",
      "Разрезание ассистентки",
      "блаблабла",
    ],
    city: "Город, которого нет",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?",
    iconLikeState: false,
  },
};
