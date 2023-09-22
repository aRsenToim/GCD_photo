import { IGetPhotosResponse, IGetPhotoResponse, IPhoto, IAddPhotoProfileResponse } from '../../types/photosType'
import { $api } from '../api'

export const photosApi = {
 async getPhotos(): Promise<IGetPhotosResponse> {
  const data = await $api.get('/photos')
  return data
 },
 async getPhoto(id: string): Promise<IGetPhotoResponse> {
  const data = await $api.get(`/photos/${id}`)
  return data
 },
 async addPhoto(photo: IPhoto): Promise<IAddPhotoProfileResponse>{
  const data = await $api.post('/photos', photo)
  return data
 }
}