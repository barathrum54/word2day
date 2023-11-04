import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppStates } from "./types";

const initialState: AppState = {
  appState: AppStates.INITIALIZE_PENDING,
  paletteMode: "light",
};

const appStateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setAppState: (state, action) => {
      state.appState = action.payload;
    },
    togglePaletteMode: (state) => {
      state.paletteMode = state.paletteMode === "light" ? "dark" : "light";
    },
  },
});

// Export action creators and reducer
export const { setAppState, togglePaletteMode } = appStateSlice.actions;
export default appStateSlice.reducer;
