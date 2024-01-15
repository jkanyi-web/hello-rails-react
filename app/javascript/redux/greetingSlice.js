import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  const response = await axios.get('/api/v1/greetings');
  return response.data.greeting;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: '',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default greetingSlice.reducer;
