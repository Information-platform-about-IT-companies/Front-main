import { Button } from "./Button";

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
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    fill: {
      description:
        "Обязательный параметр. Отвечает за то, какой внешний вид будет у кнопки - в заливкой или без",
      options: [true, false],
      control: { type: "radio" },
    },
    children: {
      description: "Обязательный параметр. Используйте для title",
    },
    onClick: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    icon: {
      description: "Необязательный параметр. Передаем внутрь компонент с иконкой",
    },
    style: {
      description: "Необязательный параметр. Для дополнительных стилей",
    },
  },
};

export default meta;

export const SmallButtonWithFill = {
  args: {
    children: "Кнопка с заливкой",
    fill: true,
    size: "small",
  },
};

export const SmallButtonWithOutline = {
  args: {
    children: "Кнопка с обводкой",
    fill: false,
    size: "small",
  },
};

export const MediumButtonWithFill = {
  args: {
    children: "Большая кнопка с заливкой",
    fill: true,
    size: "medium",
  },
};

export const MediumButtonWithOutline = {
  args: {
    children: "Большая кнопка с обводкой",
    fill: false,
    size: "medium",
  },
};

export const MediumButtonWithStyle = {
  args: {
    children: "Большая кнопка с другими стилями",
    fill: false,
    size: "medium",
    style: {
      borderRadius: "0px 10px 10px 0px",
    },
  },
};
