import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const incrementAsync = createAsyncThunk(

);

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectMail: null, 
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMail: ( state, action ) => {
      state.selectMail = action.payload;
    }, 
    openMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openMessage, closeMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
