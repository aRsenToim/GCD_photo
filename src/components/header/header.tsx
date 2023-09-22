import s from './header.module.scss'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { IProfile } from '../../types/profileType'

interface IProps {
 profile: IProfile | null
}

const Header: FC<IProps> = ({ profile }) => {
 return <header className={s.Header}>
  <div className={s.Header__left}>
   <NavLink to={'/'}><img src="/img/logo.svg" className={s.Header__logo} alt="" /></NavLink>
   <NavLink to={'/'} className={s.Header__button__active}>Главная</NavLink>
   <NavLink to={'/create'} className={s.Header__button}>Создать</NavLink>
   <input type="text" className={s.Header__search} placeholder='Search' />
  </div>
  {!profile ? <NavLink className={s.Header__link} to={'/login'}>Войти</NavLink> : <NavLink to={`/profile/${profile.id}`}><img src={profile.img} className={s.Header__profile} alt="" /></NavLink>}
 </header>
}


export default Header