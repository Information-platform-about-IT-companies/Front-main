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
          "Универсальная кнопка Button, она же ссылка Link, она же NavLink. Если компонент используется как кнопка и нужно явно указать type - пробросьте ...props",
      },
    },
  },
  argTypes: {
    url: {
      description:
        "Важно, обязательный параметр в случае, если компонент используется как ссылка. Если как кнопка - не указываем его",
    },
    linkType: {
      description:
        "Важно, обязательный параметр в случае, если компонент используется как ссылка. Если как кнопка - не указываем его. Может принимать 2 значения - link | navlink",
      options: ["link", "navlink"],
      control: { type: "radio" },
    },
    size: {
      description:
        "Обязательный параметр указанием размера кнопки (условно маленькая или большая. Может принимать 2 значения - standard | medium",
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

export const FillButton = {
  args: {
    title: "Кнопка с заливкой",
    fill: true,
    size: "standard",
  },
};

export const OutlineButton = {
  args: {
    title: "Кнопка с обводкой",
    fill: false,
    size: "standard",
  },
};

export const DisabledFillButton = {
  args: {
    title: "Неактивная кнопка с заливкой",
    fill: true,
    size: "standard",
    disabled: true,
  },
};

export const DisabledOutlineButton = {
  args: {
    title: "Неактивная Кнопка с обводкой",
    fill: false,
    size: "standard",
    disabled: true,
  },
};

export const MediumFillButton = {
  args: {
    title: "Большая кнопка с заливкой",
    fill: true,
    size: "medium",
  },
};

export const MediumOutlineButton = {
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

export const MediumFillButtonWithStyle = {
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
    linkType: "link",
  },
};

export const OutlineLink = {
  args: {
    title: "Ссылка с обводкой",
    fill: false,
    size: "standard",
    url: "#",
    linkType: "link",
  },
};

export const NavLinks = {
  render: () => (
    <div
      style={{
        width: "200px",
      }}
    >
      <Button size="standard" title="Active Navlink 1" url="/" linkType="navlink" />
      <Button size="standard" title="Navlink 2" url="/2" linkType="navlink" />
      <Button size="standard" title="Navlink 3" url="/3" linkType="navlink" />
    </div>
  ),
};
