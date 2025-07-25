import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/commonSlice";
// ...

const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
