import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LinkItem.scss";
import { useRef, useEffect } from "react";

export function LinkItem({ url, title, textColor, lineColor }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.color = textColor;
  }, [textColor]);

  const changeLineColor = () => {
    console.log((ref.current.style.borderColor = lineColor));
  };
  return (
    <Link className="link" to={url} ref={ref} onMouseOver={changeLineColor}>
      {title}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  lineColor: PropTypes.string,
};

LinkItem.defaultProps = {
  textColor: "#111",
  lineColor: "#111",
};
