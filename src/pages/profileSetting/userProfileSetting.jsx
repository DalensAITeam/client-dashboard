import React, { useState } from "react";
import UserProfileDetailsSection from "../../component/profileComponent/userProfileDetails";
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserProfileSetting() {
  const navigator = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  function onGoToSettingHomePageFn() {
    navigator("/");
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleUpdatePhoto() {
    // Implement your logic for handling the file upload here
    if (selectedFile) {
      // You can use the selectedFile to upload it to your server or perform other actions
      console.log("Selected File:", selectedFile);
      // Reset the selected file after handling it
      setSelectedFile(null);
      setPreviewImage(null);
    } else {
      // Handle the case where no file is selected
      console.log("Please select a file");
    }
  }

  return (
    <div className="flex flex-col items-start gap-5 w-full p-3 ">
      <h2 className="flex flex-row items-center font-inter text-2xl gap-5 font-semibold text-gray-800">
        <FaArrowLeft
          className="flex md:hidden w-17 h-5 cursor-pointer"
          onClick={onGoToSettingHomePageFn}
        />
        Profile Settings
      </h2>
      <div className="flex flex-row items-center sm:justify-between justify-center gap-5 w-full shadow-md p-5">
        <div className="flex sm:flex-row flex-col justify-center gap-5">
          <div>
            <FaEdit
              className="absolute right-[-20px] top-[-10px] w-6 h-6 text-green-500 cursor-pointer sm:hidden"
            />
            <label htmlFor="fileInput">
              <img
                src={previewImage || ""}
                alt="HF"
                className="w-32 h-32 rounded-full border-4 border-green-500 flex items-center justify-center object-cover"
              />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col align-center justify-center ">
            <h4 className="flex items-center justify-center font-poppins text-lg font-semibold text-gray-800">
              HF
            </h4>
            <h6 className="flex items-center justify-center font-poppins text-sm font-normal text-gray-400">
              email
            </h6>
          </div>
        </div>
        <button
          className="hidden sm:flex items-center sm:border sm:border-gray-800 md:text-xl md:font-semibold h-10 px-3"
          onClick={handleUpdatePhoto}
        >
          Update photo
        </button>
      </div>
      <UserProfileDetailsSection />
    </div>
  );
}

export default UserProfileSetting;
