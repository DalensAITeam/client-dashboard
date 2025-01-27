"use client";

import clsx from "clsx";
import { useState, type FC } from "react";
import { FaAngleDown } from "react-icons/fa6";

type props = {
  options: string[];
  placeholder: string;
};

const DropDown: FC<props> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className={clsx("custom-dropdown w-full", isOpen && "active")}>
      <div
        className="selected-option font-[500px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center py-1 w-full justify-between">
          {selectedOption || <p className="text-[#ccc]">{placeholder}</p>}
          <FaAngleDown />
        </div>
      </div>
      <div className="options relative bg-[#CCCCCC80] shadow-lg shadow-[#CCCCCC80]-500/50">
        {isOpen && options.length > 0 && (
          <div className=" absolute bg-white shadow-2xl p-2 rounded-b-xl  text-black  flex flex-col w-full">
            {options.map((option, index) => (
              <div
                key={index}
                style={{ color: "black" }}
                onClick={() => handleOptionChange(option)}
                className="font-medium flex my-3 text-sm"
              >
                <input
                  type="radio"
                  name="options"
                  value={option}
                  className={clsx(
                    "rounded-full appearance-none border-b-0 border-2 border-solid ring-2 ring-[#70E000] border-white h-4 w-4 outline-1  m-1 mr-2 outline-[#70E000] focus:ring-2",
                    selectedOption === option && "bg-[#70E000]"
                  )}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </div>
            ))}
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default DropDown;
