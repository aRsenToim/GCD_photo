import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
 isMode: string
}
const initialState: IInitialState = {
 isMode: ""
}

const pageSlice = createSlice({
 name: "pageSlice",
 initialState,
 reducers: {
  setIsMode(state, action: PayloadAction<string>) {
   state.isMode = action.payload
  }
 }
})


export default pageSlice.reducer
export const { setIsMode } = pageSlice.actions