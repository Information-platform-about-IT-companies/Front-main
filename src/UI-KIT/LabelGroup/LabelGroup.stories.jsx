import { MemoryRouter } from "react-router-dom";
import LabelGroup from "./LabelGroup";

const meta = {
  title: "UI-KIT/LabelGroup",
  component: LabelGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Группа лейблов с заголовком. Если в группе более 3-х лейблов - будет добавляться еще 1 не кликабельный с указанием количества",
      },
    },
  },
  argTypes: {
    items: {
      description: "Массив объектов",
    },
    title: {
      description: "Заголовок для группы",
    },
    isLink: {
      description: "Указанием являются ли лейблы внутри ссылками. Если да, то курсор меняется",
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

export const DefaulLabelGroup = {
  args: {
    items: [
      { id: 1, name: "Гарри Поттер и филосовский камень" },
      { id: 2, name: "Гарри Поттер и и тайная комната" },
    ],
    title: "Книги",
  },
};

export const LinkLabelGroup = {
  args: {
    items: [
      { id: 1, name: "Спать весь день" },
      { id: 2, name: "Мурчать" },
      { id: 3, name: "Будить нелюбимого хозяина в 4 утра" },
      { id: 4, name: "Что-то" },
    ],
    title: "Услуги",
    isLink: true,
  },
};
