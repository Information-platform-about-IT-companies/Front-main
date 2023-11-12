import React from "react";

import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import Icon from "UI-KIT/Icons";

import "./ButtonHeart.scss";

export default function ({ click, fill }) {
  const [isFill, setIsFill] = React.useState(fill);

  const handlerClick = () => {
    setIsFill(!isFill);
    click();
  };

  return (
    <ButtonIcon
      extClassName={isFill ? "buttonHeart_active" : "buttonHeart"}
      onClick={handlerClick}
      icon={<Icon icon="IconHeart" size="32" {...(isFill ? { fill: "fill" } : {})} />}
    />
  );
}
