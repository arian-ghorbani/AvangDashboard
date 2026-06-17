import clsx from "clsx";
import { useMemo, useState } from "react";

const Filter = ({ onChangeFilter, children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [activeItem, setActiveItem] = useState("همه");

  const filterItems = useMemo(() => ["همه", "درحال اتمام", "ناموجودها"], []);

  const handleChangeFilter = (item) => {
    onChangeFilter(item);
    setActiveItem(item);
    setOpenFilter(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="فیلتر"
        className="filter-button bg-basebackground border-basebackground hover:border-black active:border-black"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3z"
            />
          </svg>
        </span>

        <span className="flex items-center justify-center">{children}</span>
      </button>

      {openFilter && (
        <ul className="filter-itemes-wrapper">
          {filterItems.length ? (
            filterItems.map((item) => (
              <li
                key={item}
                className={clsx("filter-item", item === activeItem && "active")}
                onClick={(e) => handleChangeFilter(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="filter-item active">همه</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Filter;
