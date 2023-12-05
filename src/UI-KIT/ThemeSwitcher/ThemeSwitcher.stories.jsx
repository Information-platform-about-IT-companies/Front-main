import ThemeSwitcher from "./ThemeSwitcher";

export default {
  title: "UI-KIT/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Переключатель темы оформления сайта",
      },
    },
  },
  argTypes: {
    theme: {
      description: "Текущая тема",
    },
    setTheme: {
      description: "Функция смены темы",
    },
  },
};

export const LightTheme = {
  args: {
    theme: "light",
  },
};

export const DarkTheme = {
  args: {
    theme: "dark",
  },
};
