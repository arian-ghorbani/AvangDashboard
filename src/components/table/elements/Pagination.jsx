import { Activity, memo, useEffect, useState } from "react";
import clsx from "clsx";

function Pagination({ items, setItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationButtons = [];
  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const mainItems = items.slice(startIndex, endIndex);
    setItems(mainItems);
  }, [currentPage]);

  const handlerChangePagination = (e) => {
    setCurrentPage(+e.target.innerHTML);
  };

  const PrevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    currentPage < numberOfPages && setCurrentPage(currentPage + 1);
  };

  for (let i = 1; i <= numberOfPages; i++) {
    paginationButtons.push(
      <buuton
        type="button"
        aria-label="دکمه صفحه بندی"
        className={clsx("pagination-btn", { active: i === currentPage })}
        onClick={(e) => handlerChangePagination(e)}
      >
        {i}
      </buuton>,
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
          onClick={PrevPage}
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

        {...paginationButtons}

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
