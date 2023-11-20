import { useEffect, useState } from "react";
import { Popup } from "UI-KIT/Popup/Popup";

export const useErrorHandler = () => {
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, [error]);

  function Error() {
    const onClose = () => {
      setIsOpen(false);
    };
    return error ? (
      <Popup title="При выполнении операции возникла ошибка" isOpen={isOpen} onClose={onClose}>
        {error.message}
      </Popup>
    ) : null;
  }
  return [Error, setError];
};
