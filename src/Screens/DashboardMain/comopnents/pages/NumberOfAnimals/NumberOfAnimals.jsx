import { useState } from "react";
import "./NumberOfAnimals.css";

const NumberOfAnimals = () => {
  const [number, setNumber] = useState(250);
  return (
    <div className="flex border-b-2 pb-1 border-solid border-var(--accentColor) flex-col justify-between items-center h-auto gap-2 my-6 w-6/12">
      <h2 className="text-sm w-full font-medium">Total Number Of Animals</h2>
      <div className="flex w-full justify-items-center items-start gap-4">
        {JSON.stringify(number)
          .split("")
          .map((number, index) => (
            <div
              className=" py-1 rounded-md px-3  shadow-inner shadow-[#ccc] inset-0  bg-[#eee] text-[#4c4c4c] text-2xl font-normal"
              key={index}
            >
              {number}
            </div>
          ))}
      </div>
      <p className="flex text-sm  font-medium text-[#6b6b6b] self-start">
        Last Recorder 9am
      </p>
    </div>
  );
};

export default NumberOfAnimals;
