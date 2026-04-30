import { Activity, useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Searchbox from "../../components/Searchbox";
import Table from "../../components/table/Table";
import TableBodyCell from "../../components/table/TableBodyCell";
import TableHeadCell from "../../components/table/TableHeadCell";
import TableRow from "../../components/table/TableRow";
import { TABLE_HEADS } from "/src/data/constants";

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

  console.log(products);

  return (
    <div className="size-full p-1.5 space-y-1.5 bg-card shadow-sm rounded-3xl">
      <section className="section-tools flex items-center justify-start gap-x-1.5 ">
        <Filter style="size-9 p-2 flex item-center gap-x-1 shrink-0 grow-0 md:w-fit md:pl-3">
          فیلتر
        </Filter>

        <Searchbox style="max-w-70 h-9 shrink-1 grow-1 inline-block md:hidden lg:w-85 lg:h-10" />
      </section>

      <section className="main-content">
        <div className="table-wrapper overflow-x-scroll">
          <Table>
            <thead>
              <TableRow>
                <Activity mode={TABLE_HEADS.length ? "visible" : "hidden"}>
                  {TABLE_HEADS.map((title) => (
                    <TableHeadCell key={title}>{title}</TableHeadCell>
                  ))}
                </Activity>
              </TableRow>
            </thead>

            <tbody></tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
