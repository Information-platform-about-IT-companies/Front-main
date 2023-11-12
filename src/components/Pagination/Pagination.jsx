import { Link, useSearchParams } from "react-router-dom";
import ButtonIcon from "UI-KIT/ButtonIcon/ButtonIcon";
import Button from "UI-KIT/Button/Button";
import IconArrow from "UI-KIT/Icons/IconArrow";

import "./Pagination.scss";

export function Pagination({ totalPages, currentPage }) {
  const [, setSearchParams] = useSearchParams();
  // const page = searchParams.get("page") ?? 1;

  const turnToPage = (page) => {
    setSearchParams({ page });
  };

  const firstPage = 1;
  let visiblePageNumbers = [];

  if (currentPage === firstPage) {
    visiblePageNumbers = [...Array(3)].map((e, i) => i + currentPage);
  }

  if (currentPage >= 2) {
    visiblePageNumbers = [...Array(3)].map((e, i) => i + currentPage - 1);
  }

  if (currentPage === totalPages) {
    visiblePageNumbers = [...Array(4)].map((e, i) => i + currentPage - 3);
  }

  return (
    <ul className="pagination">
      {currentPage > firstPage && (
        <li>
          <ButtonIcon
            className="pagination__button"
            onClick={() => turnToPage(currentPage - 1)}
            icon={<IconArrow direction="left" size={24} />}
          />
        </li>
      )}

      {visiblePageNumbers.map((page) => {
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
            icon={<IconArrow direction="right" size={24} />}
          />
        </li>
      )}
    </ul>
  );
}
