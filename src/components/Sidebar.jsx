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
    داشبورد: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11 4.68v3.88a2.45 2.45 0 0 1-1.509 2.258A2.4 2.4 0 0 1 8.56 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.4 2.4 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.88a2.45 2.45 0 0 1-2.256-1.502A2.4 2.4 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m10.75 1.93A4.37 4.37 0 1 1 17.37 13a4.4 4.4 0 0 1 4.049 2.707c.22.53.332 1.099.331 1.673"
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
                className="menu-item bg-basebackground text-primary-text hover:bg-primary overflow-hidden hover:text-white"
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
