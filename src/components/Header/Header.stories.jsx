import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import "./Header.scss";

const meta = {
  title: "UI-KIT/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Шапка сайта",
      },
    },
  },
  argTypes: {
    loggedIn: {
      description: "Признак авторилован пользователь или нет",
      options: [true, false],
    },
    userData: {
      description: "Пользовательские данные - имя и фамилия",
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

export const HeaderWithAuth = {
  args: {
    loggedIn: true,
    userData: "Вася Пупкин",
  },
};

export const HeaderWithoutAuth = {
  args: {
    loggedIn: false,
  },
};
