import clsx from "clsx";

const TableRow = ({ style, children }) => {
  return (
    <tr
      className={clsx(
        "h-9 px-2 flex items-center bg-basebackground rounded-t-2xl",
        style,
      )}
    >
      {children}
    </tr>
  );
};

export default TableRow;
