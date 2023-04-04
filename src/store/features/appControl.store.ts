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
  modalOpen: boolean;
};

const initialValue: AppControlType = {
  orderBy: { order: OrderBy.Insertion, asc: true },
  modalOpen: false,
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
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
  },
});

export const actions = AppControlSlice.actions;
export default AppControlSlice.reducer;
