import { useState, useEffect} from "react";
import "./NumberOfAnimals.css";

const NumberOfAnimals = () => {
  const [number, setNumber] = useState(250);
  const [animalNumber, setAnimalNumber] = useState('');

  useEffect(()=>{
    fetch('http://localhost:8000/model/animal_number/Chicken/0')
    .then(response => {
        const reader = response.body.getReader();

  
        return new ReadableStream({
            start(controller) {
             
                function read() {
                    reader.read().then(({ done, value }) => {
                        
                         setAnimalNumber(new TextDecoder().decode(value))
                         console.log(animalNumber);

                      
                        if (!done) {
                            read();
                        }
                    });
                }

                // Start reading from the stream
                read();
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
  },[animalNumber])
  return (
    <div className="flex border-b-2 pb-1 border-solid border-var(--accentColor) flex-col justify-between  items-center h-auto gap-2 my-6 w-6/12 md:justify-evenly md:w-2/3 md:mx-auto  md:h-[150px] ">
      <h2 className="text-sm w-full md:text-center font-medium">
        Total Number Of Animals
      </h2>
      <div className="flex w-full justify-items-center md:justify-center items-start gap-4">
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
      <p className="flex text-sm text-center items-center my-auto font-medium text-[#6b6b6b] self-start md:self-center">
        Last Recorder 9am
      </p>
    </div>
  );
};

export default NumberOfAnimals;
