import React from "react";

// ActivateCamera component for managing active cameras and IP addresses
function ActivateCamera() {
  return (
    // Main container with flex column layout, items alignment, and vertical gap
    <div className="flex flex-col items-start gap-2 w-full">
      {/* Container for the heading "Active Cameras" */}
      <h4 className="font-poppins text-2xl font-semibold text-gray-800">
        Active Cameras
      </h4>

      {/* Container for displaying active cameras with flex column layout and vertical gap */}
      <div className="flex flex-col gap-4">
        {/* Container for each active camera with flex layout and horizontal gap */}
        <div className="flex items-center gap-10">
          {/* Heading for Camera 1 */}
          <h3 className="font-poppins text-base font-semibold text-gray-800">
            Camera 1
          </h3>

          {/* Deactivate link for Camera 1 */}
          <span className="text-green-500  cursor-pointer">active</span>
        </div>

        {/* Container for each active camera with flex layout and horizontal gap */}
        <div className="flex items-center gap-10">
          {/* Heading for Camera 2 */}
          <h3 className="font-poppins text-base font-semibold text-gray-800">
            Camera 2
          </h3>

          {/* Deactivate link for Camera 2 */}
          <span className="text-red-500 underline cursor-pointer">
            deactivate
          </span>
        </div>
      </div>
      {/* Container for editing IP addresses with flex column layout, vertical gap, and padding */}
      <div className="flex flex-col gap-10 p-30 w-full">
        {/* Heading for Edit IP Address */}
        <h3 className="font-poppins text-2xl font-semibold text-gray-800">
          Edit IP Address
        </h3>

        {/* Container for each IP address input with flex column layout, vertical gap, and full width */}
        <div className="flex flex-col gap-0.5rem w-full">
          {/* Label for IP address (Camera 1) */}
          <label className="font-poppins text-base font-normal text-gray-700">
            IP address(Camera 1)
          </label>

          {/* Input for IP address (Camera 1) with specified styling */}
          <div className="flex flex-col items-start justify-center w-750 h-12 bg-gray-200 px-4  border-b-2 border-gray-500 focus:outline-none focus:border-green-500">
            <span className="text-base font-normal text-gray-800">
              000.00.0.0
            </span>
          </div>
        </div>

        {/* Container for each IP address input with flex column layout, vertical gap, and full width */}
        <div className="flex flex-col gap-0.5rem w-full ">
          {/* Label for IP address (Camera 2) */}
          <label className="font-poppins text-base font-normal text-gray-700">
            IP address(Camera 2)
          </label>

          {/* Input for IP address (Camera 2) with specified styling */}
          <div className="flex flex-col items-start justify-center w-750 h-12 bg-gray-200 px-4  border-b-2 border-gray-500 focus:outline-none focus:border-green-500">
            <span className="text-base font-normal text-gray-800">
              000.00.0.0
            </span>
          </div>
        </div>
      </div>
      {/* Container for the "Save Changes" button with flex column layout, items centering, and full width */}
      <div className="flex flex-col items-center justify-center w-full h-10  bg-gradient-to-r from-[#70e000] to-[#70e000] rounded-md cursor-pointer">
        {/* Text for the "Save Changes" button */}
        <div className="font-poppins text-base font-semibold text-white">
          Save Changes
        </div>
      </div>
    </div>
  );
}

// Exporting the ActivateCamera component
export default ActivateCamera;
