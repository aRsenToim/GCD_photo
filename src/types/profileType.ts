

export interface IProfile{
 id: string
 email: string
 nickname: string
 photos: ILikesPhoto[]
 likes: ILikesPhoto[]
 img: string
}


export interface ILikesPhoto {
 id: number
 img: string
}

export interface IRegist{
 id: string
 password: string
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