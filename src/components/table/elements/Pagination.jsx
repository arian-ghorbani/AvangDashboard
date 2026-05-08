import { Activity, memo } from "react";
import clsx from "clsx";

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const paginationButtons = [];

  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < numberOfPages) onPageChange(currentPage + 1);
  };

  for (let i = 1; i <= numberOfPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        type="button"
        aria-label="دکمه صفحه بندی"
        className={clsx("pagination-btn", { active: i === currentPage })}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>,
    );
  }

  return (
    <Activity mode={numberOfPages ? "visible" : "hidden"}>
      <div className="pagination-wrapper flex items-center justify-center gap-x-2 lg:gap-x-3">
        <button
          type="button"
          aria-label="دکمه قبلی"
          className="pagination-prev-btn"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {paginationButtons}

        <button
          type="button"
          aria-label="دکمه بعدی"
          className="pagination-next-btn"
          disabled={currentPage === numberOfPages}
          onClick={nextPage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Activity>
  );
}

export default memo(Pagination);
