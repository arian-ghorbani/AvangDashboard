const TableCell = ({ children }) => {
  return (
    <td className="table-cell not-last:flex-1 not-last:line-clamp-1">
      {children}
    </td>
  );
};

export default TableCell;
