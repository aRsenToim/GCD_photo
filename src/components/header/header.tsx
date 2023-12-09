import s from './header.module.scss'
import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProfile } from '../../types/profileType'
import Menu from '../menu/menu'

interface IProps {
 profile: IProfile | null
 logout: () => void
}

const Header: FC<IProps> = ({ profile, logout }) => {

 return <header className={s.Header}>
  <div className={s.Header__left}>
   <NavLink to={'/'}><img src="/img/logo.svg" className={s.Header__logo} alt="" /></NavLink>
   <NavLink to={'/'} className={s.Header__button__active}>Главная</NavLink>
   <NavLink to={'/create'} className={s.Header__button}>Создать</NavLink>
   <input type="text" className={s.Header__search} placeholder='Search' />
  </div>
  {!profile ? <NavLink className={s.Header__link} to={'/login'}>Войти</NavLink> : <Menu logout={logout} image={profile.img}/>}
 </header>
}


export default Header 