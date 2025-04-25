import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  user: null,
  username: "",
  dataLoadingStatus: "idle",
};

export const fetchData = createAsyncThunk("data/fetchData", async (name) => {
  const request = useHttp();
  return await request(
    `https://jaefu3p97g.execute-api.us-east-1.amazonaws.com/default/smttab?username=${name}`
  );
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
      })
      .addCase(fetchData.rejected, (state) => {
        state.dataLoadingStatus = "error";
      });
  },
});
export const { setUsername } = dataSlice.actions;

const { reducer } = dataSlice;
export default reducer;
