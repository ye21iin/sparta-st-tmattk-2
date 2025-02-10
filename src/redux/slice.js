import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  inputValue: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, actions) => {
      state.message = actions.payload;
    },
    setInputValue: (state, actions) => {
      state.inputValue = actions.payload;
    },
  },
});

export const { setMessage, setInputValue } = messageSlice.actions;
export default messageSlice.reducer;
