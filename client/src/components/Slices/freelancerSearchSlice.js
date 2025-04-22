import { createSlice } from "@reduxjs/toolkit";

const freelancerSearchSlice = createSlice({
  name: "freelancerSearchSlice",
  initialState: { SearchFreelancer: [] },
  reducers: {
    freelancerSearch: () => {},
  },
});
export const { freelancerSearch } = freelancerSearchSlice.actions;
export default freelancerSearchSlice.reducer
