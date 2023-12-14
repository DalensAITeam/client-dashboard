import "./FeedingAlarm.css";

const FeedingAlarm = () => {
  return (
    <div className="flex flex-col justify-around md:justify-evenly md:mx-auto mb-5 md:h-[150px] w-2/5 md:w-3/5 md:px-5 items-start">
      <h2 className="font-medium text-sm md:text-xl">Set Feeding Alarm</h2>
      <input
        className="time font-medium w-full text-2xl border-b-2 border-solid border-var(--accentColor) !important:border-b-2 "
        style={{ border: "none" }}
        type="time"
      />
    </div>
  );
};

export default FeedingAlarm;
