import { Input } from "./Input";
import "./Input.scss";

/* lable, +
extClassNameLable,+
type, +
name, +
id, +
onChange, +
extClassNameInput, +
required, +
placeholder, +
error, */

const meta = {
  title: "UI-KIT/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальное поле ввода",
      },
    },
  },
  argTypes: {
    lable: {
      description: "Необязательный параметр с указанием названия поля ввода.",
    },
    extClassNameLable: {
      description:
        "Необязательный параметр для добавления дополнительных стилей заголовку поля ввода",
    },
    type: {
      description:
        "Необязательный параметр с указанием типа поля ввода. Может принимать в себя значения text | password | email",
      options: ["text", "password", "email"],
    },
    name: {
      description: "Обязательный параметр c указанием названия поля ввода",
    },
    id: {
      description: "Обязательный параметр. Идентификатор для связи с названием поля",
    },
    onChange: {
      description: "Обязательный параметр. Используется для передачи внутрь функции",
    },
    value: {
      description: "Не обязательное поле, отвечает за передачу значения",
    },
    extClassNameInput: {
      description:
        "Необязательный параметр. Отвечает за дополнительный стили поля / форматирования текста поля",
    },
    required: {
      description: "Необязательный параметр. Указывает на обязательность заполнения поля",
      options: [true, false],
    },
    placeholder: {
      description: "Необязательный параметр. Для передачи дефорлтного значения поля",
    },
    error: {
      description: "Необязательный параметр. Для передачи ошибки (например, валидации)",
    },
  },
};

export default meta;

export const InputWithFill = {
  args: {
    value: "Василий Пупкин",
  },
};

export const ActiveInput = {};

export const InputWithHelp = {
  args: {
    placeholder: "Василий Пупкин",
  },
};

export const InputWithError = {
  args: {
    value: "@mail.ru",
    error: "Ошибка",
  },
};
