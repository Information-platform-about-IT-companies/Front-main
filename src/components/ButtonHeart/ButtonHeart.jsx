import React from "react";

import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import Icon from "UI-KIT/Icons";

import "./ButtonHeart.scss";

export default function ButtonHeart({ click, fill }) {
  return (
    <ButtonIcon
      extClassName={fill ? "buttonHeart_active" : "buttonHeart"}
      onClick={click}
      icon={<Icon icon="IconHeart" size="32" {...(fill ? { fill: "fill" } : {})} />}
    />
  );
}
