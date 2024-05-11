import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  id: 0,
  name: "",
  mobile_number: '',
  error: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  userinfo: null,
  picture: "",
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dalensai.onrender.com/users/create-user/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = response.data;
      thunkAPI.dispatch(setEmail(res.email));
      return res;
    } catch (e) {
      const error =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message || e.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const google_signup = createAsyncThunk(
  "auth/google-signup",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dalensai.onrender.com/users/google-signup/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      const error =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message || e.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const google_login = createAsyncThunk(
  "auth/google-login",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dalensai.onrender.com/users/google-login/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = response.data;
      return {
        email: res.email,
        firstName: res.first_name,
        lastName: res.last_name,
        picture: res.google_picture,
      };
    } catch (e) {
      const error =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message || e.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formdata, thunkAPI) => {
    try {
      const formData = {
        email: formdata.email,
        password: formdata.password,
      };
      const response = await axios.post(
        "https://dalensai.onrender.com/users/api/token/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const remember = formdata.rememberMe;
      if (response.data) {
        localStorage.setItem("access", JSON.stringify(response.data.access));
        localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
      }
      const jwt = localStorage.getItem("access");
      const data = jwtDecode(jwt);

      const res = await axios.get(
        `https://dalensai.onrender.com/users/get-user/${data.user_id}/`
      );
      thunkAPI.dispatch(setEmail(res.data.email));
      return res.data;
    } catch (e) {
      const error =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message || e.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const activate = createAsyncThunk(
  "auth/activate",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dalensai.onrender.com/auth/users/activation/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (e) {
      const error =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message || e.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  localStorage.clear();
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData, thunkAPI) => {
    try {
      await axios.post(
        "https://dalensai.onrender.com/users/password_reset/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Email sent");
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (formData, thunkAPI) => {
    try {
      const token = formData.token;
      await axios.post(
        "https://dalensai.onrender.com/users/password_reset/validate_token/",
        { token: token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await axios.post(
        "https://dalensai.onrender.com/users/password_reset/confirm/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Token validated");
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UserDataSlice = createSlice({
  name: "userdata",
  initialState: initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    setLastName: (state, action) => {
      state.last_name = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobile_number = action.payload;
    },
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.error = "";
      state.email = "Default";
      state.first_name = "Default";
      state.last_name = "Default";
      state.mobile_number = "+2340000000";
      state.picture = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.userinfo = null;
      })
      .addCase(activate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(activate.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.userinfo = null;
      })
      .addCase(google_signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(google_signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userinfo = action.payload;
      })
      .addCase(google_signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.userinfo = null;
      })
      .addCase(google_login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(google_login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("Login success: ", action);
      })
      .addCase(google_login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.payload;
        state.userinfo = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.userinfo = null;
        state.isSuccess= false
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = true;
        state.isError = action.payload;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {
  setEmail,
  setFirstName,
  setLastName,
  setName,
  setId,
  setMobileNumber,
  setPicture,
  reset,
} = UserDataSlice.actions;
export default UserDataSlice.reducer;
