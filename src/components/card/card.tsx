import { IPhoto } from '../../types/photosType'
import s from './card.module.scss'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
 id: number
 img: string
}

const Card: FC<IProps> = ({ id, img }) => {
 return <div className={s.Card}>
  <NavLink to={`/photo/${id}`}>
   <img src={img} alt="" className={s.Card__image} />
  </NavLink>
 </div>
}

export default Card