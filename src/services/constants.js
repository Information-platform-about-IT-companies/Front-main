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
        { title: "Бла-бла-бла-1", link: "/bla-1" },
        { title: "Бла-бла-бла-1", link: "/bla-1" },
        { title: "Бла-бла-бла-2", link: "/bla-2" },
        { title: "Бла-бла-бла-3", link: "/bla-3" },
        { title: "Бла-бла-бла-4", link: "/bla-4" },
        { title: "Бла-бла-бла-5", link: "/bla-5" },
      ],
    },
    {
      title: "Разработка ПО",
      comp: [
        { title: "Бу-бу-бу-1", link: "/boo-1" },
        { title: "Бу-бу-бу-2", link: "/boo-2" },
        { title: "Бу-бу-бу-3", link: "/boo-3" },
        { title: "Бу-бу-бу-4", link: "/boo-4" },
        { title: "Бу-бу-бу-5", link: "/boo-5" },
        { title: "Бу-бу-бу-6", link: "/boo-6" },
      ],
    },
    {
      title: "Дизайн",
      comp: [
        { title: "Бу-бу-бу-1", link: "/boo-1" },
        { title: "Бу-бу-бу-2", link: "/boo-2" },
        { title: "Бу-бу-бу-3", link: "/boo-3" },
        { title: "Бу-бу-бу-4", link: "/boo-4" },
        { title: "Бу-бу-бу-5", link: "/boo-5" },
        { title: "Бу-бу-бу-6", link: "/boo-6" },
      ],
    },
    {
      title: "Маркетинг",
      comp: [
        { title: "Бла-бла-бла-1", link: "/bla-1" },
        { title: "Бла-бла-бла-1", link: "/bla-1" },
        { title: "Бла-бла-бла-2", link: "/bla-2" },
        { title: "Бла-бла-бла-3", link: "/bla-3" },
        { title: "Бла-бла-бла-4", link: "/bla-4" },
        { title: "Бла-бла-бла-5", link: "/bla-5" },
      ],
    },
  ],
};
