import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   posts: [],
   categories: [],
   loading: false,
   error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
   const response = await fetch(
      "https://agency-2c3ae-default-rtdb.firebaseio.com/Products.json"
   );
   const posts = await response.json();
   return posts;
});

const postsSlice = createSlice({
   name: "posts",
   initialState,
   extraReducers: {
      [getPosts.fulfilled]: (state, action) => {
         state.posts = action.payload;
         const categoriesItems = action.payload.map((category) => {
            return category.category;
         });
         const set = new Set(categoriesItems);
         set.add("Show All");
         set.forEach((item) => {
            state.categories.push(item);
         });
      },
   },
});

export default postsSlice.reducer;
