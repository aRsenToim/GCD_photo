import { Dispatch } from '@reduxjs/toolkit'
import { photosApi } from '../../api/servies/photosApi'
import { IComment, IGetPhotoResponse, IGetPhotosResponse, IPhoto } from '../../types/photosType'
import { addLikePhoto, setError, setPhoto, setPhotos, setPhotosSearch, unLikePhoto } from '../slices/photosSlice'
import { AxiosError } from 'axios'
import { IGetProfileResponse, ILikesPhoto, ILoginProfile, IProfile } from '../../types/profileType'
import { profileApi } from '../../api/servies/profileApi'
import { deletePhoto, setProfile } from '../slices/profileSlice'
import { setUpdateProfileFetch } from './profileAction'

export const getPhotosFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.getPhotos().then((data: IGetPhotosResponse) => {
   dispatch(setPhotos(data.data.reverse()))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const getPhotoFetch = (id: string) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.getPhoto(id).then((data: IGetPhotoResponse) => {
   dispatch(setPhoto(data.data))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const setCommentFetch = (id: number, comments: IComment[]) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.setComment(id, comments).then((data) => {
   dispatch(getPhotoFetch(`${id}`))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const likePhotoFetch = (id: number, likes: string[], idProfile: string) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.likePhoto(id, likes).then(() => {
   dispatch(addLikePhoto(idProfile))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const unLikePhotoFetch = (id: number, likes: string[], idProfile: string) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.likePhoto(id, likes).then(() => {
   dispatch(unLikePhoto(idProfile))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}

export const deletePhotoFetch = (idPhoto: number, idAccount: string, photos: ILikesPhoto[], photo: ILikesPhoto) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.deletePhoto(idPhoto).then(() => {
   dispatch(getPhotosFetch())
  })
  let photosCopy = [...photos]
  photosCopy.splice(photosCopy.indexOf(photo), 1)
  profileApi.deletePhoto(photosCopy, idAccount).then(() => {
   dispatch(deletePhoto(photo))
   dispatch(setUpdateProfileFetch(idAccount))
  })
 }
}

export const searchPhoto = (search: string) => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.searchPhoto(search).then((data: IGetPhotosResponse) => {
   dispatch(setPhotosSearch(data.data))
  }).catch((err: Error | AxiosError) => dispatch(setError(err.message)))
 }
}