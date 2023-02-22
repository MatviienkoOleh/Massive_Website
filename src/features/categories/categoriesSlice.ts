import { OrderPositionI, ShoeI } from './../../interface/global';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CategoriesState {
  positionId: string;
  order: OrderPositionI[]
  arrayOfShoes: ShoeI[]
}

const initialState: CategoriesState = {
  positionId: '',
  order: [],
  arrayOfShoes: [
    {
      id: '1',
      model: 1234,
      type: "boots",
      status: "new",
      url: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Women-Dynasty-Black-021022-1.jpg?v=1644877666",
      price: 12,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '2',
      model: 27,
      type: "boots",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '3',
      model: 32,
      type: "sandals",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '4',
      model: 44,
      type: "highHeels",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '5',
      model: 55,
      type: "loafers",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '6',
      model: 66,
      type: "oxford",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
    {
      id: '7',
      model: 77,
      type: "platforms",
      status: "sale",
      url: "https://goop-img.com/wp-content/uploads/2022/09/image-25-1-1.jpg",
      price: 25,
      description: "some new collection shoes i like to introduce to you",
    },
  ],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addPositionId: (state, action) => {
        state.positionId = action.payload;
    },
    addPositionToOrder: (state, action) => {
        state.order.push(action.payload);
    },
    setOrderFromLocalStorage: (state) => {
      const jsonOrderLocalStorage: string | any = localStorage.getItem('order');
      const orderLocalStorage = JSON.parse(jsonOrderLocalStorage);
      state.order = [...orderLocalStorage];
    },
    deletePositionFromOrder: (state, action) => {
      state.order = state.order.filter((position, index) => position.shoe.id !== action.payload);
      localStorage.setItem('order', JSON.stringify(state.order));
    },
  },
});

export const { addPositionId, addPositionToOrder, setOrderFromLocalStorage, deletePositionFromOrder} = categoriesSlice.actions;

export const selectCount = (state: RootState) => state.categories;


export default categoriesSlice.reducer;
