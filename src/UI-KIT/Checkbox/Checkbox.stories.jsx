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
    onChange: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    value: {
      description: "Обязательный параметр. Передает значение чекбокса",
    },
  },
};

export default meta;

export const DefaultCheckbox = {
  args: {
    title: "Разработка программного обеспечения на заказ",
    value: true,
  },
};
