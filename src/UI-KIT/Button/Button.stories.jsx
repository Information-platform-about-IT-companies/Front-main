import { Button } from "UI-KIT/Button/Button";
import "./Button.scss";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "UI-KIT/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Универсальная кнопка, она же ссылка. Если компонент используется как кнопка и нужно явно указать type - пробросьте ...props",
      },
    },
  },
  argTypes: {
    url: {
      description:
        "Важно, обязательный параметр в случае, если компонент используется как ссылка. Если как кнопка - не указываем его",
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
      description:
        "Важно, обязательный параметр в случае, если компонент используется как кнопка. Передаем внутрь функцию",
    },
    extClassName: {
      description:
        "Необязательный параметр. Для дополнительных стилей (например, изменение обводки кнопки",
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

export const MediumOutlineButtonWithStyle = {
  args: {
    title: "Большая кнопка с обводкой и другими стилями",
    fill: false,
    size: "medium",
    extClassName: "for-button-story",
  },
};

export const MediumButtonWithStyle = {
  args: {
    title: "Большая кнопка с другими стилями",
    fill: true,
    size: "medium",
    extClassName: "for-button-story",
  },
};

export const FillLink = {
  args: {
    title: "Ссылка с заливкой",
    fill: true,
    size: "standard",
    url: "#",
  },
};

export const OutlineLink = {
  args: {
    title: "Ссылка с обводкой",
    fill: false,
    size: "standard",
    url: "#",
  },
};
