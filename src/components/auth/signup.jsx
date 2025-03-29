import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import {
  signup,
  setEmail,
  setFirstName,
  setLastName,
  google_signup,
  setPicture,
} from "../../Redux/UserDataSlice";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, error } = useSelector((state) => state.userdata);

  useEffect(() => {
    if (isSuccess) {
      toast.success("An activation link has been sent to your email");
      navigate("/login");
    }
    if (isError) {
      toast.error(error || "Signup failed. Please try again.");
    }
  }, [isSuccess, isError, error, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      return toast.error("Please fill all fields", { duration: 1000 });
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match", { duration: 1000 });
    }

    setIsLoggingIn(true);
    const toastId = toast.loading("Signing up...");

    dispatch(signup({ email, password, confirmPassword })).finally(() => {
      setIsLoggingIn(false);
      toast.dismiss(toastId);
    });
  };

  const handleGoogleSignup = (response) => {
    try {
      const data = jwtDecode(response.credential);
      const userData = {
        email: data.email,
        first_name: data.given_name,
        last_name: data.family_name,
        google: true,
        sub: data.sub,
        google_picture: data.picture,
      };

      dispatch(google_signup(userData));
      dispatch(setEmail(data.email));
      dispatch(setFirstName(data.given_name));
      dispatch(setLastName(data.family_name));
      dispatch(setPicture(data.picture));

      toast.success("Account created successfully!");
      navigate("/setup");
    } catch (error) {
      toast.error("Google signup failed. Please try again.");
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(/loginBackgroundImage.png)` }}
    >
      <div className="bg-white rounded-md shadow-lg p-8 min-w-[35vw]">
        <div className="flex flex-col items-center">
          <img src="./dalensAI.svg" alt="dalensAI" width="120" />
          <h1 className="text-2xl mt-5 font-semibold">Sign Up</h1>

          <div className="mt-2">
            <GoogleLogin
              onSuccess={handleGoogleSignup}
              onError={() => toast.error("Google signup failed")}
            />
          </div>

          <h5 className="mt-5 text-gray-500">OR</h5>
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mt-2 outline-none"
          />

          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md outline-none"
            />
            {showPassword ? (
              <VisibilityOffIcon
                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityIcon
                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="relative mt-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md outline-none"
            />
            {showConfirmPassword ? (
              <VisibilityOffIcon
                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <VisibilityIcon
                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600 transition"
          >
            {isLoggingIn ? "Creating Account..." : "Create Account"}
          </button>

          <div className="flex justify-center mt-3">
            <p className="text-sm">Already have an account?</p>
            <span
              className="text-green-500 cursor-pointer ml-1"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;






