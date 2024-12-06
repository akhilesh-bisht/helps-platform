import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostRequest: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePostRequest: (state, action) => {
      const { id, updatedData } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        Object.assign(post, updatedData);
      }
    },
  },
});

export const { addPostRequest, updatePostRequest } = postsSlice.actions;
export default postsSlice.reducer;
