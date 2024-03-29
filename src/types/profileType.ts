

export interface IProfile{
 id: string
 email: string
 nickname: string
 status: string
 photos: ILikesPhoto[]
 likes: ILikesPhoto[]
 img: string
 dateAuth: Date
}


export interface ILikesPhoto {
 id: number
 img: string
}

export interface IRegist{
 dateAuth: Date
 id: string
 password: string
 status: string
 email: string
 nickname: string
 photos: ILikesPhoto[]
 likes: ILikesPhoto[]
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

export interface ILikeProfileResponse {
 data: {}
}
export interface IGetProfileResponse {
 data: IProfile[]
}