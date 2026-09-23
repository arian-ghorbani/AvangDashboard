import clsx from "clsx";
import { Activity, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import Import from "../features/Import";
import Export from "../features/Export";
import { ProductsContext } from "../context/ProductsProvider";
import { ServicesContext } from "../context/ServicesProvider";
import { UsersContext } from "../context/UsersProvider";

const Sidebar = ({ isSidebarOpen }) => {
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { allServices, setAllServices } = useContext(ServicesContext);
  const { allUsers, setAllUsers } = useContext(UsersContext);
  const [pages, setPages] = useState([]);
  const { pathname } = useLocation();

  const pageDataMap = {
    "/products": {
      itemsBackup: allProducts,
      setItems: setAllProducts,
      backupName: "Products",
      fileBackupName: "products-backup.xlsx",
      requiredKeys: ["name", "buy", "sell", "qty"],
    },
    "/services": {
      itemsBackup: allServices,
      setItems: setAllServices,
      backupName: "Services",
      fileBackupName: "services-backup.xlsx",
      requiredKeys: ["title", "min_price"],
    },
    "/users": {
      itemsBackup: allUsers,
      setItems: setAllUsers,
      backupName: "Users",
      fileBackupName: "users-backup.xlsx",
      requiredKeys: [],
    },
  };

  const currentPage = pageDataMap[pathname] ?? pageDataMap["/products"];

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
    خدمات: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <g fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025a.75.75 0 0 1 .313 1.248l-3.32 3.319a2.25 2.25 0 0 0 1.941 1.939l3.318-3.319a.75.75 0 0 1 1.248.313a5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5 5 0 0 1 12 6.75M4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75z"
            clipRule="evenodd"
          />
          <path d="m10.076 8.64l-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062z" />
          <path
            fillRule="evenodd"
            d="m12.556 17.329l4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.8 6.8 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.6.6 0 0 0-.167.063zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
    مشتریان: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M0 0h640v640H0z" fill="none" />
        <path
          fill="currentColor"
          d="M320 80c57.4 0 104 46.6 104 104s-46.6 104-104 104s-104-46.6-104-104S262.6 80 320 80M96 152c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M0 480c0-70.7 57.3-128 128-128c12.8 0 25.2 1.9 36.9 5.4C132 394.2 112 442.8 112 496v16c0 11.4 2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32v-16c0-53.2-20-101.8-52.9-138.6c11.7-3.5 24.1-5.4 36.9-5.4c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32zM472 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72M160 496c0-88.4 71.6-160 160-160s160 71.6 160 160v16c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"
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
      <aside id="sidebar" className={clsx(isSidebarOpen && "open")}>
        <section className="sidebar-top-section w-full space-y-2">
          <Activity mode={pages.length ? "visible" : "hidden"}>
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={`/${page.link}`}
                className={({ isActive }) =>
                  isActive
                    ? "menu-item bg-secondary text-primary"
                    : "menu-item bg-basebackground text-primary-text hover:bg-secondary hover:text-primary"
                }
                end
              >
                <span className="item-icon shrink-0 grow-0">
                  {pagesIcons[page.title] ?? pagesIcons[0]}
                </span>
                <span className="item-text">{page.title}</span>
              </NavLink>
            ))}
          </Activity>
        </section>

        <section className="sidebar-bottom-section w-full space-y-3">
          <Import
            handleImporting={currentPage.setItems}
            requiredKeys={currentPage.requiredKeys}
          />
          <Export
            itemsBackup={currentPage.itemsBackup}
            backupName={currentPage.backupName}
            fileBackupName={currentPage.fileBackupName}
          />
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
