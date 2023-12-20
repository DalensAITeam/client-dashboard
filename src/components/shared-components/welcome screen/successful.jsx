import successfulScreenImg from "../../../assets/successfulScreenImg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Successful() {
  return (
    <div>
      <div className="h-[90vh] flex justify-center flex-col items-center">
        <div className="text-=center">
          <Link
            to={"/welcome"}
            className="text-[#70E000] hover:drop-shadow-[0_5px_10px_#70e000]"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Successful;
