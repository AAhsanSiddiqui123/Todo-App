import { configureStore } from '@reduxjs/toolkit';

import manageStateReducer from './manageState';
import toDoItemsReducer from "./todoItemsList"


const index = configureStore({
  reducer: { update: manageStateReducer, todoReducer: toDoItemsReducer },
});

export default index;