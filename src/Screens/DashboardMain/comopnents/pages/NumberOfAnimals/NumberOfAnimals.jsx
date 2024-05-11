import React, { useState, useEffect } from "react";
import { setAnimalNumber } from "../../../../../Redux/ActionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const NumberOfAnimals = () => {
  const [number, setNumber] = useState([]);
  const [animalLoading, setAnimalLoading] = useState(true);
  const [animalError, setAnimalError] = useState(null);
  const cameraIpAddress = useSelector((state) => state.actions.ipAddress);
  const dispatch = useDispatch();
  console.log(cameraIpAddress[1])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const numbers = [];
  
        for (let i = 0; i == cameraIpAddress.length -1; i++) {
          console.log(i);
          console.log(cameraIpAddress[i]);
          const ipAddress = cameraIpAddress[i];
          const response = await fetch(`https://dalensai.onrender.com/model/animal_number/Chicken/${ipAddress}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ${ipAddress}`);
          }
  
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
  
          let animalNumber = "";
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            animalNumber += decoder.decode(value);
          }
  
          numbers.push(animalNumber);
        }
  
        setNumber(numbers);
        dispatch(setAnimalNumber(numbers));
        setAnimalLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAnimalError(error.message);
        setAnimalLoading(false);
      }
    };
  
    fetchData();
  }, [cameraIpAddress, dispatch]);
  

  // if (animalLoading) {
  //   return <div>Loading Animal Numbers...</div>;
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
        {number.map((animalNumber, index) => (
          <div
            className="py-1 rounded-md px-3 shadow-inner shadow-[#ccc] inset-0 bg-[#eee] text-[#4c4c4c] text-2xl font-normal"
            key={index}
          >
            {animalNumber}
          </div>
        ))}
      </div>
      <p className="flex text-sm text-center items-center my-auto font-medium text-[#6b6b6b] self-start md:self-center">
        Last Recorded 9am
      </p>
    </div>
  );
};

export default NumberOfAnimals;
