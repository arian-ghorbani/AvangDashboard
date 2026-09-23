import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import Table from "../components/table/Table";
import TableBody from "../components/table/elements/TableBody";
import TableCell from "../components/table/elements/TableCell";
import TableHead from "../components/table/elements/TableHead";
import TableRow from "../components/table/elements/TableRow";
import Edit from "../components/Tools/elements/Edit";
import Remove from "../components/Tools/elements/Remove";
import View from "../components/Tools/elements/View";
import { ProductsContext } from "../context/ProductsProvider";

const productFields = [
  { id: "name", type: "text", placeholder: "نام محصول" },
  { id: "buy", type: "number", placeholder: "قیمت خرید", suffix: "تومان" },
  { id: "sell", type: "number", placeholder: "قیمت فروش", suffix: "تومان" },
  { id: "qty", type: "number", placeholder: "تعداد", suffix: "عدد" },
];

function LastProducts({ products, tableHeadTitles, notFound }) {
  const { updateProduct, removeProduct } = useContext(ProductsContext);

  useEffect(() => {
    if (notFound)
      toast("کالای مورد نظر یافت نشد!", {
        style: {
          backgroundColor: "#d08700",
          boxShadow: "0px 3px 15px 0px rgba(208, 135, 0, 0.25)",
        },
      });
  }, [notFound]);

  return (
    <div className="table-wrapper overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            {tableHeadTitles.map((title) => (
              <TableCell key={title}>
                <p className="font-kalameh-bold">{title}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {notFound ||
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <p>{product.id}</p>
                </TableCell>

                <TableCell>
                  <p>{product.name}</p>
                </TableCell>

                <TableCell>
                  <p>{product.buy.toLocaleString()} تومان</p>
                </TableCell>

                <TableCell>
                  <p>{product.sell.toLocaleString()} تومان</p>
                </TableCell>

                <TableCell>
                  <p>{product.qty}</p>
                </TableCell>

                <TableCell>
                  <View item={product} fields={productFields} label="محصول" />
                  <Edit
                    item={product}
                    fields={productFields}
                    onUpdate={updateProduct}
                    label="محصول"
                  />
                  <Remove
                    item={product}
                    onRemove={removeProduct}
                    label="محصول"
                    nameKey="name"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LastProducts;
