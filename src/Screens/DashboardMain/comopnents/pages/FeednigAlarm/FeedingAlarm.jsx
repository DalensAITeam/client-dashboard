import "./FeedingAlarm.css";

const FeedingAlarm = () => {
  return (
    <div className="flex flex-col justify-around w-2/5 items-start">
      <h2 className="font-medium text-sm">Set Feeding Alarm</h2>
      <input
        className="time font-medium text-2xl border-b-2 border-solid border-var(--accentColor) !important:border-b-2 "
        style={{ border: "none" }}
        type="time"
      />
    </div>
  );
};

export default FeedingAlarm;
