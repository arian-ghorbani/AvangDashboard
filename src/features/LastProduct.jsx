import Table from "../components/Table/Table";
import TableBody from "../components/Table/elements/TableBody";
import TableCell from "../components/Table/elements/TableCell";
import TableHead from "../components/Table/elements/TableHead";
import TableRow from "../components/Table/elements/TableRow";
import EditTool from "../components/Tools/elements/EditTool";
import RemoveTool from "../components/Tools/elements/RemoveTool";
import ShowTool from "../components/Tools/elements/ShowTool";

function LastProducts({ products, tableHeadTitles }) {
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
          {products.map((product) => (
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
