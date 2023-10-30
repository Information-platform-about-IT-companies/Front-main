import { Button } from "UI-KIT/Button/Button";
import "./Button.scss";

const meta = {
  title: "UI-KIT/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальная кнопка",
      },
    },
  },
  argTypes: {
    type: {
      description:
        "Необязательный параметр с указанием типа кнопки. Может принимать в себя значения button | reset | submit",
      options: ["button", "reset", "submit"],
      control: { type: "radio" },
    },
    size: {
      description:
        "Обязательный параметр указанием размера кнопки (условно маленькая или большая. Может принимать 2 значения - small | medium",
      options: ["standard", "medium"],
      control: { type: "radio" },
    },
    fill: {
      description:
        "Обязательный параметр. Отвечает за то, какой внешний вид будет у кнопки - в заливкой или без",
      options: [true, false],
      control: { type: "radio" },
    },
    title: {
      description: "Обязательный параметр. Используйте для текста на кнопке",
    },
    onClick: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    icon: {
      description: "Необязательный параметр. Передаем внутрь компонент с иконкой",
    },
    extClassName: {
      description:
        "Необязательный параметр. Для дополнительных стилей (например, изменение обводки кнопки",
    },
  },
};

export default meta;

export const ButtonWithFill = {
  args: {
    title: "Кнопка с заливкой",
    fill: true,
    size: "standard",
  },
};

export const ButtonWithOutline = {
  args: {
    title: "Кнопка с обводкой",
    fill: false,
    size: "standard",
  },
};

export const DisabledButtonWithFill = {
  args: {
    title: "Неактивная кнопка с заливкой",
    fill: true,
    size: "standard",
    disabled: true,
  },
};

export const DisabledButtonWithOutline = {
  args: {
    title: "Неактивная Кнопка с обводкой",
    fill: false,
    size: "standard",
    disabled: true,
  },
};

export const MediumButtonWithFill = {
  args: {
    title: "Большая кнопка с заливкой",
    fill: true,
    size: "medium",
  },
};

export const MediumButtonWithOutline = {
  args: {
    title: "Большая кнопка с обводкой",
    fill: false,
    size: "medium",
  },
};

export const MediumButtonWithStyle = {
  args: {
    title: "Большая кнопка с другими стилями",
    fill: false,
    size: "medium",
    extClassName: "for-story",
  },
};
