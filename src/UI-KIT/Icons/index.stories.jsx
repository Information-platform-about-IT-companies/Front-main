import Icon from "./index";

const meta = {
  title: "UI-KIT/Icons",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Набор иконок",
      },
    },
  },
  argTypes: {
    icon: {
      description:
        "Обязательный параметр объявления используемой иконки. Может принимать значения - IconAccount | IconArrow | IconFilter | IconHeart | IconOctopusArrow | IconPin | IconRound | IconSearch",
      control: { type: "select" },
      options: [
        "IconAccount",
        "IconArrow",
        "IconСategoryDesign",
        "IconСategoryMarketing",
        "IconСategorySoftware",
        "IconСategoryWeb",
        "IconFilter",
        "IconHeart",
        "IconOctopusArrow",
        "IconPin",
        "IconRound",
        "IconSearch",
      ],
    },
    size: {
      description:
        "Необязательный параметр размера иконки. По умолчанию задан стандартный размер 32px, кроме иконки OctopusArrow у которой стандартный размер 60px. Может принимать значения - 24 | 32 | 60",
      control: { type: "inline-radio" },
      options: ["24", "32", "60"],
    },
    color: {
      description:
        "Обязательный параметр отвечающий за цвет иконки. (У иконки IconHeart нет этого поля, необходимо передавать цвет в стиле CSS, и стоило так делать везде)",
    },
    extClassName: {
      description: "Необязательный параметр. Для дополнительных стилей",
    },
    cross: {
      description:
        "Обязательный параметр для иконки фильтра. Отвечает за добавление крестика к иконке фильтра",
      options: [true, false],
    },
    direction: {
      description:
        "Необязательный параметр для иконки стрелки. Может принимать значения - up, right, down, right.",
      control: { type: "select" },
      options: ["up", "right", "down", "left"],
    },
    fill: {
      description: "Обязательный параметр для иконки сердечка. Отвечает за заливку сердечка цветом",
      options: [true, false],
    },
    colorFill: {
      description: "Обязательный параметр отвечающий за цвет заполненной иконки",
    },
    symbol: {
      description: "Обязательный параметр для иконки буквы в кружочке. Принимает букву",
      control: "text",
    },
  },
};

export default meta;

export const IconAccount = {
  args: {
    icon: "IconAccount",
    size: 32,
    color: "black",
    extClassName: "for-story",
  },
};

export const Icons = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 60px)",
        gridTemplateRows: "repeat(auto-fill, 60px)",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Icon icon="IconAccount" />
      <Icon icon="IconArrow" />
      <Icon icon="IconСategoryDesign" />
      <Icon icon="IconСategoryMarketing" />
      <Icon icon="IconСategorySoftware" />
      <Icon icon="IconСategoryWeb" />
      <Icon icon="IconFilter" />
      <Icon icon="IconHeart" />
      <Icon icon="IconOctopusArrow" />
      <Icon icon="IconPin" />
      <Icon icon="IconRound" symbol="Д" />
      <Icon icon="IconSearch" />
    </div>
  ),
};
