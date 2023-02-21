import { createSlice } from '@reduxjs/toolkit';

const initialUpdateState = { searchList:[]};

const searchReducer = createSlice({
  name: 'manageState',
  initialState: initialUpdateState,
  reducers: {

    searchHandler(state, action) {
        // console.log(action.payload);
      state.searchList = action.payload
    },


  },
});

export const searchAction = searchReducer.actions;

export default searchReducer.reducer;