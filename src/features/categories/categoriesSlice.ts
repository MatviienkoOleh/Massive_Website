import { OrderFromDBI, OrderPositionI, ShoeI } from "./../../interface/global";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { act } from "react-dom/test-utils";

export interface CategoriesState {
  positionId: string;
  order: OrderPositionI[];
  arrayOfShoes: ShoeI[];
  ordersFromDB: OrderFromDBI[];
  userEmail: string;
}

const initialState: CategoriesState = {
  positionId: "",
  order: [],
  arrayOfShoes: [],
  ordersFromDB: [],
  userEmail: 'matviienkooleh@gmail.com',
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addPositionId: (state, action) => {
      state.positionId = action.payload;
    },
    addPositionToOrder: (state, action) => {
      let index = state.order.findIndex((orderP, index) => orderP.shoe.model === action.payload.shoe.model)
      if( index < 0) {
        state.order.push(action.payload);
      }
    },
    setOrderFromLocalStorage: (state) => {
      const jsonOrderLocalStorage: string | any = localStorage.getItem("order");
      const orderLocalStorage = JSON.parse(jsonOrderLocalStorage);
      state.order = [...orderLocalStorage];
    },
    clearOrder: (state) => {
      state.order = [];
    },
    deletePositionFromOrder: (state, action) => {
      state.order = state.order.filter(
        (position, index) => position.shoe.model !== action.payload
      );
      localStorage.setItem("order", JSON.stringify(state.order));
    },
    setOrdersFromDb: (state, action) => {
      state.ordersFromDB = [...action.payload];
    },
    setArrayOfShoesFormDb: (state, action) => {
      if(action.payload) {
        state.arrayOfShoes = [...action.payload.filtered];
      }
    },
  },
});

export const {
  addPositionId,
  addPositionToOrder,
  setOrderFromLocalStorage,
  clearOrder,
  deletePositionFromOrder,
  setOrdersFromDb,
  setArrayOfShoesFormDb,
} = categoriesSlice.actions;

export const selectCount = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
