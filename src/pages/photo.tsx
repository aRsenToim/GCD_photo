import { FC, useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { usePhoto } from '../hooks/usePhoto'
import PhotoCard from '../components/photoCard/photoCard'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { likePhotoFetch, unLikePhotoFetch } from '../store/actions/photosAction'
import { IProfile } from '../types/profileType'
import { addLikePhotoProfile, unLikePhotoProfile } from '../store/actions/profileAction'

const Photo: FC = () => {
 const { id } = useParams()
 const photo = usePhoto(id ?? '')
 const dispatch = useAppDispatch()
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [isLiked, setIsLiked] = useState<boolean>(false)

  useEffect(() => {
    if (photo && profile) {
      setIsLiked(photo.likes.includes(profile.id))
    }
  })

 return <div>
  {profile !== null ? <PhotoCard addLike={() => {
    if (profile && photo) {
      dispatch(likePhotoFetch(photo?.id,  [...photo?.likes, profile.id], profile.id)) 
      const ProfileLikePhoto = {
        id: photo?.id,
        img: photo?.img
      }
      dispatch(addLikePhotoProfile(ProfileLikePhoto, [...profile.likes, ProfileLikePhoto]))
    }
  }}
   unLike={() => {
    if (profile && photo) {
      const likes = [...photo?.likes]
      likes.splice(likes.indexOf(profile.id), 1)
      dispatch(unLikePhotoFetch(photo?.id, likes, profile.id)) 
      const ProfileLikePhoto = {
        id: photo?.id,
        img: photo?.img
      }
      const LikesProfile = [...profile.likes]
      LikesProfile.splice(LikesProfile.indexOf(ProfileLikePhoto), 1)
      dispatch(unLikePhotoProfile(ProfileLikePhoto, LikesProfile))
    }
   }}
   isLiked={isLiked}
   likes={photo?.likes ?? []} name={photo?.name ?? ''} desc={photo?.description ?? ''} image={photo?.img ?? ''} nameAutor={photo?.autor.nickname ?? ''} descAutor={photo?.autor.photos.length ?? 0} avatarAutor={photo?.autor.img ?? ''} /> : <div>test</div>}
 </div>
}

export default Photo