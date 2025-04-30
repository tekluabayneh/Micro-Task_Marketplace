import { createSlice } from "@reduxjs/toolkit";

const freelancerSearchSlice = createSlice({
  name: "freelancerSearchSlice",
  initialState: { SearchFreelancer: "", SearchStore: {} },
  reducers: {
    freelancerSearch: (state, action) => {
      let { Search } = action.payload;
      state.SearchFreelancer = Search;
    },

    StoreResult: (state, action) => {
      let { response } = action.payload;
      state.SearchStore = response;
    },
  },
});
export const { freelancerSearch, StoreResult } = freelancerSearchSlice.actions;
export default freelancerSearchSlice.reducer;
