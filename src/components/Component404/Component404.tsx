import { FC } from 'react'
import s from './Component404.module.scss'
import { NavLink } from 'react-router-dom'




const Component404: FC = () => {
 return <div className={s.Component404}>
  <h1>404</h1>
  <p>Упс, что-то пошло не так. <NavLink className={s.Component404__link} to={'/'}>На главную страницу</NavLink></p>
 </div>
}


export default Component404