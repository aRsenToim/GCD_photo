import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";
import profileSlice from "./slices/profileSlice";


const store = configureStore({
 reducer: {
  photosSlice: photosSlice,
  profileSlice: profileSlice
 }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch