import { IGetPhotosResponse, IGetPhotoResponse, IDeletePhotoResponse, IPhoto, IAddPhotoProfileResponse, ILikehotoResponse } from '../../types/photosType'
import { IProfile } from '../../types/profileType'
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
 async addPhoto(photo: IPhoto): Promise<IAddPhotoProfileResponse> {
  const data = await $api.post('/photos', photo)
  return data
 },
 async likePhoto(id: number, likes: string[]): Promise<ILikehotoResponse> {
  const data = await $api.patch(`/photos/${id}`, { likes })
  return data
 },
 async deletePhoto(id: number): Promise<IDeletePhotoResponse> {
  const data = await $api.delete(`/photos/${id}`)
  return data
 },
 async searchPhoto(search: string): Promise<IGetPhotosResponse>{
  const data = await $api.get(`photos?name_like=${search}`)
  return data
 }
}