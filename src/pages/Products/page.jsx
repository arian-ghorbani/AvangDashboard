import {
  Activity,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Filter from "/src/components/Table/elements/Filter";
import { TABLE_HEAD_TITLES } from "/src/data/constants";
import LastProducts from "/src/features/LastProduct";
import Pagination from "/src/components/Table/elements/Pagination";
import AddNewProduct from "/src/components/AddNewProduct";
import { ProductsContext } from "/src/context/ProductsProvider";
import IsEmpty from "../../components/IsEmpty";

const Products = () => {
  const { allProducts, setAllProducts, isLoading, searchQuery, addProduct } =
    useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsFilter, setProductsFilter] = useState("همه");
  const itemsPerPage = 12;

  useEffect(() => {
    document.title = "محصولات";
  }, []);

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
    setCurrentPage(1);
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

  if (isLoading) return null;

  return allProducts.length > 0 ? (
    <>
      <section className="section-tools h-12 px-1.5 sticky top-0 right-0 z-10 inline-flex items-center justify-start gap-x-1.5 bg-card shadow-sm rounded-full">
        <Filter onChangeFilter={handleFilterChange}>فیلتر</Filter>
        <AddNewProduct onAddProduct={handleAddProduct}>
          ایجاد محصول
        </AddNewProduct>
      </section>

      <div className="w-full p-4 bg-card rounded-3xl shadow-sm">
        <section className="main-content space-y-4">
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
    </>
  ) : (
    <IsEmpty>محصولی برای نمایش وجود ندارد!</IsEmpty>
  );
};

export default Products;
