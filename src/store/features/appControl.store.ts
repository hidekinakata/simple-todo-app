import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export enum OrderBy {
  Insertion = 0,
  Complete,
  Important,
  Alphabetical,
}

type AppControlType = {
  orderBy: OrderBy;
};

const initialValue: AppControlType = {
  orderBy: OrderBy.Insertion,
};

export const AppControlSlice = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    setOrderBy: (state, action: PayloadAction<OrderBy>) => {
      state.orderBy = action.payload;
    },
  },
});

export const actions = AppControlSlice.actions;
export default AppControlSlice.reducer;
