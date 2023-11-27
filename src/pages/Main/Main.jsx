import { useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { infoAPI } from "api/infoApi";
import { useMainContext } from "context/MainContext";

// functions
import { hardcode, selectedCategoriesMap, ROUTES } from "services/constants";
import { SIGN_UP_CONFIRM_REGULAR } from "services/regulars";
import { authAPI } from "api/authApi";
import { useErrorHandler } from "hooks/useErrorHandler";
// Components
import { Search } from "components/Search/Search";
import { Category } from "components/Category/Category";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// styles
import "./Main.scss";

function Main() {
  const { data, setData } = useMainContext();
  const [Error, setError] = useErrorHandler();
  const navigate = useNavigate();
  const location = useLocation();
  const isCategoriesFetched = data.categories?.length;

  const selectedCategories = useMemo(
    () =>
      selectedCategoriesMap.map(({ id, icon }) => {
        const found = data.categories.find((item) => item.id === id);
        return { ...found, icon };
      }),
    [data],
  );

  const confirmSignup = async (cb) => {
    const [, , uid, token] = location.hash.split("/");
    try {
      await authAPI.confirmSignup({ uid, token });
      cb();
    } catch (error) {
      setError(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categories = await infoAPI.fetchServiceCategories();
      setData({ ...data, categories });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /** Обработка данных регистрации, отправленных на почту */
    if (SIGN_UP_CONFIRM_REGULAR.test(location.hash)) {
      confirmSignup(() => navigate(ROUTES.SIGN_IN));
    }
    if (!isCategoriesFetched) {
      fetchCategories();
    }
  });

  return (
    <main className="mainPage">
      <section className="intro">
        <h1 className="intro__title">Найдите подходящие для вас IT-компании в России</h1>
        <Search />
        <div className="intro__popular-search">
          <span>Самые популярные запросы в этом месяце: </span>
          <ul className="intro__search-list">
            {hardcode.requests.map((req, i, arr) => (
              <li key={req.id}>
                <Link className="intro__search-list-item" to={req.link}>
                  {req.name}
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
          {isCategoriesFetched &&
            selectedCategories.map(({ id, ...rest }) => (
              <li key={id}>
                <Category {...rest} />
              </li>
            ))}
        </ul>
        <Button
          linkType="link"
          url="/filter?page=1"
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
