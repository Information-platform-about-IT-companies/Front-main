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
      description: "Обязательный параметр отвечающий за цвет иконки",
    },
    extClassName: {
      description: "Необязательный параметр. Для дополнительных стилей",
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

export const IconArrow = {
  args: {
    icon: "IconArrow",
    size: 32,
    color: "black",
    extClassName: "for-story",
    direction: "up",
  },
};

export const IconFilter = {
  args: {
    icon: "IconFilter",
    size: 32,
    color: "black",
    extClassName: "for-story",
    direction: "up",
  },
};

export const IconHeart = {
  args: {
    icon: "IconHeart",
    size: 32,
    color: "black",
    extClassName: "for-story",
    fill: false,
  },
};

export const IconOctopusArrow = {
  args: {
    icon: "IconOctopusArrow",
    size: 60,
    color: "black",
    extClassName: "for-story",
  },
};

export const IconPin = {
  args: {
    icon: "IconPin",
    size: 32,
    color: "black",
    extClassName: "for-story",
  },
};

export const IconRound = {
  args: {
    icon: "IconRound",
    size: 32,
    color: "black",
    extClassName: "for-story",
    symbol: "W",
  },
};

export const IconSearch = {
  args: {
    icon: "IconSearch",
    size: 32,
    color: "black",
    extClassName: "for-story",
  },
};

export const IconLike = {
  args: {
    icon: "IconLike",
    state: false,
  },
};

export const IconLikeActive = {
  args: {
    icon: "IconLike",
    state: true,
  },
};
