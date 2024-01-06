import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILikesPhoto, IProfile } from "../../types/profileType";
import { IPhoto } from "../../types/photosType";


interface IInitialState {
 profile: IProfile | null
 error: string | null
 isLikedPhoto: boolean
}

const initialState: IInitialState = {
 profile: null,
 error: null,
 isLikedPhoto: false,
}

const profileSlice = createSlice({
 name: "profileSlice",
 initialState,
 reducers: {
  setProfile(state, action: PayloadAction<IProfile | null>){
   state.profile = action.payload
  },
  addPhoto(state, action: PayloadAction<ILikesPhoto>){
   state.profile?.photos.unshift(action.payload)
  },
  addLikeProfilePhoto(state, action: PayloadAction<ILikesPhoto>){
   state.profile?.likes.unshift(action.payload)
  },
  unLikePhotoProfileState(state, action: PayloadAction<ILikesPhoto>){
   state.profile?.likes.splice(state.profile.likes.indexOf(action.payload), 1)
  },
  deletePhoto(state, action: PayloadAction<ILikesPhoto>){
   state.profile?.photos.splice(state.profile?.likes.indexOf(action.payload), 1)
   
  }
 }
})

export default profileSlice.reducer
export const {setProfile, addPhoto, addLikeProfilePhoto, unLikePhotoProfileState, deletePhoto} = profileSlice.actions