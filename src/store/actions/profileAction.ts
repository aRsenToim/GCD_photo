import { Dispatch } from "react"
import { profileApi } from "../../api/servies/profileApi"
import { ILogin, ILoginProfile, IProfile, IRegist, IRegistProfile } from "../../types/profileType"
import { addPhoto, setProfile } from "../slices/profileSlice"
import { AxiosError } from "axios"
import { setError } from "../slices/photosSlice"
import { localStorageProfileApi } from "../../api/servies/localStorageApi"
import { photosApi } from "../../api/servies/photosApi"
import { IAddPhotoProfileResponse, IPhoto } from "../../types/photosType"
import { getPhotosFetch } from "./photosAction"



export const registProfileFetch = (user: IRegist) => {
 return async (dispatch: Dispatch<any>) => {
  profileApi.registProfile(user).then((data: IRegistProfile) => {
   let profile = { id: user.id, email: user.email, nickname: user.nickname, photos: user.photos, likes: user.likes, img: user.img }
   dispatch(setProfile(profile))
   localStorageProfileApi.setProfile(profile)
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}


export const setProfileFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  dispatch(setProfile(localStorageProfileApi.getProfile()))
 }
}


export const loginProfileFetch = (user: ILogin) => {
 return async (dispatch: Dispatch<any>) => {
  profileApi.loginProfile(user).then((data: ILoginProfile) => {
   dispatch(setProfile(data.data.user))
   localStorageProfileApi.setProfile(data.data.user)
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const addPhotoFetch = (photo: IPhoto, id: string, profile: IProfile) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.addPhoto(photo).then((data: IAddPhotoProfileResponse) => {
   dispatch(getPhotosFetch())
   dispatch(addPhotoProfile(photo, id, profile))
  })
 }
}

export const addPhotoProfile = (photo: IPhoto, id: string, profile: IProfile) => {
 return async (dispatch: Dispatch<any>) => {
  profileApi.addPhoto(id, [...profile.photos, photo]).then((data: IAddPhotoProfileResponse) => {
   dispatch(addPhoto(photo))
   localStorageProfileApi.setProfile({ ...profile, photos: [...profile.photos, photo] })
  })
 }
}


export const logoutProfileFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  localStorageProfileApi.setProfile(null)
  dispatch(setProfile(null))
 }
}