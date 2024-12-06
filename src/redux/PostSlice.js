import { createSlice } from "@reduxjs/toolkit";

// Initial state for the posts
const initialState = {
  posts: [],
};

// Create a slice with actions and reducers
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPostRequest: (state, action) => {
      // Add a new post to the state
      state.posts.push(action.payload);
    },
    updatePostRequest: (state, action) => {
      // Update the post in the state based on its ID
      const { id, updatedData } = action.payload;
      const post = state.posts.find((post) => post.id === id); // Find the post by id
      if (post) {
        // Update the post's properties
        Object.assign(post, updatedData);
      }
    },
  },
});

// Export the actions
export const { addPostRequest, updatePostRequest } = postsSlice.actions;

// Export the reducer to be added to the store
export default postsSlice.reducer;
