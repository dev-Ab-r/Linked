/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const appSlice = createSlice({
  name: 'app',
  initialState:{
      channelId:null,
      channelName:null
  },
  reducers: {
    setChannelInfo:(state,action) => {
      state.channelId = action.payload.channelId,
      state.channelName = action.payload.channelName
    },
    
  },
  
});

export const {setChannelInfo} = appSlice.actions;

export const selectChannelId= (state) => state.app.channelId;
export const selectChanneName= (state) => state.app.channelName;

export default appSlice.reducer;
