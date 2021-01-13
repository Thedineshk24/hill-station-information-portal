import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSignUpReducer from "../features/user/SignupSlice";
import userSignInReducer from "../features/user/SignInSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    signup : userSignUpReducer,
    signin : userSignInReducer,
  },
});
