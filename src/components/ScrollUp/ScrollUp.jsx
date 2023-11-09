import { useState, useEffect } from "react";
// Юай
import Icon from "UI-KIT/Icons";
// Стили
import "./ScrollUp.scss";

export default function () {
  const [showScroll, setShowScroll] = useState(false);
  const scrollState = () => {
    if (window.scrollY > 100) {
      setShowScroll(true);
    } else setShowScroll(false);
  };
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const onClick = () => {
    goTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollState);
    return () => {
      window.removeEventListener("scroll", scrollState);
    };
  }, []);

  return (
    <button className="scroll" onClick={onClick}>
      {showScroll && <Icon extClassName="scroll__icon" icon="IconOctopusArrow" size={60} />}
    </button>
  );
}