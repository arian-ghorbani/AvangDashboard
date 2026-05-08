import { Activity, useCallback, useEffect, useMemo, useState } from "react";
import Filter from "../../components/Table/elements/Filter";
import { TABLE_HEAD_TITLES } from "/src/data/constants";
import LastProducts from "../../features/LastProduct";
import Pagination from "../../components/Table/elements/Pagination";
import AddNewProduct from "../../components/AddNewProduct";

const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsFilter, setProductsFilter] = useState("همه");
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/src/data/products.json");
        const data = await res.json();
        setAllProducts([...data]);
      } catch (error) {
        console.log("Fetching products has error: ", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = useCallback((newProduct) => {
    setAllProducts((prev) => {
      const newId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      return [...prev, { id: newId, ...newProduct }];
    });
    setCurrentPage(1);
  }, []);

  const filteredProduct = useMemo(() => {
    switch (productsFilter) {
      case "همه": {
        return [...allProducts];
      }
      case "درحال اتمام": {
        return [...allProducts].filter((product) => product.qty <= 2);
      }
      case "ناموجودها": {
        return [...allProducts].filter((product) => product.qty === 0);
      }
      default: {
        return [...allProducts];
      }
    }
  }, [allProducts, productsFilter]);

  const reversedProducts = useMemo(
    () => [...filteredProduct].reverse(),
    [filteredProduct],
  );

  const products = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return reversedProducts.slice(start, start + itemsPerPage);
  }, [reversedProducts, currentPage]);

  return (
    <div className="size-full p-1.5 space-y-1.5 bg-card shadow-sm rounded-3xl md:p-2 md:space-y-2 lg:p-4 lg:space-y-4">
      <section className="section-tools flex items-center justify-start gap-x-1.5 ">
        <Filter onChangeFilter={setProductsFilter}>فیلتر</Filter>
        <AddNewProduct onAddProduct={handleAddProduct}>
          ایجاد محصول
        </AddNewProduct>
      </section>

      <section className="main-content space-y-1.5 md:space-y-2 lg:space-y-4">
        <Activity
          mode={
            allProducts.length && TABLE_HEAD_TITLES.length
              ? "visible"
              : "hidden"
          }
        >
          <LastProducts
            products={products}
            tableHeadTitles={TABLE_HEAD_TITLES}
          />

          <Pagination
            totalItems={filteredProduct.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </Activity>
      </section>
    </div>
  );
};

export default Dashboard;
