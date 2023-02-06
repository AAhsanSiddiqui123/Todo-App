import { createSlice } from '@reduxjs/toolkit';

const initialUpdateState = { isEdit: false, updatedId: "" };

const magageState = createSlice({
  name: 'manageState',
  initialState: initialUpdateState,
  reducers: {
    formUpdateHandler(state, action) {
      state.isEdit = action.payload
    },

    foundUpdateIdHandler(state, action) {
      state.updatedId = action.payload
    }

  },
});

export const magageStateAction = magageState.actions;

export default magageState.reducer;