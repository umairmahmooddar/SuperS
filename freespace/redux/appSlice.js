import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  isDarkMode: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.theme = action.payload.theme;
      state.isDarkMode = action.payload.isDarkMode;
    },
  },
});

export default appSlice.reducer;
export const { toggleDarkMode } = appSlice.actions;
