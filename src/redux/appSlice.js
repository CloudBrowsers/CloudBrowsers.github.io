const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isSelectedTab: {
    name: "monthly",
    description: "Number of days for which the plan is active are",
  },
  offeringsSelectedTab: "Dashboard",
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setIsSelectedTab: (state, action) => {
      state.isSelectedTab = action.payload;
    },
    setOfferingsSelectedTab: (state, action) => {
      state.offeringsSelectedTab = action.payload;
    },
  },
});

export const { setIsSelectedTab, setOfferingsSelectedTab } = appSlice.actions;
export default appSlice.reducer;
