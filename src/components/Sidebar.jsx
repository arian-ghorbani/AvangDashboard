import clsx from "clsx";
import { Activity, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import Import from "../features/Import";
import Export from "../features/Export";
import { ProductsContext } from "../context/ProductsProvider";

const Sidebar = ({ isSidebarOpen, onClickHandler }) => {
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const [pages, setPages] = useState([]);

  const exportDetails = {
    itemsBackup: allProducts,
    backupName: "Products",
    fileBackupName: "products-backup.xlsx",
  };

  const pagesIcons = {
    محصولات: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M0 0h640v640H0z" fill="none" />
        <path
          fill="currentColor"
          d="M288 64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V64h32c35.3 0 64 28.7 64 64v128c0 5.5-.7 10.9-2 16H194c-1.3-5.1-2-10.5-2-16V128c0-35.3 28.7-64 64-64zm96 512c-11.2 0-21.8-2.9-31-8c9.5-16.5 15-35.6 15-56V384c0-20.4-5.5-39.5-15-56c9.2-5.1 19.7-8 31-8h32v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h32c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64zM64 384c0-35.3 28.7-64 64-64h32v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h32c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64z"
        />
      </svg>
    ),
  };

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch("/src/data/pages.json");
        const data = await res.json();

        setPages([...data.pages]);
      } catch (error) {
        console.log("Fetching pages has error: ", error);
      }
    };

    fetchPages();
  }, []);

  return (
    <>
      {/* Sidebar */}
      <aside id="sidebar" className={clsx(isSidebarOpen && "open")}>
        {/* Pages links */}
        <section className="sidebar-top-section w-full">
          <Activity mode={pages.length ? "visible" : "hidden"}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to="/"
                className="menu-item bg-basebackground text-primary-text hover:bg-secondary hover:text-primary"
                end
              >
                <span className="item-icon shrink-0 grow-0">
                  {pagesIcons[page] ?? pagesIcons[0]}
                </span>

                <span className="item-text">{page}</span>
              </NavLink>
            ))}
          </Activity>
        </section>

        {/* Import and Export */}
        <section className="sidebar-bottom-section w-full space-y-3">
          <Import handleImporting={setAllProducts} />
          <Export {...exportDetails} />
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
