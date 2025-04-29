import { createSlice } from "@reduxjs/toolkit";

const clientSearchSlice = createSlice({
  name: "clientSearchSlice",
  initialState: { SearchClient: "All", SearchStore: {} },
  reducers: {
    clientSearch: (state, action) => {
      let { Search } = action.payload;
      state.SearchClient = Search;
    },
    storeResponse: (state, action) => {
      let { response } = action.payload;
      state.SearchStore = response;
    },
  },
});
export const { clientSearch, storeResponse } = clientSearchSlice.actions;
export default clientSearchSlice.reducer;
