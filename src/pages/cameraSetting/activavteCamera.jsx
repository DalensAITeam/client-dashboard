import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIpAddress } from "../../Redux/ActionSlice"; // Import your Redux action creator

function ActivateCamera() {
  const cameraIpAddresses = useSelector((state) => state.actions.ipAddress);
  const dispatch = useDispatch();

  // Local state to manage edited IP addresses
  const [editedIpAddresses, setEditedIpAddresses] = useState(cameraIpAddresses);

  // Handler for updating edited IP address in local state
  const handleIpAddressChange = (index, newIpAddress) => {
    const updatedIpAddresses = [...editedIpAddresses];
    updatedIpAddresses[index] = newIpAddress;
    setEditedIpAddresses(updatedIpAddresses);
  };

  // Handler for saving edited IP addresses to Redux store
  const handleSaveChanges = () => {
    // Dispatch action to update IP addresses in Redux store
    dispatch(setIpAddress(editedIpAddresses));

    // Optionally reset local edited IP addresses state
    // setEditedIpAddresses(cameraIpAddresses);

    // Log or perform any other operations after saving changes
    console.log("IP addresses updated:", editedIpAddresses);
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <h4 className="font-poppins text-2xl font-semibold text-gray-800">
        Active Cameras
      </h4>

      <div className="flex flex-col gap-4">
        {editedIpAddresses.map((ipAddress, index) => (
          <div className="flex items-center gap-10" key={index}>
            <h3 className="font-poppins text-base font-semibold text-gray-800">
              Camera {index + 1}
            </h3>
            <span>{ipAddress}</span>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => handleIpAddressChange(index, e.target.value)}
              className="text-base text-gray-800 font-normal bg-transparent w-full outline-none"
            />
            <span className="text-green-500 cursor-pointer">active</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-2">
        <div
          className="font-poppins text-base font-semibold text-white bg-gradient-to-r from-[#70e000] to-[#70e000] rounded-md cursor-pointer p-2"
          onClick={handleSaveChanges}
        >
          Save Changes
        </div>
      </div>
    </div>
  );
}

export default ActivateCamera;
