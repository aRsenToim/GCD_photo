import s from './profileInfo.module.scss'
import {FC} from 'react'

interface IProps {
 id: string
 nickname: string
 photos: number
 likes: number
 img: string
 openPhoto?: () => void
}

const ProfileInfo: FC<IProps> = ({nickname, photos, likes, img, id, openPhoto}) => {
 return <div className={s.profile}>
  <div className={s.profile__info}>
   <div className={s.profile__img}>
    <img className={s.profile__banner} src="https://images.wallpaperscraft.ru/image/single/rasteniia_kolosia_nebo_202406_1920x1080.jpg" />
    <img className={s.profile__logo} onClick={openPhoto} src={img} />
    <h1 className={s.profile__idAccount}>{nickname}</h1>
   </div>
   <div className={s.profile__sections}>
    <div className={s.sections__item}>
     <h3>Published: </h3>
     <p>{photos}</p>
    </div>
    <div className={s.sections__item}>
     <h3>Liked: </h3>
     <p>{likes}</p>
    </div>
   </div>
  </div>
 </div>
}

export default ProfileInfo