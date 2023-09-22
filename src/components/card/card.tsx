import { IPhoto } from '../../types/photosType'
import s from './card.module.scss'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
 photo: IPhoto
}

const Card: FC<IProps> = ({ photo }) => {
 return <div className={s.Card}>
  <NavLink to={`/photo/${photo.id}`}>
   <img src={photo.img} alt="" className={s.Card__image} />
  </NavLink>
 </div>
}

export default Card