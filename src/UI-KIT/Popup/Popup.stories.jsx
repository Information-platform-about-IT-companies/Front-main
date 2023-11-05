import { Popup } from "UI-KIT/Popup/Popup";
import "./Popup.scss";
import { MemoryRouter } from "react-router-dom";
import { Button } from "UI-KIT/Button/Button";

const meta = {
  title: "UI-KIT/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальное модальное окно",
      },
    },
  },
  argTypes: {
    title: {
      description: "Обязательный параметр. Используйте для основного текста в поп-апе",
    },
    onClick: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    onClose: {
      description: "Обязательный параметр. Передаем внутрь функцию",
    },
    extClassName: {
      description: "Необязательный параметр. Для дополнительных стилей",
    },
  },
};

export default meta;

export const PopupToFavourite = {
  args: {
    children: (
      <>
        <Button title="Войти" onClick={() => {}} fill={false} extClassName="popup_button" />
        <Button title="Зарегистрироваться" onClick={() => {}} fill={false} size="standard" />
      </>
    ),
    title:
      "Чтобы добавить компанию в избранное, необходимо войти в личный кабинет или зарегистрироваться",
    isOpen: false,
  },
};
