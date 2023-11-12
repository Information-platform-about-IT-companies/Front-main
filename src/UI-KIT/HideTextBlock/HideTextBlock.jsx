import { useState } from "react";
import { cutText } from "services/constants";
import "./HideTextBlock.scss";

export default function HideTextBlock({ size, text, extClass, height }) {
  const [state, setState] = useState("hide");

  const newText = cutText(text, size);
  const onBtnClick = () => {
    setState((prev) => (prev === "hide" ? "show" : "hide"));
  };
  return (
    <div>
      <p className="text" style={state === "hide" ? { height } : { height: "100%" }}>
        {state === "hide" ? newText : text}
      </p>
      <button className="roll-up" onClick={onBtnClick}>
        {state === "hide" ? "Развернуть" : "Свернуть"}
      </button>
    </div>
  );
}
