import { createSlice } from '@reduxjs/toolkit';

export const userSignUpSlice = createSlice({
  name : "signup",

  initialState: {
    email : "",
    password : ""
  },
  reducers: {
    email: (state,action )=> {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload.email;
    },
    password: (state,action )=> {
      state.password = action.payload.password;
    },
  },
});

export const { email,password } = userSignUpSlice.actions;

console.log(email,password);

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEmail = state => state.email;
export const selectPassword = state => state.password;

export default userSignUpSlice.reducer;
