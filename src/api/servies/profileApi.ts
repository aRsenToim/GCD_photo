import axios from 'axios';
import { IRegistProfile, IRegist, ILoginProfile, ILogin, IAddPhotoProfileResponse, ILikeProfileResponse, ILikesPhoto } from '../../types/profileType'
import { IPhoto } from '../../types/photosType'
import { $api } from '../api'

export const profileApi = {
 async registProfile(user: IRegist): Promise<IRegistProfile> {
  const data = $api.post('signup', user)
  return data
 },
 async loginProfile(user: ILogin): Promise<ILoginProfile> {
  const data = $api.post('/login', user)
  return data
 },
 async addPhoto(id: string, photos: IPhoto[]): Promise<IAddPhotoProfileResponse> {
  const data = $api.patch(`/users/${id}`, {photos})
  return data
 },
 async likePhoto(id: string, likes: ILikesPhoto[]): Promise<ILikeProfileResponse>{
  const data = $api.patch(`/users/${id}`, {likes})
  return data
 }
}