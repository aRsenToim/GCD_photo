import { FC } from 'react'
import s from './userCard.module.scss'
import { NavLink } from 'react-router-dom'


interface IProps {
 title: string
 email: string
 image: string
 id: string
}

const UserCard: FC<IProps> = ({ title, email, id, image }) => {
 return <NavLink to={`/user/${id}`} className='navlink'>
  <div className={s.userCard}>
   <img className={s.userCard__img} src={image} alt="" />
   <div className={s.userCard__info}>
    <h1 className={s.userCard__title}>{title}</h1>
    <p className={s.userCard__emil}>{email}</p>
   </div>
  </div>
 </NavLink>
}


export default UserCard