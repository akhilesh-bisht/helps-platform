import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostSlice";
import authReducer from "./AuthSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
export default store;
