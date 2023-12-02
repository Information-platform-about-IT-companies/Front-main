import { usePopUp } from "./usePopUp";

export const useErrorHandler = (defaultTitle = "При выполнении операции возникла ошибка") => {
  const [PopUp, setPopUp] = usePopUp();

  const setError = (error, title) => {
    setPopUp({
      title: title ?? defaultTitle,
      content: error instanceof Error ? error.message : error,
    });
  };

  return [PopUp, setError];
};
