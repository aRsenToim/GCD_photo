import { NavLink } from 'react-router-dom'
import s from './searchHelp.module.scss'
import { FC } from 'react'


interface IProps {
 tips: string[]
 setIsOpenSearch: () => void
}

const SearchHelp: FC<IProps> = ({ tips, setIsOpenSearch }) => {
 return <div className={s.SearchHelp}>
  <ul className={s.SearchHelp__navbar}>
   {tips.map((el: string) => <NavLink to={`/search/${el}`} onClick={setIsOpenSearch} key={el} className={s.SearchHelp__link}>
    <li className={s.SearchHelp__item}>
     {el}
    </li>
   </NavLink>)}
  </ul>
 </div>
}


export default SearchHelp