import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import { TABLE_HEAD_TITLES } from "../data/constants";

function Import({ handleImporting }) {


  const importFromExcel = (file) => {
    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const workbook = XLSX.read(e.target.result, { type: "array" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const data = XLSX.utils.sheet_to_json(worksheet);

          if (!data.length) {
            toast.error("فایل پشتیبان خالی است!", { style: { backgroundColor: "#e7000b", boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)" } });
            return;
          }

          //* Backup file structure 
          const requiredKeys = ["name", "buy", "sell", "qty"];
          const hasValidKeys = requiredKeys.every((key) => key in data[0]);
          if (!hasValidKeys) {
            toast.error("ساختار فایل پشتیبان معتبر نیست!", { style: { backgroundColor: "#e7000b", boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)" } });
            return;
          }

          handleImporting(data);
          toast.success("فایل پشتیبان با موفقیت آپلود شد", { style: { backgroundColor: "#00a63e", boxShadow: "0px 3px 15px 0px rgba(0, 166, 62, 0.25)" } });
        } catch (error) {
          toast.error("خطا در خواندن فایل پشتیبان!", { style: { backgroundColor: "#e7000b", boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)" } });
          console.log("Read error: ", error);
        }
      };

      reader.onerror = () => {
        toast.error("خطا در آپلود فایل پشتیبان!", { style: { backgroundColor: "#e7000b", boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)" } });
      };

      reader.readAsArrayBuffer(file);

    } catch (error) {
      toast.error("فایل نامعتبر است!", { style: { backgroundColor: "#e7000b", boxShadow: "0px 3px 15px 0px rgba(231, 0, 11, 0.25)" } });
      console.log("Import error: ", error);
    }
  };

  return (
    <>
      <input type="file" id="import-backup-file" className="hidden" accept=".xlsx, .xls" onInput={(e) => {
        const file = e.target.files[0];
        if (file) importFromExcel(file);
        e.target.value = "";
      }} />

      <label htmlFor="import-backup-file" className="import-btn bg-blue-600/30 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white">
        <span className="item-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            >
              <path d="M4 12a8 8 0 1 0 16 0" opacity="0.5" />
              <path strokeLinejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7" />
            </g>
          </svg>
        </span>

        <span className="item-text">بارگذاری پشتیبان</span>
      </label>
    </>
  );
}

export default Import;
