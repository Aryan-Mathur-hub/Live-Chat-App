import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: true,
  reducers: {
    refreshSidebarFun: (state)=>{
      return !state;
    }
  },
});

export const { refreshSidebarFun } = sidebarSlice.actions;
export default sidebarSlice.reducer;