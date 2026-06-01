import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsProvider";

const Searchbox = ({ style }) => {
  const { setSearchQuery } = useContext(ProductsContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <form
      action="#"
      className={clsx("relative bg-basebackground rounded-full", style)}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        value={inputValue}
        type="text"
        name="searchbox"
        id="searchbox"
        className="size-full pr-10 pl-4 font-kalameh-medium"
        placeholder="جستجو کنید ..."
        onChange={(e) => setInputValue(e.target.value)}
      />

      <span className="size-6 absolute top-1/2 right-2.5 -translate-y-1/2 lg:size-6.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-full"
        >
          <path
            fill="currentColor"
            className="fill-secondary-icon"
            d="M15.793 15.793a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414"
            opacity="0.5"
          />
          <path
            fill="currentColor"
            className="fill-primary-icon"
            d="M2.75 10.5a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0m7.75-6.25a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"
          />
        </svg>
      </span>
    </form>
  );
};

export default Searchbox;
