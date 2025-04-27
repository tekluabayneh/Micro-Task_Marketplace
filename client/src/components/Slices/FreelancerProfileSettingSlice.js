import { createSlice } from "@reduxjs/toolkit";

const FreelancerProfileSettingSlice = createSlice({
  name: "FreelancerProfileSettingSlice",
  initialState: { Fr_slide: [] },
  reducers: {
    update: (state, action) => {
      state.Fr_slide = action.payload;
      console.log("this is the action", action.payload);

      console.log("oops", state.Fr_slide);
    },
  },
});

export const { update } = FreelancerProfileSettingSlice.actions;
export default FreelancerProfileSettingSlice.reducer;
