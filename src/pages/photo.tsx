import { FC, useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { usePhoto } from '../hooks/usePhoto'
import PhotoCard from '../components/photoCard/photoCard'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { deletePhotoFetch, likePhotoFetch, setCommentFetch, unLikePhotoFetch } from '../store/actions/photosAction'
import { addLikePhotoProfile, unLikePhotoProfile } from '../store/actions/profileAction'
import { ILikesPhoto } from '../types/profileType'
import { setIsFunAlertIsBoolean } from '../store/slices/pageSlice'
import { generatorId } from '../helpers/generatorID'
import { IComment } from '../types/photosType'

const Photo: FC = () => {
  const { id } = useParams()
  const photo = usePhoto(id ?? '')
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profileSlice.profile)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [commentInput, setCommentInput] = useState<string>('')

  useEffect(() => {
    if (photo && profile) {
      setIsLiked(photo.likes.includes(profile.id))
    }
  })

  const deleteComment = (idComment: string) => {
    const copyComments = JSON.parse(JSON.stringify(photo?.comments))
    const index = copyComments?.indexOf(copyComments?.find((comment: IComment) => comment.idComment == idComment) ?? {
      idComment: '',
      idPhoto: 1,
      autor: {
        img: '',
        nickname: '',
        id: ''
      },
      content: ''
    })

    copyComments?.splice(index, 1)

    dispatch(setCommentFetch(photo?.id ?? 0, copyComments ?? []))
  }


  if (isDelete) {
    return <Navigate to={'/'} />
  }


  return <div>
    {profile !== null && photo ? <PhotoCard
      isProfile={photo.autor.id == profile.id}
      deleteComment={(idComment: string) => { deleteComment(idComment) }}
      profileAvatar={profile.img}
      commentInput={commentInput}
      setCommentInput={setCommentInput}
      addComment={() => {
        if (commentInput) {
          dispatch(setCommentFetch(photo?.id, [...photo?.comments, {
            idComment: `${generatorId()}`,
            idPhoto: photo?.id,
            autor: {
              img: profile.img,
              nickname: profile.nickname,
              id: profile.id
            },
            content: commentInput
          }]))
        }
      }}
      comments={photo?.comments ?? []}
      deletePhoto={() => {
        dispatch(deletePhotoFetch(id ? +id : 0, profile.id, profile.photos, { id: photo?.id ?? 0, img: photo?.img ?? '' }))
        setIsDelete(true)
      }}
      idUser={profile.id}
      addLike={() => {
        if (profile && photo) {
          dispatch(likePhotoFetch(photo?.id, [...photo?.likes, profile.id], profile.id))
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
      isLiked={isLiked} idAutor={photo?.autor.id ?? ''}
      likes={photo?.likes ?? []} name={photo?.name ?? ''} desc={photo?.description ?? ''} image={photo?.img ?? ''} nameAutor={photo?.autor.nickname ?? ''} avatarAutor={photo?.autor.img ?? ''} /> : <div>test</div>}
  </div>
}

export default Photo