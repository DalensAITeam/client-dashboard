import "./GeneralHealth.css";
import StatusChart from "./StatusChart";

const GeneralHealth = () => {
  return (
    <div className="GeneralHealth">
      <h2>General Health Status</h2>
      <StatusChart />
      <div className="threats">
        <div className="flex text-[#ccc] text-sm my-3">
          <img src="/warning.png" alt="warning" />
          <p>Threats: 0</p>
        </div>
        <div className="text-sm my-3">
          <h5>
            Status: <span>Perfect</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default GeneralHealth;
