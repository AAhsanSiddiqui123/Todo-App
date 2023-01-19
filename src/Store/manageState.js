import { createSlice } from '@reduxjs/toolkit';

const initialUpdateState = { isupdate: false, updatedId: "" };

const magageState = createSlice({
  name: 'manageState',
  initialState: initialUpdateState,
  reducers: {
    formUpdateHandler(state, action) {
      state.isupdate = action.payload
    },

    foundUpdateIdHandler(state, action) {
      state.updatedId = action.payload
    }

  },
});

export const magageStateAction = magageState.actions;

export default magageState.reducer;