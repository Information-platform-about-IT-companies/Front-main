import { MemoryRouter } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import "./Breadcrumbs.scss";
import "../../index.scss";

const meta = {
  title: "UI-KIT/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Хлебные крошки на карточке компании",
      },
    },
  },
  argTypes: {
    main: {
      description: "Обязательный параметр. Объект со свойствами name и link",
      control: "object",
    },
    services: {
      description: "Обязательный параметр. Объект со свойствами name и link",
      control: "object",
    },
    city: {
      description: "Обязательный параметр. Объект со свойствами name и link",
      control: "object",
    },
    company: {
      description: "Обязательный параметр. Объект со свойствами name и link",
      control: "object",
    },
  },
};

export default meta;

export const BreadcrumbsExample = {
  args: {
    main: {
      name: "Главная",
      link: "#",
    },
    services: {
      name: "Веб-разработка",
      link: "#",
    },
    city: {
      name: "Таганрог",
      link: "#",
    },
    company: {
      name: "Mentalstack",
      link: "#",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
