import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSignUpReducer from "../features/user/SignupSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    signup : userSignUpReducer
  },
});
