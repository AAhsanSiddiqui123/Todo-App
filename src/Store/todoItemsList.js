import { createSlice, current } from '@reduxjs/toolkit';
import { axiosService } from "../Services/axios.service";


const initialCounterState = { dataArray: [] };

const toDoItems = createSlice({
  name: 'todoState',
  initialState: initialCounterState,
  reducers: {

    listHandler(state, action) {   
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

export const sendUserRequest = (url)=>{
  return (dispatch)=>{
    axiosService({ url}).then((res) => {
      dispatch(todoActionCreater.listHandler(res.data))

    }).catch((err) => {
      console.log(err);
    })
  }
}

export const todoActionCreater = toDoItems.actions;

export default toDoItems.reducer;