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
<<<<<<< HEAD
    id: {
      description: "Обязательный параметр. Передаем внутрь id чекбокса",
    },
    name: {
      description: "Обязательный параметр. Передаем внутрь name чекбокса",
=======
    onChange: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    value: {
      description: "Обязательный параметр. Передает значение чекбокса",
>>>>>>> 2895b2c (Сделала компонент Checkbox и storybook к нему)
    },
  },
};

export default meta;

export const DefaultCheckbox = {
  args: {
    title: "Разработка программного обеспечения на заказ",
<<<<<<< HEAD
    id: "1",
    name: "checkbox",
=======
    value: true,
>>>>>>> 2895b2c (Сделала компонент Checkbox и storybook к нему)
  },
};
