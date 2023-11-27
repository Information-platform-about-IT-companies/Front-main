import { useSearchParams } from "react-router-dom";
// UI-KIT
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import IconArrow from "UI-KIT/Icons/IconArrow";
import PropTypes from "prop-types";

import "./Pagination.scss";

export function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);
  const turnToPage = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const firstPage = 1;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const visiblePages = pages.slice(
    Math.max(0, currentPage - 2),
    Math.min(currentPage + 1, totalPages),
  );

  return (
    <ul className="pagination">
      {currentPage > firstPage && (
        <li>
          <ButtonIcon
            className="pagination__button"
            onClick={() => turnToPage(currentPage - 1)}
            icon={<IconArrow direction="left" size="24" />}
          />
        </li>
      )}

      {visiblePages.map((page) => {
        const isActive = currentPage === page;

        return (
          <li key={page}>
            {isActive ? (
              <span className="pagination__item pagination__item_active">{page}</span>
            ) : (
              <button className="pagination__item" onClick={() => turnToPage(page)}>
                {page}
              </button>
            )}
          </li>
        );
      })}
      {currentPage < totalPages && (
        <li>
          <ButtonIcon
            className="pagination__button"
            onClick={() => turnToPage(currentPage + 1)}
            icon={<IconArrow direction="right" size="24" />}
          />
        </li>
      )}
    </ul>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
};
