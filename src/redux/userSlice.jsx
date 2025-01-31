import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://670f589f3e715186165771a0.mockapi.io/users";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://670f589f3e715186165771a0.mockapi.io/users/"
  );
  return response.data;
});
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    const response = await axios.post(
      "https://670f589f3e715186165771a0.mockapi.io/users",
      userData
    );
    return response.data;
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, updatedData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    await axios.delete(`${API_URL}/${userId}`);
    return userId;
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.isLoading = false;
      });
  },
});

// export const { addUser } = userSlice.actions;

export default userSlice.reducer;
