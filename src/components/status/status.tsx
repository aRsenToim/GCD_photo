import { FC } from 'react'
import s from './status.module.scss'


interface IProps {
 title: string
}

const Status: FC<IProps> = ({title}) => {
 return <p className={s.status}>
  {title}
 </p>
}


export default Status