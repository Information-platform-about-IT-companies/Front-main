import { useState } from "react";
import PropTypes from "prop-types";
// функции
import { cutText } from "services/constants";
// стили
import "./HideTextBlock.scss";

export default function HideTextBlock({ size, text, extClass, height }) {
  const [state, setState] = useState("hide");
  const newText = cutText(text, size);
  const isTextLong = newText < text;
  const onBtnClick = () => {
    setState((prev) => (prev === "hide" ? "show" : "hide"));
  };
  return (
    <div>
      <p className={`text ${extClass}`} style={state === "hide" ? { height } : { height: "100%" }}>
        {state === "hide" ? newText : text}
      </p>
      {isTextLong && (
        <button className="roll-up" onClick={onBtnClick}>
          {state === "hide" ? "Развернуть" : "Свернуть"}
        </button>
      )}
    </div>
  );
}

HideTextBlock.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  extClass: PropTypes.string,
};

HideTextBlock.defaultProps = {
  extClass: "",
};
