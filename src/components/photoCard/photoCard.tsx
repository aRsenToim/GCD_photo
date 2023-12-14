import { NavLink } from 'react-router-dom'
import s from './photoCard.module.scss'
import { FC, useEffect, useState } from 'react'
import { ILikesPhoto } from '../../types/profileType'

interface IProps {
 name: string
 desc: string
 idAutor: string
 image: string
 avatarAutor: string
 nameAutor: string
 likes: string[]
 addLike: () => void
 unLike: () => void
 isLiked: boolean,
 idUser: string,
 deletePhoto: () => void
}


const PhotoCard: FC<IProps> = ({ name, idUser, desc, image, deletePhoto, avatarAutor, nameAutor, idAutor, likes, addLike, unLike, isLiked }) => {
 const [isUrl, setIsUrl] = useState<string>('')
 const [isOpenSetting, setIsOpenSetting] = useState<boolean>(false)


 useEffect(() => {
  if (idAutor == idUser) {
   setIsUrl('/profile')
  } else {
   setIsUrl(`/user/${idAutor}`)
  }
 })
 return <div className={s.PhotoCard}>
  <img className={s.PhotoCard__image} src={image} alt="" />
  <div className={s.PhotoCard__info}>
   {idUser == idAutor ? <div className={s.PhotoCard__header}>
    <button className={s.PhotoCard__btnSetting} onClick={() => { setIsOpenSetting(isOpenSetting ? false : true) }}>...</button>
    {isOpenSetting ? <ul className={s.PhotoCard__navSettings}>
     <li onClick={() => {
      deletePhoto()
     }}>Удалить</li>
     <li>Изменить</li>
    </ul> : undefined}
   </div> : undefined}
   <h2 className={s.PhotoCard__title}>{name}</h2>
   <p className={s.PhotoCard__desc}>{desc}</p>
   <NavLink to={isUrl} className='navlink'>
    <div className={s.PhotoCard__profile}>
     <img src={avatarAutor} alt="" />
     <div className={s.profile__info}>
      <h4>{nameAutor}</h4>
      <p>test</p>
     </div>
    </div>
   </NavLink>
   <div className={s.PhotoCard__panel}>
    {isLiked ? <button onClick={() => { unLike() }}>
     {likes.length} unLike
     <img src="/img/love.svg" alt="" />
    </button> : <button onClick={() => { addLike() }}>
     {likes.length} like
     <img src="/img/love.svg" alt="" />
    </button>}
   </div>
  </div>
 </div>
}

export default PhotoCard