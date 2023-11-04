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
    textColor: {
      description:
        "Цвет текста ссылки. Можно вносить любой цвет в виде: #00FF00 или rgb(0, 255, 0) или green",
    },
    linkColor: {
      description:
        "Цвет подчеркивания при наведении на ссылку. Можно вносить любой цвет в виде: #00FF00 или rgb(0, 255, 0) или green",
    },
    weight: {
      description: "Начертание текста",
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
    title: "Привет, я ссылка на главной странице",
    lineColor: "#479fba",
  },
};

export const CardLink = {
  args: {
    url: "/",
    title: "Подробнее",
    textColor: "#4e4cbf",
    lineColor: "#605ed6",
    weight: "700",
  },
};
