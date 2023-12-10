import { useState } from "react";
// import './CustomDropdown.css';

const options = [
  "One variety of animal farm type",
  "Double variety of animal farm type",
  "Multiple variety of animal farm farm type",
];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className={`custom-dropdown w-full  ${isOpen && "active"}`}>
      <div
        className="selected-option font-[500px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || (
          <p className="text-[#ccc] py-2">Type of Animal Farm</p>
        )}
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
                  className={`rounded-full appearance-none border-2 border-solid ring-2 ring-[#70E000] border-white h-4 w-4 outline-1 m-1 mr-2 outline-[#70E000] focus:ring-2  ${
                    selectedOption === option && "bg-[#70E000]"
                  }`}
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

export default CustomDropdown;
