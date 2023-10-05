import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../types/profileType";
import { IPhoto } from "../../types/photosType";


interface IInitialState {
 profile: IProfile | null
 error: string | null
 isLikedPhoto: boolean
}

const initialState: IInitialState = {
 profile: null,
 error: null,
 isLikedPhoto: false
}

const profileSlice = createSlice({
 name: "profileSlice",
 initialState,
 reducers: {
  setProfile(state, action: PayloadAction<IProfile | null>){
   state.profile = action.payload
  },
  addPhoto(state, action: PayloadAction<IPhoto>){
   state.profile?.photos.push(action.payload)
  }
 }
})

export default profileSlice.reducer
export const {setProfile, addPhoto} = profileSlice.actions