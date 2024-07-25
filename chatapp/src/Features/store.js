import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import sidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    themeKey: themeSliceReducer,
    refreshKey: sidebarSlice,
  },
});
