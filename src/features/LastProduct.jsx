import { useEffect } from "react";
import toast from "react-hot-toast";
import Table from "../components/Table/Table";
import TableBody from "../components/Table/elements/TableBody";
import TableCell from "../components/Table/elements/TableCell";
import TableHead from "../components/Table/elements/TableHead";
import TableRow from "../components/Table/elements/TableRow";
import Edit from "../components/Tools/elements/Edit";
import Remove from "../components/Tools/elements/Remove";
import View from "../components/Tools/elements/View";
import { optional } from "zod";

function LastProducts({ products, tableHeadTitles, notFound }) {
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
                  <View product={product} />
                  <Edit product={product} />
                  <Remove product={product} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LastProducts;
