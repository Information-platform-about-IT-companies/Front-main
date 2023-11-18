import React from "react";

import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import Icon from "UI-KIT/Icons";
import "./ButtonIcon.scss";

const meta = {
  title: "UI-KIT/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Кнопка с иконкой",
      },
    },
  },
  argTypes: {
    icon: {
      description: "Обязательный параметр. Используйте для добавления иконки",
    },
    onClick: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    extClassName: {
      description:
        "Необязательный параметр. Для дополнительных стилей (например, для добавления обводки кнопки)",
    },
  },
};

export default meta;

export function ButtonLike({ fill }) {
  const [isFill, setIsFill] = React.useState(false);

  return (
    <ButtonIcon
      onClick={() => (isFill ? setIsFill(false) : setIsFill(true))}
      icon={<Icon icon="IconHeart" size="32" {...(isFill ? { fill: "fill" } : {})} />}
    />
  );
}
