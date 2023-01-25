import { createSlice, current } from '@reduxjs/toolkit';


const initialCounterState = { dataArray: [] };

const toDoItems = createSlice({
  name: 'todoState',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) { 
      console.log(action.payload); 
      state.dataArray = action.payload;
    },

    updateHandler(state, action) {
      let initialArray = current(state.dataArray)
      let indexdValue = initialArray.findIndex((curr) => {
        return curr.id === action.payload.updatedId
      })

      let obj = {
        ...initialArray[indexdValue],
        name: action.payload.inputChange
      }

      state.dataArray[indexdValue] = obj
    },


  },
});



export const todoActionCreater = toDoItems.actions;

export default toDoItems.reducer;