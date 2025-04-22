import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const clientSearchSlice = createSlice({
  name: "clientSearchSlice",
  initialState: { SearchClient: ["all"] },
  reducers: {
    clientSearch: (state, action) => {
      let { Search } = action.payload;
      state.SearchClient = Search;
    },
  },
});
export const { clientSearch } = clientSearchSlice.actions;
export default clientSearchSlice.reducer;
