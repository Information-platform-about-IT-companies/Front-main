import { Link } from "react-router-dom";
import IconArrow from "UI-KIT/Icons/IconArrow";

import "./Pagination.scss";

export function Pagination({ totalPages, currentPage }) {
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
          <Link className="pagination__button" to={`/companies/${currentPage - 1}`}>
            <IconArrow direction="left" size={24} />
          </Link>
        </li>
      )}

      {visiblePageNumbers.map((page) => {
        const isActive = currentPage === page;

        return (
          <li key={page}>
            {isActive ? (
              <span className="pagination__item pagination__item_active">{page}</span>
            ) : (
              <Link to={`/companies/${page}`} className="pagination__item">
                {page}
              </Link>
            )}
          </li>
        );
      })}

      {currentPage < totalPages && (
        <li>
          <Link className="pagination__button" to={`/companies/${currentPage + 1}`}>
            <IconArrow direction="right" size={24} />
          </Link>
        </li>
      )}
    </ul>
  );
}
