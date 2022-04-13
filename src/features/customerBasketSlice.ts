import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PackageFromList } from '../types/type';

export interface Package {
  id: number;
  title: string;
  amount: number;
}

const initialState: Package[] = [];

const customerBasketSlice = createSlice({
  name: 'customerBasket',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PackageFromList>) => {
      const newPackage = { id: action.payload.id, title: action.payload.name, amount: action.payload.amount };
      state.push(newPackage);
    },
    remove: (state, action: PayloadAction<PackageFromList>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default customerBasketSlice.reducer;
export const { add, remove } = customerBasketSlice.actions;
