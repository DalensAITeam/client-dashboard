import { useState } from "react";
import "./NumberOfAnimals.css";

const NumberOfAnimals = () => {
  const [number, setNumber] = useState(250);
  return (
    <div className="NumberMain">
      <h2>Total Number Of Animals</h2>
      <div className="numbers">
        {JSON.stringify(number)
          .split("")
          .map((number, index) => (
            <div className="number" key={index}>
              {number}
            </div>
          ))}
      </div>
      <p>Last Recorder 9am</p>
    </div>
  );
};

export default NumberOfAnimals;
