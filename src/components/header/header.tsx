import s from './header.module.scss'
import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProfile } from '../../types/profileType'
import Menu from '../menu/menu'
import SearchHelp from '../search__help/searchHelp'

interface IProps {
 profile: IProfile | null
 logout: () => void,
 isOpenSearch: boolean,
 setIsOpenSearch: (value: boolean) => void,
 getTripsActive: (value: string) => void
 tips: string[]
}

const Header: FC<IProps> = ({ profile, logout, isOpenSearch, setIsOpenSearch, getTripsActive, tips }) => {
 const [search, setSearch] = useState<string>('')



 return <header className={s.Header}>
  <div className={s.Header__left}>
   <NavLink to={'/'}><img src="/img/logo.svg" className={s.Header__logo} alt="" /></NavLink>
   <NavLink to={'/'} className={s.Header__button__active}>Главная</NavLink>
   <NavLink to={'/create'} className={s.Header__button}>Создать</NavLink>
   <div className={s.Header__searchBlock}>
    <input type="text" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     setSearch(e.currentTarget.value)
     if (search) {
      setIsOpenSearch(true)
      getTripsActive(e.currentTarget.value)
     }
    }} className={s.Header__search} placeholder='Search' />
    <button className={s.Header__searchBtn}>
     <NavLink to={`/search/${search}`}>
      <img src="/img/search.svg" alt="" />
     </NavLink>
    </button>
   </div>
  </div>
  {!profile ? <NavLink className={s.Header__link} to={'/login'}>Войти</NavLink> : <Menu logout={logout} image={profile.img} />}
  {isOpenSearch ? <SearchHelp setIsOpenSearch={() => setIsOpenSearch(false)} tips={tips} /> : undefined}
 </header>
}


export default Header 