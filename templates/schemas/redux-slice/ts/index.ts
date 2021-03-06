import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface State {
}

// Define the initial state using that type
const initialState: State = {
};

export const Slice = createSlice({
  name: 'reducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    /*
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    */
  },
});

export const { increment, decrement, incrementByAmount } = Slice.actions;

export default Slice.reducer;
