import clsx from "clsx";

const TableCell = ({ children, colSpan }) => {
  return (
    <td
      className="table-cell not-last:flex-1 not-last:line-clamp-1"
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};

export default TableCell;
