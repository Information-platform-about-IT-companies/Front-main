import HideTextBlock from "./HideTextBlock";

export default {
  title: "UI-KIT/HideTextBlock",
  component: HideTextBlock,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Текстовый блок, который на вход принимает высоту и максимальное количество символов. Если в указанную высоту блока не поместится текст, то он обрезается и добавляется кнопка",
      },
    },
  },
  argTypes: {
    size: {
      description:
        "Максимальное количество символов, которое должно отображаться. Если больше, то текст обрезается и в конце добавляется '...'",
    },
    text: {
      description: "Текст для блока",
    },
    height: {
      description: "Фиксированная высота блока",
    },
    extClass: {
      description: "Доволнительный класс, который можно пробросить извне",
    },
  },
};

export const DefaultTextBlock = {
  args: {
    text: "Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). ",
    size: 300,
    height: "90px",
  },
};

export const TextBlock = {
  args: {
    text: "Межпланетный Экспресс (англ. Planet Express) — небольшая курьерская фирма по межпланетной доставке различных грузов. Место работы главных героев, а также дом для некоторых из них. Сотрудники: Профессор Фарнсворт (глава, владелец), Туранга Лилла (пилот), Фрай (курьер), Бендер (курьер), Скраффи (уборщик), Эми Вонг (студент профессора), Зойдберг (врач), Гермес Конрад (бюрократ). ",
    size: 500,
    height: "300px",
  },
};
