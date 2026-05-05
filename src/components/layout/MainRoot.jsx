import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useState } from "react";

const MainRoot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handletToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container h-full md:flex md:items-start md:justify-start md:gap-x-4">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onClickHandler={handletToggleSidebar}
      />

      <section id="section-content" className="h-full space-y-4 shrink grow">
        <Header
          isSidebarOpen={isSidebarOpen}
          onClickHandler={handletToggleSidebar}
        />

        <main>
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default MainRoot;
