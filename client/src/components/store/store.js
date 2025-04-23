import clientProfileSettingSlice from "../Slices/clientProfileSettingSlice";
import clientSearchSlice from "../Slices/clientSearchSlice";
import freelancerSearchSlice from "../Slices/freelancerSearchSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    freelancerSearchSlice: freelancerSearchSlice,
    clientSearchSlice: clientSearchSlice,
    clientProfileSettingSlice: clientProfileSettingSlice,
  },
});

export default store;
