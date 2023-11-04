import { Search } from "components/Search/Search";
import "./Main.scss";
import { Link } from "react-router-dom";
import Icon from "UI-KIT/Icons";
import { Category } from "components/Category/Category";
import { Button } from "UI-KIT/Button/Button";
import CompanyCard from "../CompanyCard/CompanyCard";

function Main() {
  const hardcode = {
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

  return (
    <main className="mainPage">
      <section className="intro">
        <CompanyCard
          name="test"
          services={["first", "second", "third", "ff", "dsdsd"]}
          city="blabla"
          about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, soluta."
        />
        <h1 className="intro__title">Найдите подходящие для вас IT-компании в России</h1>
        <Search />
        <div className="intro__popular-search">
          <span>Самые популярные запросы в этом месяце: </span>
          <ul className="intro__search-list">
            {hardcode.requests.map((req, i, arr) => (
              <li>
                <Link className="intro__search-list-item" to="/">
                  {req}
                  {i < arr.length - 1 && ", "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="companies">
        <h2 className="companies__subtitle">Найдите компанию, которая Вам нужна</h2>
        <p className="companies__text">
          Мы разбили все компании на основные <span>4 категории</span> для вашего удобства
        </p>
        <ul className="companies__list">
          {hardcode.companies.map((company) => (
            <li>
              <Category
                categoryTitle={company.title}
                categories={company.comp}
                icon={
                  <Icon
                    color="#4E4CBF"
                    extClassName="category_icon"
                    icon="IconRound"
                    size="32"
                    symbol={company.title[0]}
                  />
                }
              />
            </li>
          ))}
        </ul>
        <Button size="standard" fill title="Посмотреть все компании" />
      </section>
    </main>
  );
}

export default Main;
