import "./Popup.scss";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const portal = document.getElementById("portal");

export function Popup({ title, isOpen, onClose, extClassName, children }) {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return ReactDOM.createPortal(
    <div className={`popup ${extClassName} ${isOpen ? "popup_opened" : ""} `}>
      <div ref={popupRef} className="popup_container">
        <div className="popup_header">
          <div className="popup_logo" />
          <button
            className="popup_close-btn"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          />
        </div>

        <p className="popup_title">{title}</p>
        <div className="popup_details">{children}</div>
      </div>
    </div>,
    portal,
  );
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  extClassName: PropTypes.string,
  children: PropTypes.node,
};

Popup.defaultProps = {
  extClassName: "",
  isOpen: false,
  onClose: null,
};
