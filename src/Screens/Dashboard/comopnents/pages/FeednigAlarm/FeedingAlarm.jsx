import "./FeedingAlarm.css";

const FeedingAlarm = () => {
  return (
    <div className="feedingGeneral">
      <h2>Set Feeding Alarm</h2>
      <input className="time" style={{ border: "none" }} type="time" />
    </div>
  );
};

export default FeedingAlarm;
