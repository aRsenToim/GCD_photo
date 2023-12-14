import { FC } from 'react'
import s from './alertISBoolean.module.scss'
import Button from '../button/button'


interface IProps {
 isExit: () => void,
 isClick: Function
}

const AlertISBoolean: FC<IProps> = ({isExit, isClick}) => {
 return <>
  <div className={s.Shadow}></div>
  <div className={s.AlertISBoolean}>
   <div className={s.AlertISBoolean__header}>
    <h2>Удалить запись?</h2>
    <button onClick={isExit} className={s.AlertISBoolean__exit}> 
     <img src="/img/exit.png" alt="" />
    </button>
   </div>
   <div className={s.AlertISBoolean__content}>
    <Button onclink={() => {isClick()}} content='Удалить' isButton='red'/>
    <Button onclink={isExit} content='Отмена'  isButton='green'/>
   </div>
  </div>
 </>
}


export default AlertISBoolean