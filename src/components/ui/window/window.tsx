import { FC } from 'react'
import s from './window.module.scss'


interface IProps {
 title: string
 closeWindow: () => void
}

const Window: FC<IProps> = ({ title, closeWindow }) => {
 return <div className={s.Window}>
  <p className={s.Window__text}>{title}</p>
  <button className={s.Window__button} onClick={closeWindow}>x</button>
 </div>

}

export default Window