import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MainRoot = () => {
  return (
    <div className="container h-full flex items-start justify-start">
      <Sidebar />

      <section id="section-content" className="h-full space-y-4 shrink grow">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </section>
    </div>
  );
};

export default MainRoot;
