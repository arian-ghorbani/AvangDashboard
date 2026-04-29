import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MainRoot = () => {
  return (
    <div className="container">
      <section id="section-content" className="space-y-4">
        <Header />

        <Footer />
      </section>
    </div>
  );
};

export default MainRoot;
