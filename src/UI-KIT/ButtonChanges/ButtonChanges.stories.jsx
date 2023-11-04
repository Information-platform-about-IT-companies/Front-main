import { ButtonChanges } from "UI-KIT/ButtonChanges/ButtonChanges";
import "./ButtonChanges.scss";

const meta = {
  title: "UI-KIT/ButtonChanges",
  component: ButtonChanges,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальная кнопка Button, используется для показа/скрытия элементов",
      },
    },
  },
  argTypes: {
    title: {
      description: "Обязательный параметр. Используйте для текста на кнопке",
    },
    onClick: {
      description:
        "Важно, обязательный параметр в случае, если компонент используется как кнопка. Передаем внутрь функцию",
    },
    extClassName: {
      description:
        "Необязательный параметр. Для дополнительных стилей (например, изменение обводки кнопки",
    },
  },
};

export default meta;

export const ButtonChangesPassword = {
  args: {
    title: "Изменить пароль",
  },
};
