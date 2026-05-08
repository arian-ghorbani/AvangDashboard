import toast from "react-hot-toast";
import Table from "../components/Table/Table";
import TableBody from "../components/Table/elements/TableBody";
import TableCell from "../components/Table/elements/TableCell";
import TableHead from "../components/Table/elements/TableHead";
import TableRow from "../components/Table/elements/TableRow";
import EditTool from "../components/Tools/elements/EditTool";
import RemoveTool from "../components/Tools/elements/RemoveTool";
import ShowTool from "../components/Tools/elements/ShowTool";
import { useEffect } from "react";

function LastProducts({ products, tableHeadTitles, notFound }) {
  useEffect(() => {
    if (notFound) toast("کالای مورد نظر یافت نشد!");
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
                  <ShowTool />
                  <EditTool />
                  <RemoveTool />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LastProducts;
