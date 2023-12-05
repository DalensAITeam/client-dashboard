import "./GeneralHealth.css";
import StatusChart from "./StatusChart";

const GeneralHealth = () => {
  return (
    <div className="GeneralHealth">
      <h2>General Health Status</h2>
      <StatusChart />
      <div className="threats">
        <div className="count">
          <img src="/warning.png" alt="warning" />
          <p>Threats: 0</p>
        </div>
        <div className="status">
          <h5>
            Status: <span>Perfect</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default GeneralHealth;
