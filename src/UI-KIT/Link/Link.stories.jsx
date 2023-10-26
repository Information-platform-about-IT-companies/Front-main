import { MemoryRouter } from "react-router-dom";
import { LinkItem } from "./LinkItem";

const meta = {
  title: "UI-KIT/Link",
  component: LinkItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Универсальная ссылка. используется для списка ссылок на главной странице и на страницах входа/регистрации",
      },
    },
  },
  argTypes: {
    url: {
      description: "Ссылка для перехода",
    },
    title: {
      description: "Текст ссылки",
    },
    withBullet: {
      description: "Необязательный параметр (для вывода булета)",
      options: [true, false],
      control: { type: "radio" },
      defaultvalue: false,
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

export const DefaultLink = {
  args: {
    url: "/",
    title: "Это ссылка",
  },
};

export const BulletLink = {
  args: {
    url: "/",
    title: "Это ссылка",
    withBullet: true,
  },
};
