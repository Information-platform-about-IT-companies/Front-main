import CompanyCard from "components/CompanyCard/CompanyCard";
import { favoriteAPI } from "api/favoriteAPI";
import { Pagination } from "components/Pagination/Pagination";
import { useErrorHandler } from "hooks/useErrorHandler";

export function CompanyList({ type, className, companies = [], onCompanyUpdate, totalPages }) {
  const [Error, setError] = useErrorHandler();

  const onIconHeartClick = async (companyId) => {
    const company = companies.find((item) => item.id === companyId);
    if (company) {
      try {
        if (company.isFavorited) {
          await favoriteAPI.removeFavorited(companyId);
        } else {
          await favoriteAPI.addFavorited(companyId);
        }
        const updatedCompany = { ...company, isFavorited: !company.isFavorited };
        onCompanyUpdate(updatedCompany);
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <>
      <ul className={className}>
        {companies.map(({ id, isFavorited, city, ...rest }) => (
          <li key={id} className={type === "filterCard" && "filterPage__listitem"}>
            <CompanyCard
              id={id}
              type={type}
              inFavorite={isFavorited}
              onIconHeartClick={onIconHeartClick}
              city={city.name}
              {...rest}
            />
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
      <Error />
    </>
  );
}
