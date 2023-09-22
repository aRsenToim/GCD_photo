import { Dispatch } from '@reduxjs/toolkit'
import { photosApi } from '../../api/servies/photosApi'
import { IGetPhotoResponse, IGetPhotosResponse } from '../../types/photosType'
import { setError, setPhoto, setPhotos } from '../slices/photosSlice'
import {AxiosError} from 'axios'

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