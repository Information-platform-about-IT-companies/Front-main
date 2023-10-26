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
        "Обязательный параметр объявления используемой иконки. Может принимать значения - IconAccount | IconArrow | IconFilter | IconOctopusArrow | IconPin | IconRound | IconSearch",
      control: { type: "select" },
      options: [
        "IconAccount",
        "IconArrow",
        "IconFilter",
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
