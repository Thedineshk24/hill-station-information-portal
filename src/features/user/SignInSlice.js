import { createSlice } from '@reduxjs/toolkit';

export const userSignInSlice = createSlice({
  name : "signin",

  initialState: {
    email : "",
    password : "",
  },
  reducers: {
    setEmail: (state,action )=> {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload;
    },
    setPassword: (state,action )=> {
      state.password = action.payload;
    },
    logoutUser : (state,action) => {
      state.logout = action.payload
    },
  },
});

export const { setEmail,setPassword,logoutUser } = userSignInSlice.actions;

// console.log(email,password);

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEmail = state => state.signin.email;
export const selectPassword = state => state.signin.password;

export default userSignInSlice.reducer;
