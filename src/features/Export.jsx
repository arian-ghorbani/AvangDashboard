import toast from "react-hot-toast";
import * as XLSX from "xlsx";

function Export({ itemsBackup, backupName, fileBackupName }) {
  const exportToExcel = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(itemsBackup);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, backupName);
      XLSX.writeFile(workbook, fileBackupName);

      toast.success("فایل پشتیبان با موفقیت دانلود شد", {
        style: {
          backgroundColor: "#00a63e",
          boxShadow: "0px 3px 15px 0px rgba(0, 166, 62, 0.25)",
        },
      });
    } catch (error) {
      toast.error("خطا در ساخت فایل پشتیبان!", {
        style: {
          backgroundColor: "#e7000b",
          boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)",
        },
      });
      console.log("Export error: ", error);
    }
  };

  return (
    <button
      className="export-btn bg-purple-600/30 text-purple-600 hover:bg-purple-600 hover:text-white"
      onClick={exportToExcel}
    >
      <span className="item-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M4 12a8 8 0 1 0 16 0" opacity="0.5" />
            <path strokeLinejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3" />
          </g>
        </svg>
      </span>

      <span className="item-text">پشتیبان گیری</span>
    </button>
  );
}

export default Export;
