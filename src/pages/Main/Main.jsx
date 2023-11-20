import { Search } from "components/Search/Search";
import "./Main.scss";
import { Link } from "react-router-dom";
import { Category } from "components/Category/Category";
import { Button } from "UI-KIT/Button/Button";
import { hardcode } from "services/constants";
import { useMainContext } from "context/MainContext";
import { useEffect } from "react";
import { userAPI } from "api/userApi";
import { useErrorHandler } from "hooks/useErrorHandler";

function Main() {
  const [Error, setError] = useErrorHandler();
  const { data, setData } = useMainContext();
  const { currentUser } = data || {};

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await userAPI.getCurrentUser();
        setData({ ...data, currentUser: user });
      } catch (error) {
        setError(error);
      }
    };

    if (!currentUser) {
      fetchCurrentUser();
    }
  }, [currentUser]);

  return (
    <main className="mainPage">
      <section className="intro">
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
              <Category categoryTitle={company.title} categories={company.comp} id={company.id} />
            </li>
          ))}
        </ul>
        <Button
          linkType="link"
          url="/filter"
          size="standard"
          fill
          title="Посмотреть все компании"
        />
      </section>
      <Error />
    </main>
  );
}

export default Main;
