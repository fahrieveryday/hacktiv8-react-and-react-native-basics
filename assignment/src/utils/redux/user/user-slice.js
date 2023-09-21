import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    save: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: () => initialState,
  },
});
