import {
  OrderFromDBI,
  OrderPositionI,
  ShoeI,
  userMessages,
} from "./../../interface/global";
import {  createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CategoriesState {
  positionId: string;
  order: OrderPositionI[];
  arrayOfShoes: ShoeI[];
  ordersFromDB: OrderFromDBI[];
  messagesFromDB: userMessages[];
  userEmail: string;
  isVisiblePopUp: boolean;
}

const initialState: CategoriesState = {
  positionId: "",
  order: [],
  arrayOfShoes: [],
  ordersFromDB: [],
  messagesFromDB: [],
  userEmail: "matviienkooleh@gmail.com",
  isVisiblePopUp: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addPositionId: (state, action) => {
      state.positionId = action.payload;
    },
    addPositionToOrder: (state, action) => {
      let index = state.order.findIndex(
        (orderP, index) => orderP.shoe.model === action.payload.shoe.model
      );
      if (index < 0) {
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
      if (action.payload) {
        state.arrayOfShoes = [...action.payload.filtered];
      }
    },
    setArrayOfMessagesFromDb: (state, action) => {
      state.messagesFromDB = [];

      if(action.payload !== null) {
        let keysArr = Object.keys(action.payload);
        keysArr.forEach((id) => {
          let newMessage = {
            ...action.payload[id],
            uid: id,
          };
          state.messagesFromDB.push(newMessage);
        });
      }
    },
    setIsPopUpVisible: (state, action) => {
      state.isVisiblePopUp = action.payload;
    }
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
  setArrayOfMessagesFromDb,
  setIsPopUpVisible,
} = categoriesSlice.actions;

export const selectCount = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
