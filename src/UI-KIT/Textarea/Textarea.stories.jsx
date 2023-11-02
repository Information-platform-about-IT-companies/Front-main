import Textarea from "UI-KIT/Textarea/Textarea";
import "./Textarea.scss";

const meta = {
  title: "UI-KIT/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Универсальная область для текста",
      },
    },
  },
  argTypes: {
    label: {
      description: "Необязательный параметр с указанием названия поля ввода.",
    },
    extClassNameLabel: {
      description:
        "Необязательный параметр для добавления дополнительных стилей заголовку поля ввода",
    },
    name: {
      description: "Обязательный параметр c указанием названия поля",
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
    extClassNameTextarea: {
      description:
        "Необязательный параметр. Отвечает за дополнительный стили поля / форматирования текста поля",
    },
    required: {
      description: "Необязательный параметр. Указывает на обязательность заполнения поля",
      options: [true, false],
    },
    placeholder: {
      description: "Необязательный параметр. Для передачи дефолтного значения поля",
    },
    rows: {
      description: "Обязательный параметр. Для передачи высоты поля",
    },
    error: {
      description: "Необязательный параметр. Для передачи ошибки (например, валидации)",
    },
  },
};

export default meta;

export const TexareaFoeSupportMessage = {
  args: {
    label: "Сообщение",
    rows: "8",
    name: "supportMessage",
  },
};
