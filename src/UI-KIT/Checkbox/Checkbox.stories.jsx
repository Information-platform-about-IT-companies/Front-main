import { Checkbox } from "./Checkbox";

const meta = {
  title: "UI-KIT/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Чекбокс фильтров",
      },
    },
  },
  argTypes: {
    title: {
      description: "Обязательный параметр. Используйте для title",
    },
    id: {
      description: "Обязательный параметр. Передаем внутрь id чекбокса",
    },
    name: {
      description: "Обязательный параметр. Передаем внутрь name чекбокса",
    },
    onChange: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
  },
};

export default meta;

export const DefaultCheckbox = {
  args: {
    title: "Разработка программного обеспечения на заказ",
    id: "1",
    name: "checkbox",
  },
};
