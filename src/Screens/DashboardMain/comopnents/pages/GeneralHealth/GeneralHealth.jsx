import "./GeneralHealth.css";
import StatusChart from "./StatusChart";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setThreatState } from "../../../../../Redux/ActionSlice";
import { useSelector } from "react-redux";

const GeneralHealth = () => {
  const [threats, setThreats] = useState(null);
  const [threatLoading, setThreatLoading] = useState(true);
  const [threatError, setThreatError] = useState(null);
  const cameraIpAddress = useSelector((state) => state.actions.ipAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dalensai.onrender.com/model/threat_number/Chicken/${cameraIpAddress[0]}`
        );
        const reader = response.body.getReader();

        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const threatData = decoder.decode(value);
          setThreats(threatData);
          dispatch(setThreatState(threatData)); // Dispatch after setting the state
        }
      } catch (error) {
        setThreatError(error.message);
      } finally {
        setThreatLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (threatLoading) {
  //   return <div>Loading Threats...</div>;
  // }

  if (threatError) {
    return <div className="text-center">Error: {threatError}</div>;
  }

  return (
    <div className="GeneralHealth">
      <h2>General Health Status</h2>
      <StatusChart />
      <div className="threats">
        <div className="flex text-[#ccc] text-sm my-3">
          <img src="/warning.png" alt="warning" />
          <p>{threats ? threats : "threats loading..."}</p>
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
