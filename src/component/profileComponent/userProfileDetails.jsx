import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

function UserProfileDetailsSection() {
  const { email, first_name, last_name } = useSelector((state) => state.userdata || {});
  
  const [isNameInputDisabled, setIsNameInputDisabled] = useState(true);
  const [isEmailInputDisabled, setIsEmailInputDisabled] = useState(true);
  const [isPhoneInputDisabled, setIsPhoneInputDisabled] = useState(true);

  const renderField = (label, value, type, isDisabled, setIsDisabled, placeholder) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          className={`
            w-full h-12 px-4 
            bg-white border-2 rounded-lg
            font-medium text-gray-700 
            transition-all duration-200
            ${isDisabled 
              ? 'border-gray-200' 
              : 'border-lime-500 ring-2 ring-lime-500/20'
            }
            focus:outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20
          `}
          placeholder={placeholder}
          disabled={isDisabled}
          defaultValue={value}
        />
        <button
          onClick={() => setIsDisabled(!isDisabled)}
          className={`
            absolute right-4 top-1/2 -translate-y-1/2
            text-gray-400 hover:text-lime-500
            transition-colors duration-200
            ${!isDisabled && 'text-lime-500'}
          `}
        >
          <FaEdit className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h3>
      
      {renderField(
        "Full Name",
        `${first_name} ${last_name}`,
        "text",
        isNameInputDisabled,
        setIsNameInputDisabled,
        "Enter your full name"
      )}

      {renderField(
        "Email Address",
        email,
        "email",
        isEmailInputDisabled,
        setIsEmailInputDisabled,
        "Enter your email address"
      )}

      {renderField(
        "Phone Number",
        "",
        "tel",
        isPhoneInputDisabled,
        setIsPhoneInputDisabled,
        "+234"
      )}

      <div className="flex justify-end pt-4">
        <button 
          className="px-6 py-2 bg-lime-500 text-white rounded-lg font-medium hover:bg-lime-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UserProfileDetailsSection;
