import React, { useState, useEffect } from "react";
import "./NumberOfAnimals.css";
import { setAnimalNumber } from "../../../../../Redux/ActionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const NumberOfAnimals = () => {
  const [number, setNumber] = useState(0);
  const [animalLoading, setAnimalLoading] = useState(true);
  const [animalError, setAnimalError] = useState(null);
  const cameraIpAddress = useSelector((state) => state.actions.ipAddress);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/model/animal_number/Chicken/${cameraIpAddress}`);
        const reader = response.body.getReader();

        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          setNumber(decoder.decode(value));
          dispatch(setAnimalNumber(decoder.decode(value)));
        }
      } catch (error) {
        setAnimalError(error.message);
      } finally {
        setAnimalLoading(false);
      }
    };

    fetchData();

    // Clean-up function
    
  }, []);

  // if (animalLoading) {
  //   return <div>Loading Animal Number...</div>;
  // }

  if (animalError) {
    return <div className="text-center">Error: {animalError}</div>;
  }

  return (
    <div className="flex border-b-2 pb-1 border-solid border-var(--accentColor) flex-col justify-between items-center h-auto gap-2 my-6 w-6/12 md:justify-evenly md:w-2/3 md:mx-auto md:h-[150px]">
      <h2 className="text-sm w-full md:text-center font-medium">
        Total Number Of Animals
      </h2>
      <div className="flex w-full justify-items-center md:justify-center items-start gap-4">
        {/* {String(number)
          .split("")
          .map((digit, index) => (
            <div
              className="py-1 rounded-md px-3 shadow-inner shadow-[#ccc] inset-0 bg-[#eee] text-[#4c4c4c] text-2xl font-normal"
              key={index}
            >
              {digit}
            </div>
          ))} */}
          {number? number : "Loading..."}
      </div>
      <p className="flex text-sm text-center items-center my-auto font-medium text-[#6b6b6b] self-start md:self-center">
        Last Recorded 9am
      </p>
    </div>
  );
};

export default NumberOfAnimals;
