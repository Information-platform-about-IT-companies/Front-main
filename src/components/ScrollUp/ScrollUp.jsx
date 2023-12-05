import { useState, useEffect } from "react";
// UI-KIT
import Icon from "UI-KIT/Icons";
// styles
import "./ScrollUp.scss";

export default function ScrollUp() {
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
    <button className="scroll" data-testid="skrollUp" onClick={onClick}>
      {showScroll && <Icon extClassName="scroll__icon" icon="IconOctopusArrow" size="60" />}
    </button>
  );
}
