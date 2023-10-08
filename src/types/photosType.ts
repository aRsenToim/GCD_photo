import { IProfile } from "./profileType"

export interface IPhoto {
 id: number
 img: string
 autor: IProfile
 name: string
 description: string 
 likes: string[]
}

export interface IGetPhotosResponse {
 data: IPhoto[]
}
export interface IGetPhotoResponse {
 data: IPhoto
}
export interface IAddPhotoProfileResponse{
 data: {}
}

export interface ILikehotoResponse{
 data: {}
}