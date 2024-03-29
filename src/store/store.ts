import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";
import profileSlice from "./slices/profileSlice";
import pageSlice from "./slices/pageSlice";
import usersSlice from "./slices/usersSlice";

const rootReducers = combineReducers({
 photosSlice,
 profileSlice,
 pageSlice,
 usersSlice,
})


export const setupStore = () => configureStore({
 reducer: rootReducers
})



export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']