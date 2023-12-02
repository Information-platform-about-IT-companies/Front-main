import ButtonHeart from "./ButtonHeart";
import "./ButtonHeart.scss";

export default { component: ButtonHeart };
export const ButtonLike = {
  title: "Components/ButtonHeart",
  component: ButtonHeart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Кнопка с сердечком, является частным случаем ButtonIcon",
      },
    },
  },
  argTypes: {
    fill: {
      description: "При добавлении параметра сердечко будет залито",
    },
    click: {
      description: "Параметр - функция, что будет кроме изменения заливки сердечка",
    },
  },
};
