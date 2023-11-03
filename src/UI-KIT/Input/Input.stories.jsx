import Input from "UI-KIT/Input/Input";
import "./Input.scss";
import Icon from "UI-KIT/Icons";

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
    icon: {
      description: "Необязательный параметр для добавления icon в поле input",
      options: ["24px"],
    },
    label: {
      description: "Необязательный параметр с указанием названия поля ввода.",
    },
    extClassNameLabel: {
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
    onlyInput: true,
  },
};

export const ActiveInput = {
  args: {
    onlyInput: true,
  },
};

export const InputWithHelp = {
  args: {
    placeholder: "Василий Пупкин",
    onlyInput: true,
  },
};

export const InputWithIcon = {
  args: {
    value: "Вася Пупкин",
    icon: <Icon icon="IconAccount" size="24" color="#4E4CBF" />,
    onlyInput: true,
  },
};

export const InputWithErrorAndLabel = {
  args: {
    label: "E-mail",
    value: "@mail.ru",
    error: "Ошибка",
  },
};

export const InputOnly = {
  args: {
    onlyInput: true,
  },
};
