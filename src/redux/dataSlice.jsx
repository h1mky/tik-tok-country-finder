import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../hooks/http.hook";

const initialState = {
  user: null,
  username: "",
  dataLoadingStatus: "idle",
};

export const fetchData = createAsyncThunk("data/fetchData", async (name) => {
  return await request(`/api/default/smttab?username=${name}`);
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.dataLoadingStatus = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.dataLoadingStatus = "idle";
        state.user = action.payload;
        state.username = "";
      })
      .addCase(fetchData.rejected, (state) => {
        state.dataLoadingStatus = "error";
      });
  },
});

export const { setUsername } = dataSlice.actions;
export default dataSlice.reducer;
