import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../types/profileType";

interface IinitialState {
 user: IProfile | null
 error: string | null
}

const initialState: IinitialState = {
 user: null,
 error: null
}

const usersSlice = createSlice({
 name: "usersSlice",
 initialState,
 reducers: {
  setErrorUser(state, action: PayloadAction<string>){
   state.error = action.payload
  },
  setUser(state, action: PayloadAction<IProfile>){
   state.user = action.payload
  },
 }
})

export const {setErrorUser, setUser} = usersSlice.actions
export default usersSlice.reducer