import { CategoryTitle } from "UI-KIT/CategoryTitle/CategoryTitle";
import "./CategoryTitle.scss";
import Icon from "UI-KIT/Icons";

const meta = {
  title: "UI-KIT/CategoryTitle",
  component: CategoryTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальный блок с названием категории",
      },
    },
  },
  argTypes: {
    title: {
      description: "Обязательный параметр. Используйте для title",
    },
    icon: {
      description: "Обязательный параметр. Передаем внутрь компонент с иконкой",
    },
  },
};

export default meta;

export const NewCategoryTitle = {
  args: {
    title: "Веб-разработка",
    icon: (
      <Icon icon="IconRound" symbol="W" color="#4E4CBF" size="32" extClassName="category_icon" />
    ),
  },
};
