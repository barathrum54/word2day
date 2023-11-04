// store/WordStore/reducers.ts

import { createSlice } from "@reduxjs/toolkit";
import { WordState } from "./types";

const initialState: WordState = {
  word: null,
};

const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
  },
});

// Export action creators and reducer
export const { setWord } = wordSlice.actions;
export default wordSlice.reducer;
