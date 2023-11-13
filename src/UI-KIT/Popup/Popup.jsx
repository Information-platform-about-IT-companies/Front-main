import Icon from "UI-KIT/Icons";
import "./Popup.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const portal = document.getElementById("portal");

export function Popup({ title, isOpen, onClose, extClassName, children }) {
  return ReactDOM.createPortal(
    <div className={`popup ${extClassName} ${isOpen ? "popup_opened" : ""} `}>
      <div className="popup_container">
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
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  extClassName: PropTypes.string,
  children: PropTypes.node,
};

Popup.defaultProps = {
  extClassName: "",
  isOpen: false,
  onClose: null,
};
