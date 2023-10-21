import { Label } from "./Label";
import "./Label.scss";

const meta = {
  title: "UI-KIT/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Лейбел для услуг или отраслей",
      },
    },
  },
  argTypes: {
    children: {
      description: "Обязательный параметр. Используйте для title",
    },
    extClassName: {
      description: "Необязательный параметр. Для дополнительных стилей",
    },
  },
};

export default meta;

export const DefaultLabel = {
  args: {
    children: "Разработка мобильных приложений",
  },
};
