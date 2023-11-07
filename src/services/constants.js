export function declinationsNumericalValues(value) {
  const text = ["услуга", "услуги", "услуг"];
  const v = Math.abs(value) % 100;
  const v1 = v % 10;
  if (v > 10 && v < 20) {
    return text[2];
  }
  if (v1 > 1 && v1 < 5) {
    return text[1];
  }
  if (v1 === 1) {
    return text[0];
  }
  return text[2];
}

export function cutText(text, limit) {
  if (text.length < limit) return text;
  return `${text.slice(0, limit)}...`;
}
export const hardcode = {
  requests: ["Веб-дизайн", "Разработка для Android", "Москва"],
  companies: [
    {
      title: "Веб-разработка",
      comp: [
        { title: "Веб-разработка", link: "/bla-1" },
        { title: "Разработка под e-commerce", link: "/bla-1" },
        { title: "PHP", link: "/bla-2" },
        { title: "Ruby", link: "/bla-3" },
        { title: "JavaScript", link: "/bla-4" },
        { title: "Angular", link: "/bla-5" },
        { title: "React", link: "/bla-6" },
        { title: "Flutter", link: "/bla-7" },
        { title: "Django", link: "/bla-8" },
        { title: "WordPress", link: "/bla-9" },
        { title: "NET", link: "/bla-10" },
        { title: "NodeJS", link: "/bla-11" },
      ],
    },
    {
      title: "Разработка ПО",
      comp: [
        { title: "Разработка для IOS", link: "/boo-1" },
        { title: "Разработка для Android", link: "/boo-2" },
        { title: "Кроссплатформа", link: "/boo-3" },
        { title: "IoT разработка", link: "/boo-4" },
        { title: "С# разработка", link: "/boo-5" },
        { title: "Swift", link: "/boo-6" },
        { title: "SQL", link: "/boo-7" },
        { title: "Искусственный интеллект", link: "/boo-8" },
        { title: "AR/VR", link: "/boo-9" },
        { title: "Блокчейн", link: "/boo-10" },
        { title: "Тестирование ПО", link: "/boo-11" },
      ],
    },
    {
      title: "Дизайн",
      comp: [
        { title: "Веб-дизайн", link: "/boo-1" },
        { title: "UX/UI ", link: "/boo-2" },
        { title: "Графический дизайн", link: "/boo-3" },
        { title: "Дизайн логотипа", link: "/boo-4" },
        { title: "Продуктовый дизайн", link: "/boo-5" },
        { title: "Дизайн печати", link: "/boo-6" },
        { title: "Архитектурный дизайн", link: "/boo-7" },
      ],
    },
    {
      title: "Маркетинг",
      comp: [
        { title: "Реклама", link: "/bla-1" },
        { title: "SMM", link: "/bla-2" },
        { title: "Digital маркетинг", link: "/bla-3" },
        { title: "Content маркетинг", link: "/bla-4" },
        { title: "Брендинг", link: "/bla-5" },
        { title: "Нейминг", link: "/bla-6" },
        { title: "Видео", link: "/bla-7" },
        { title: "PR", link: "/bla-8" },
        { title: "Digital стратегия", link: "/bla-9" },
        { title: "Прямой маркетинг", link: "/bla-10" },
        { title: "E-mail маркетинг", link: "/bla-11" },
        { title: "Исследования рынка", link: "/bla-12" },
      ],
    },
  ],
};
