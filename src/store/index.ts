import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import customerBasketSlice from '../features/customerBasketSlice';
import packagesListSlice from '../features/packagesListSlice';

const store = configureStore({
  reducer: {
    packagesList: packagesListSlice,
    customerBasket: customerBasketSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
