import { useEffect, useState } from "react";
import { Popup } from "UI-KIT/Popup/Popup";

export const usePopUp = () => {
  const [{ title, content }, setPopUp] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, [content]);

  function PopUp() {
    const onClose = () => {
      setIsOpen(false);
    };
    return content ? (
      <Popup title={title} isOpen={isOpen} onClose={onClose}>
        {content}
      </Popup>
    ) : null;
  }
  return [PopUp, setPopUp];
};
