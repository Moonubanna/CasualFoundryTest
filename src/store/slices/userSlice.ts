import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: null | string;
  error: null | string;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearStore: () => initialState,
  },
});

export const { loginRequest, loginSuccess, loginFailure, clearStore } = userSlice.actions;
export default userSlice.reducer;