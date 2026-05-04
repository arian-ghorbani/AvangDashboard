import { Activity, useEffect, useState } from "react";
import Filter from "../../features/Filter";
import { TABLE_HEAD_TITLES } from "/src/data/constants";
import LastProducts from "../../features/LastProduct";
import Pagination from "../../components/Table/elements/Pagination";
import AddNewProduct from "../../components/AddNewProduct";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/src/data/products.json");
        const data = await res.json();

        setProducts([...data]);
      } catch (error) {
        console.log("Fetching products has error: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="size-full p-1.5 space-y-1.5 bg-card shadow-sm rounded-3xl md:p-2 md:space-y-2 lg:p-4 lg:space-y-4">
      <section className="section-tools flex items-center justify-start gap-x-1.5 ">
        <Filter>فیلتر</Filter>

        <AddNewProduct>ایجاد محصول</AddNewProduct>
      </section>

      <section className="main-content space-y-1.5 md:space-y-2 lg:space-y-4">
        <Activity
          mode={
            products.length && TABLE_HEAD_TITLES.length ? "visible" : "hidden"
          }
        >
          <LastProducts
            products={[...products].reverse()}
            tableHeadTitles={TABLE_HEAD_TITLES}
          />

          <Pagination />
        </Activity>
      </section>
    </div>
  );
};

export default Dashboard;
