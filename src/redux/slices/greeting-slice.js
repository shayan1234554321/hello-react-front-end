import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk('getGreetings', async () => {
  const response = await fetch('http://127.0.0.1:3000/greetings');
  const greeting = await response.json();
  return greeting;
});

const initialState = {
  greeting: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, { payload }) => ({
      ...state,
      greeting: payload,
    }));
  },
});

export const selectGreeting = (state) => state.greetingReducer.greeting;

export default greetingSlice.reducer;
