import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export enum OrderBy {
  Insertion = 0,
  Complete,
  Important,
  Alphabetical,
}

type AppControlType = {
  orderBy: { order: OrderBy; asc: boolean };
};

const initialValue: AppControlType = {
  orderBy: { order: OrderBy.Alphabetical, asc: true },
};

export const AppControlSlice = createSlice({
  name: "todos",
  initialState: initialValue,
  reducers: {
    setOrderBy: (
      state,
      action: PayloadAction<{ order: OrderBy; asc: boolean }>
    ) => {
      state.orderBy = action.payload;
    },
  },
});

export const actions = AppControlSlice.actions;
export default AppControlSlice.reducer;
