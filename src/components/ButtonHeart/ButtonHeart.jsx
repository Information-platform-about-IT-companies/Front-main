import PropTypes from "prop-types";
import { useState } from "react";
// UI
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import Icon from "UI-KIT/Icons";
// styles
import "./ButtonHeart.scss";

export default function ButtonHeart({ click, fill }) {
  const [isFill, setIsFill] = useState(fill);

  const handlerClick = () => {
    setIsFill(!isFill);
    click();
  };

  return (
    <ButtonIcon
      extClassName={fill ? "buttonHeart_active" : "buttonHeart"}
      onClick={handlerClick}
      icon={<Icon icon="IconHeart" size="32" {...(fill ? { fill: "fill" } : {})} />}
    />
  );
}

ButtonHeart.propTypes = {
  click: PropTypes.func,
  fill: PropTypes.oneOf[("fill", {})],
};

ButtonHeart.defaultProps = {
  // eslint-disable-next-line no-console
  click: () => console.log("функция не передана"),
  fill: {},
};
