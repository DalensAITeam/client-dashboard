import "./GeneralHealth.css";
import StatusChart from "./StatusChart";
import { useState, useEffect } from "react";

const GeneralHealth = () => {
  const[threats,setThreats] = useState('');

  useEffect(() => {
    // Make an AJAX request to the Django view
    fetch("http://localhost:8000/model/threat_number/Chicken/0")
      .then((response) => {
        // Create a ReadableStream from the response
        const reader = response.body.getReader();

        // Read data from the stream
        return new ReadableStream({
          start(controller) {
            // Read chunks of data from the stream
            function read() {
              reader.read().then(({ done, value }) => {
                // Update the HTML content with the received data
                setThreats(new TextDecoder().decode(value));

                // Continue reading from the stream if not done
                if (!done) {
                  read();
                }
              });
            }

            // Start reading from the stream
            read();
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [threats]);

  return (
    <div className="GeneralHealth">
      <h2>General Health Status</h2>
      <StatusChart />
      <div className="threats">
        <div className="flex text-[#ccc] text-sm my-3">
          <img src="/warning.png" alt="warning" />
          <p>{threats? threats : 'threats'}</p>
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
