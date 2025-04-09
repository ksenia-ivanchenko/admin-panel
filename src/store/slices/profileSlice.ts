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
    getProfileRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.data = action.payload;
      state.loading = false;
    },
    getProfileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearProfile: (state) => {
      state.data = null;
    },
  },
});

export const {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  clearProfile,
} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
