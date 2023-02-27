import { createSlice } from '@reduxjs/toolkit';

const initialUpdateState = { isLoading: false, topCastIsLoading:false };

const magageState = createSlice({
  name: 'manageState',
  initialState: initialUpdateState,
  reducers: {
    updateHandler(state, action) {
      state.isLoading = action.payload
    },

    castLoadingHandler(state, action){
      console.log(action);
      state.topCastIsLoading = action.payload
    }
  },
});

export const magageStateAction = magageState.actions;

export default magageState.reducer;