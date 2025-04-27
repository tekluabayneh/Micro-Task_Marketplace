import clientProfileSettingSlice from "../Slices/clientProfileSettingSlice";
import clientSearchSlice from "../Slices/clientSearchSlice";
import freelancerSearchSlice from "../Slices/freelancerSearchSlice";
import FreelancerProfileSettingSlice from "../Slices/FreelancerProfileSettingSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    clientProfileSettingSlice: clientProfileSettingSlice,
    clientSearchSlice: clientSearchSlice,
    FreelancerProfileSettingSlice: FreelancerProfileSettingSlice,
    freelancerSearchSlice: freelancerSearchSlice,
  },
});

export default store;
