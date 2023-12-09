import { NavLink } from 'react-router-dom'
import s from './menu.module.scss'
import { FC, useState } from 'react'

interface IProps {
 image: string
 logout: () => void
}

const Menu: FC<IProps> = ({ image, logout }) => {
 const [isOpen, setIsOpen] = useState(false)


 return <div className={s.Menu}>
  {isOpen ? <ul className={s.Menu__conteiner} onDoubleClick={() => {setIsOpen(false)}}>
   <li className={s.Menu__item}>
    <NavLink to={`/profile`}><img src={image} className={s.Menu__profile} alt="" /></NavLink>
   </li>
   <li className={s.Menu__item}>
    <NavLink className={s.Menu__text} to={`/settings`}>Настройки</NavLink>
   </li>
   <li className={s.Menu__item} onClick={() => {logout()}}>
    Выйти
   </li>
  </ul> : <img src={image} onClick={() => { setIsOpen(true) }} className={s.Menu__profile} alt="" />}
 </div>
}


export default Menu