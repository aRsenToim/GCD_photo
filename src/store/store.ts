import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";
import profileSlice from "./slices/profileSlice";
import pageSlice from "./slices/pageSlice";
import usersSlice from "./slices/usersSlice";


const store = configureStore({
 reducer: {
  photosSlice,
  profileSlice,
  pageSlice,
  usersSlice,
 }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch