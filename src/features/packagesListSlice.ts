import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PackageFromList } from '../types/type';

interface packagesListStateProps {
  data: PackageFromList[] | null;
  loading: boolean;
  error: string;
}

const initialState: packagesListStateProps = {
  data: null,
  loading: false,
  error: '',
};

export const fetchPackages = createAsyncThunk('fetchPackages', async () => {
  const response = await axios.get<PackageFromList[]>(`https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/packages`);
  return response.data;
});

const packagesListSlice = createSlice({
  name: 'packagesList',
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = '';
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPackages.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = null;
    });
    builder.addCase(fetchPackages.fulfilled, (state, action: PayloadAction<PackageFromList[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchPackages.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Paketleri çağıramadık';
      state.data = null;
    });
  },
});

export default packagesListSlice.reducer;
export const { resetState } = packagesListSlice.actions;
