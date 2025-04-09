import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from 'helpers/types';

type ProfileState = {
  data: UserProfile | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchProfileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearProfile: (state) => {
      state.data = null;
    },
  },
});

export const {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  clearProfile,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
