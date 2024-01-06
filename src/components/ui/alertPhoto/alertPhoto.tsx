import { FC } from 'react'
import s from './alertPhoto.module.scss'

interface IProps{
 img: string
 setAlert: () => void
}

const AlertPhoto: FC<IProps> = ({img, setAlert}) => {
 return <>
  <div className={s.Shadow} onClick={setAlert}></div>
  <div className={s.AlertPhoto}>
   <img className={s.AlertPhoto__image} src={img} alt="" />
  </div>
 </>
}


export default AlertPhoto