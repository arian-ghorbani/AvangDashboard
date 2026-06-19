const TableRow = ({ children }) => {
  return (
    <tr className="table-row-elem h-12 px-4 flex items-center gap-x-1 rounded-2xl even:bg-card/65">
      {children}
    </tr>
  );
};

export default TableRow;
