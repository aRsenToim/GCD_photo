import { Dispatch } from "react"
import { profileApi } from "../../api/servies/profileApi"
import { IGetProfileResponse, ILikesPhoto, ILogin, ILoginProfile, IProfile, IRegist, IRegistProfile } from "../../types/profileType"
import { addLikeProfilePhoto, addPhoto, setProfile, unLikePhotoProfileState } from "../slices/profileSlice"
import { AxiosError } from "axios"
import { addLikePhoto, setError } from "../slices/photosSlice"
import { localStorageProfileApi } from "../../api/servies/localStorageApi"
import { photosApi } from "../../api/servies/photosApi"
import { IAddPhotoProfileResponse, IPhoto } from "../../types/photosType"
import { getPhotosFetch } from "./photosAction"
import { setUser, setErrorUser } from "../slices/usersSlice"


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

export const addPhotoFetch = (photo: IPhoto) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.addPhoto(photo).then(() => {
   dispatch(getPhotosFetch())
  })
 }
}

export const addPhotoProfile = (photo: ILikesPhoto, id: string, profile: IProfile) => {
 return async (dispatch: Dispatch<any>) => {  
  profileApi.addPhoto(id, [...profile.photos, photo]).then(() => {
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


export const addLikePhotoProfile = (photo: ILikesPhoto, likes: ILikesPhoto[]) => {
 return async (dispatch: Dispatch<any>) => {
  const profile = localStorageProfileApi.getProfile()
  profileApi.likePhoto(profile?.id ?? '', likes).then(() => {
   dispatch(addLikeProfilePhoto(photo))
   localStorageProfileApi.setProfile({
    id: profile?.id ?? '',
    email: profile?.email ?? '',
    nickname: profile?.nickname ?? '',
    photos: profile?.photos ?? [],
    likes: likes,
    img: profile?.img ?? '',
   })
  })
 }
}


export const unLikePhotoProfile = (photo: ILikesPhoto, likes: ILikesPhoto[]) => {
 return async (dispatch: Dispatch<any>) => {
  const profile = localStorageProfileApi.getProfile()
  profileApi.likePhoto(profile?.id ?? '', likes).then(() => {
   dispatch(unLikePhotoProfileState(photo))
   localStorageProfileApi.setProfile({
    id: profile?.id ?? '',
    email: profile?.email ?? '',
    nickname: profile?.nickname ?? '',
    photos: profile?.photos ?? [],
    likes: likes,
    img: profile?.img ?? '',
   })
  })
 }
}


export const getUserFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  profileApi.getProfile(id).then((data: IGetProfileResponse) => {
   dispatch(setUser(data.data[0]))
   
  }).catch((error: Error | AxiosError) => dispatch(setErrorUser(error.message)))
 }
}