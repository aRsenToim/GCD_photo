import s from './photoCard.module.scss'
import { FC } from 'react'

interface IProps {
 name: string
 desc: string
 image: string
 avatarAutor: string
 nameAutor: string
 descAutor: number
 likes: string[]
 addLike: () => void
 unLike: () => void
 isLiked: boolean,
}


const PhotoCard: FC<IProps> = ({ name, desc, image, avatarAutor, nameAutor, descAutor, likes, addLike, unLike, isLiked }) => {
 return <div className={s.PhotoCard}>
  <div className={s.PhotoCard__header}>
   <button className={s.PhotoCard__delete}>

   </button>
  </div>
  <img className={s.PhotoCard__image} src={image} alt="" />
  <div className={s.PhotoCard__info}>
   <h2 className={s.PhotoCard__title}>{name}</h2>
   <p className={s.PhotoCard__desc}>{desc}</p>
   <div className={s.PhotoCard__profile}>
    <img src={avatarAutor} alt="" />
    <div className={s.profile__info}>
     <h4>{nameAutor}</h4>
     <p>{descAutor} photos</p>
    </div>
   </div>
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