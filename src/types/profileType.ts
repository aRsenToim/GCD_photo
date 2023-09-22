import { IPhoto } from "./photosType"


export interface IProfile{
 id: string
 email: string
 nickname: string
 photos: IPhoto[]
 likes: IPhoto[]
 img: string
}

export interface IRegist{
 id: string
 password: string
 email: string
 nickname: string
 photos: IPhoto[]
 likes: IPhoto[]
 img: string
}

export interface ILogin {
 email: string
 password: string
}


//api

export interface IRegistProfile{
 data: {}
}


export interface ILoginProfile{
 data: {
  user: IProfile
 }
}
export interface IAddPhotoProfileResponse {
 data: {}
}