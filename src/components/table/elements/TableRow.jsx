const TableRow = ({ children }) => {
  return (
    <tr className="table-row-elem h-10 px-2 flex items-center gap-x-1 rounded-xl even:bg-basebackground lg:h-12 lg:px-4 lg:rounded-2xl">
      {children}
    </tr>
  );
};

export default TableRow;
