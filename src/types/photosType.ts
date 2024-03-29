import { IProfile } from "./profileType"

export interface IComment {
 idComment: string
 idPhoto: number
 autor: IPhotoAutor
 content: string
}

export interface IPhoto {
 id: number
 img: string
 autor: IPhotoAutor
 name: string
 description: string 
 likes: string[]
 comments: IComment[]
}

export interface IPhotoAutor {
 img: string
 nickname: string
 id: string
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
export interface IDeletePhotoResponse{
 data: {}
}
