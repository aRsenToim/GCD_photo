import { IProfile } from "./profileType"

export interface IPhoto {
 id: number
 img: string
 autor: IProfile
 name: string
 description: string 
 likes: IProfile[]
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