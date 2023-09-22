import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPhoto } from '../../types/photosType'


interface IInitialState {
 photos: IPhoto[] | null
 error: string | null
 photo: IPhoto | null
}

const initialState: IInitialState = {
 photos: null,
 error: null,
 photo: null
}

const photosSlice = createSlice({
 name: "photosSlice",
 initialState: initialState,
 reducers: {
  setPhotos(state, action: PayloadAction<IPhoto[]>){
   state.photos = action.payload
  },
  setPhoto(state, action: PayloadAction<IPhoto | null>){
   state.photo = action.payload
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  }
 }
})

export default photosSlice.reducer
export const {setError, setPhoto, setPhotos} = photosSlice.actions