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
import { setUser, setErrorUser, setUsers } from "../slices/usersSlice"
import { AppDispatch } from "../store"


export const registProfileFetch = (user: IRegist) => {
 return async (dispatch: AppDispatch) => {
  profileApi.registProfile(user).then((data: IRegistProfile) => {
   let profile = { dateAuth: user.dateAuth ?? new Date, status: user?.status ?? '', id: user.id, email: user.email, nickname: user.nickname, photos: user.photos, likes: user.likes, img: user.img }
   dispatch(setProfile(profile))
   localStorageProfileApi.setProfile(profile)
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}


export const setProfileFetch = () => {
 return async (dispatch: AppDispatch) => {
  dispatch(setProfile(localStorageProfileApi.getProfile()))
 }
}


export const loginProfileFetch = (user: ILogin) => {
 return async (dispatch: AppDispatch) => {
  profileApi.loginProfile(user).then((data: ILoginProfile) => {
   dispatch(setProfile(data.data.user))
   localStorageProfileApi.setProfile(data.data.user)
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const addPhotoFetch = (photo: IPhoto) => {
 return async (dispatch: AppDispatch) => {
  photosApi.addPhoto(photo).then(() => {
   dispatch(getPhotosFetch())
  })
 }
}

export const addPhotoProfile = (photo: ILikesPhoto, id: string, profile: IProfile) => {
 return async (dispatch: AppDispatch) => {
  profileApi.addPhoto(id, [...profile.photos, photo]).then(() => {
   dispatch(addPhoto(photo))
   localStorageProfileApi.setProfile({ ...profile, photos: [photo, ...profile.photos] })
  })
 }
}


export const logoutProfileFetch = () => {
 return async (dispatch: AppDispatch) => {
  localStorageProfileApi.setProfile(null)
  dispatch(setProfile(null))
 }
}


export const addLikePhotoProfile = (photo: ILikesPhoto, likes: ILikesPhoto[]) => {
 return async (dispatch: AppDispatch) => {
  const profile = localStorageProfileApi.getProfile()
  profileApi.likePhoto(profile?.id ?? '', likes).then(() => {
   dispatch(addLikeProfilePhoto(photo))
   localStorageProfileApi.setProfile({
    dateAuth: profile?.dateAuth ?? new Date,
    id: profile?.id ?? '',
    status: profile?.status ?? '',
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
 return async (dispatch: AppDispatch) => {
  const profile = localStorageProfileApi.getProfile()
  profileApi.likePhoto(profile?.id ?? '', likes).then(() => {
   dispatch(unLikePhotoProfileState(photo))
   localStorageProfileApi.setProfile({
    dateAuth: profile?.dateAuth ?? new Date,
    id: profile?.id ?? '',
    status: profile?.status ?? '',
    email: profile?.email ?? '',
    nickname: profile?.nickname ?? '',
    photos: profile?.photos ?? [],
    likes: likes,
    img: profile?.img ?? '',
   })
  })
 }
}

export const getUsersFetch = () => {
 return async (dispatch: AppDispatch) => {
  profileApi.getUsers().then((data: IProfile[]) => {
   dispatch(setUsers(data))
   console.log(data);

  }).catch((error: Error | AxiosError) => dispatch(setErrorUser(error.message)))
 }
}

export const getUserFetch = (id: string) => {
 return async (dispatch: AppDispatch) => {
  profileApi.getProfile(id).then((data: IGetProfileResponse) => {
   dispatch(setUser(data.data[0]))

  }).catch((error: Error | AxiosError) => dispatch(setErrorUser(error.message)))
 }
}


export const setUpdateProfileFetch = (idAccount: string) => {
 return async (dispatch: AppDispatch) => {
  profileApi.getProfile(idAccount).then((data: IGetProfileResponse) => {
   dispatch(setProfile(data.data[0]))
   localStorageProfileApi.setProfile(data.data[0])

  }).catch((error: Error | AxiosError) => dispatch(setErrorUser(error.message)))
 }
}


export const setStatusFetch = (status: string, id: string, profile: IProfile) => {
 return async (dispatch: AppDispatch) => {
  profileApi.setStatus(status, id).then(() => {
   localStorageProfileApi.setProfile({
    dateAuth: profile?.dateAuth ?? new Date,
    id: profile?.id ?? '',
    status: status,
    email: profile?.email ?? '',
    nickname: profile?.nickname ?? '',
    photos: profile?.photos ?? [],
    likes: profile.likes,
    img: profile?.img ?? '',
   })
   dispatch(setProfile({
    dateAuth: profile?.dateAuth ?? new Date,
    id: profile?.id ?? '',
    status: status,
    email: profile?.email ?? '',
    nickname: profile?.nickname ?? '',
    photos: profile?.photos ?? [],
    likes: profile.likes,
    img: profile?.img ?? '',
   }))
  }).catch((error: Error | AxiosError) => dispatch(setErrorUser(error.message)))
 }
}