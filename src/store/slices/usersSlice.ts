import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../types/profileType";

interface IinitialState {
 user: IProfile | null
 users: IProfile[] | null
 error: string | null
}

const initialState: IinitialState = {
 user: null,
 error: null,
 users: null
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
  setUsers(state, action: PayloadAction<IProfile[]>){
   state.users = action.payload
  }
 }
})

export const {setErrorUser, setUser, setUsers} = usersSlice.actions
export default usersSlice.reducer