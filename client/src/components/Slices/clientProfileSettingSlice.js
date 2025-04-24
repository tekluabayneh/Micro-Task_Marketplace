import { createSlice } from "@reduxjs/toolkit";

const clientProfileSettingSlice = createSlice({
  name: "clientProfileSettingSlice",
  initialState: { CL_slide: [] },
  reducers: {
    update: (state, action) => {
      state.CL_slide = action.payload;
      console.log("this is athe action", action.payload);
    },
  },
});

export const { update } = clientProfileSettingSlice.actions;
export default clientProfileSettingSlice.reducer;
