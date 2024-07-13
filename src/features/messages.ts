import { createSlice } from "@reduxjs/toolkit";

export type messagesType = {
  id: number;
  userName: string;
  userAvatarUrl: string;
  message: string;
};

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [] as messagesType[],
  },
  reducers: {
    increment: (state, actions) => {
      let id = 1
      if (state.messages[state.messages.length - 1]) {
        id = state.messages[state.messages.length - 1].id + 1 
      }


      state.messages.push({
        id,
        ...actions.payload,
      });
    },
    decrement: (state, actions) => {
      state.messages.map((value, index) => {
        if (value.id === actions.payload.id) {
          state.messages.splice(index, 1);
        }
      });
    },
  },
});

export default messageSlice.reducer;

export const { increment, decrement } = messageSlice.actions;
