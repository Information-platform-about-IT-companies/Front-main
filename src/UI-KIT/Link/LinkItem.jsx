import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LinkItem.scss";
import { useRef, useEffect } from "react";

export function LinkItem({ url, title, textColor, lineColor, weight, extClassName }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.color = textColor;
    ref.current.style.fontWeight = weight;
  }, [textColor]);

  const changeLineColor = () => {
    console.log((ref.current.style.borderColor = lineColor));
  };
  return (
    <Link to={url} ref={ref} onMouseOver={changeLineColor} className={`link ${extClassName}`}>
      {title}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  lineColor: PropTypes.string,
  weight: PropTypes.string,
  extClassName: PropTypes.string,
};

LinkItem.defaultProps = {
  textColor: "#111",
  lineColor: "#111",
  weight: "300",
  extClassName: "",
};
