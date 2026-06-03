import { Activity, useCallback, useContext, useMemo, useState } from "react";
import Filter from "../../components/Table/elements/Filter";
import { TABLE_HEAD_TITLES } from "/src/data/constants";
import LastProducts from "../../features/LastProduct";
import Pagination from "../../components/Table/elements/Pagination";
import AddNewProduct from "../../components/AddNewProduct";
import { ProductsContext } from "../../context/ProductsProvider";

const Dashboard = () => {
  const { allProducts, setAllProducts, searchQuery, addProduct } =
    useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsFilter, setProductsFilter] = useState("همه");
  const itemsPerPage = 10;

  const handleAddProduct = useCallback(
    (newProduct) => {
      addProduct(newProduct);
      setCurrentPage(1);
    },
    [addProduct],
  );

  const filteredByCategory = useMemo(() => {
    switch (productsFilter) {
      case "درحال اتمام":
        return allProducts.filter((p) => p.qty <= 2 && p.qty > 0);
      case "ناموجودها":
        return allProducts.filter((p) => p.qty === 0);
      default:
        return [...allProducts];
    }
  }, [allProducts, productsFilter]);

  const filteredProduct = useMemo(() => {
    if (!searchQuery) return filteredByCategory;
    return filteredByCategory.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [filteredByCategory, searchQuery]);

  const reversedProducts = useMemo(
    () => [...filteredProduct].reverse(),
    [filteredProduct],
  );

  const products = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return reversedProducts.slice(start, start + itemsPerPage);
  }, [reversedProducts, currentPage]);

  const handleFilterChange = (val) => {
    setProductsFilter(val);
    setCurrentPage(1);
  };

  return (
    <div className="size-full p-1.5 space-y-1.5 bg-card shadow-sm rounded-3xl md:p-2 md:space-y-2 lg:p-4 lg:space-y-4">
      <section className="section-tools flex items-center justify-start gap-x-1.5 ">
        <Filter onChangeFilter={handleFilterChange}>فیلتر</Filter>
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
            notFound={filteredProduct.length === 0}
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
