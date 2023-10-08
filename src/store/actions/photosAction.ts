import { Dispatch } from '@reduxjs/toolkit'
import { photosApi } from '../../api/servies/photosApi'
import { IGetPhotoResponse, IGetPhotosResponse } from '../../types/photosType'
import { addLikePhoto, setError, setPhoto, setPhotos, unLikePhoto } from '../slices/photosSlice'
import {AxiosError} from 'axios'
import { IProfile } from '../../types/profileType'

export const getPhotosFetch = () => {
 return async (dispatch: Dispatch<any>) => {
  photosApi.getPhotos().then((data: IGetPhotosResponse) => {
   dispatch(setPhotos(data.data))
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