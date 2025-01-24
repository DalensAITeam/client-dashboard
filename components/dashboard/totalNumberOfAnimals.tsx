const TOTAL_NUMBER_OF_ANIMALS = 250;

const TotalNumberOfAnimals = () => {
  return (
    <div className="flex flex-col items-start p-0 gap-[12px] w-[165px] min-h-[105px]">
      <h4 className="font-poppins font-medium text-[12px] leading-[18px] text-[#1a1a1a]">
        Total Number Of Animals
      </h4>
      <div className="grid grid-cols-3 p-0 gap-y-[10px] w-full min-h-[48px]">
        {TOTAL_NUMBER_OF_ANIMALS.toString()
          .padStart(3, "0")
          .split("")
          .map((val, idx) => (
            <div
              key={idx}
              className="size-[48px] flex items-center justify-center bg-white rounded-[5px] [box-shadow:inset_1px_1px_12px_rgba(204,204,204,0.8)]"
            >
              <span className="font-poppins font-medium text-[24px] leading-[24px] text-center text-[#4D4D4D]">
                {val}
              </span>
            </div>
          ))}
      </div>
      {/* TODO */}
      <div className="font-poppins font-medium text-[10px] leading-[15px] text-[#6B6B6B]">
        Last recorded 9am
      </div>
    </div>
  );
};

export default TotalNumberOfAnimals;
