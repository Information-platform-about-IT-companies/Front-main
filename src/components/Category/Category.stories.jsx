import Icon from "UI-KIT/Icons";
import { Category } from "components/Category/Category";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "component/Category",
  component: Category,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальный блок с категориями",
      },
    },
  },
  argTypes: {
    categoryTitle: {
      description: "Обязательный параметр. Title категории",
    },
    categories: {
      description: "Обязательный параметр. Массив с названиями категорий",
    },
    icon: {
      description: "Обязательный параметр. Передаем внутрь компонент с иконкой",
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

export default meta;

export const NewCategory = {
  args: {
    categoryTitle: "Веб-разработка",
    icon: (
      <Icon icon="IconRound" symbol="W" color="#4E4CBF" size="32" extClassName="category_icon" />
    ),
    categories: [
      { title: "Веб-разработка" },
      { title: "Разработка под e-commerce" },
      { title: "PHP" },
      { title: "Ruby" },
      { title: "JavaScript" },
      { title: "Angular" },
      { title: "React" },
      { title: "Flutter" },
      { title: "Django" },
      { title: "WordPress" },
      { title: ".NET" },
      { title: "NodeJS" },
    ],
  },
};
