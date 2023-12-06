// Components
import CompanyCard from "components/CompanyCard/CompanyCard";
import CompanyCardFavouriteNone from "components/CompanyCardFavouriteNone/CompanyCardFavouriteNone";
import { Pagination } from "components/Pagination/Pagination";
// UI-KIT
import { SignInOrSignUp } from "UI-KIT/SignInOrSignUp/SignInOrSignUp";
// functions
import { useToggleFavorited } from "hooks/useFavorited";
import { useErrorHandler } from "hooks/useErrorHandler";

export function CompanyList({
  type,
  className,
  companies = [],
  onCompanyUpdate: updateCompany,
  totalPages,
}) {
  const [Error, setError] = useErrorHandler();
  const toggleFavorited = useToggleFavorited();

  const onIconHeartClick = async (id) => {
    const company = companies.find((item) => item.id === id);
    updateCompany({ ...company, isFavorited: !company.isFavorited });
    try {
      await toggleFavorited(company);
    } catch (error) {
      setError(
        <SignInOrSignUp />,
        "Чтобы добавить компанию в избранное, необходимо войти в личный кабинет или зарегистрироваться",
      );
      updateCompany(company);
    }
  };

  return (
    <>
      <ul className={className}>
        {companies.length ? (
          companies.map(({ id, isFavorited, city, ...rest }) => (
            <li key={id} className={type === "filterCard" ? "filterPage__listitem" : ""}>
              <CompanyCard
                id={id}
                type={type}
                inFavorite={isFavorited}
                onIconHeartClick={onIconHeartClick}
                city={city}
                {...rest}
              />
            </li>
          ))
        ) : (
          <CompanyCardFavouriteNone />
        )}
      </ul>
      <Pagination totalPages={totalPages} />
      <Error />
    </>
  );
}
