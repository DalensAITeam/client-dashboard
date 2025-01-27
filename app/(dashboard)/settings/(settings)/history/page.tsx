import DropDown from "@/components/history/dropDown";
import { FaTrash } from "react-icons/fa6";

export default function HistorySettingsPage() {
  const dropdownPlaceholder = "Yearly";
  const options = ["Yearly", "Monthly", "Weekly", "Daily", "Never"];
  return (
    <div className="flex flex-col p-10">
      <h3 className="text-xl font-medium">History</h3>
      <div className="w-full p-6 bg-white rounded justify-between items-center gap-4 flex-col md:flex-row  inline-flex border-solid border ">
        <div className="text-neutral-800 gap-2 flex flex-col items-start text-[22px] font-normal font-['Poppins']">
          <span className="flex items-center">
            <FaTrash /> History
          </span>
          <p className="text-xs md:w-2/3 opacity-50">
            Your history will be cleared automatically, please select a suitable
            clearing time
          </p>
        </div>
        <div className="flex px-2 rounded-md border border-slate-300 w-2/3  md:w-1/6">
          <DropDown options={options} placeholder={dropdownPlaceholder} />
        </div>
      </div>
    </div>
  );
};