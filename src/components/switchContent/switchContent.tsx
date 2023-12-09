import { FC, useState } from 'react'
import s from './switchContent.module.scss'


interface IProps {
 arg: {
  title: string
  callback: () => void
 }
 endArg: {
  title: string
  callback: () => void
 }
}

const SwitchContent: FC<IProps> = ({ arg, endArg }) => {
 const [isButton, setIsButton] = useState<boolean>(true)

 return <div className={s.SwitchContent}>
  {isButton ? <>
   <button className={s.SwitchContent__buttonActive}>{arg.title}</button>
   <button className={s.SwitchContent__button} onClick={() => {
    setIsButton(false)
    endArg.callback()
   }}>{endArg.title}</button>
  </> : <>
   <button className={s.SwitchContent__button} onClick={() => {
    setIsButton(true)
    arg.callback()
   }}>{arg.title}</button>
   <button className={s.SwitchContent__buttonActive}>{endArg.title}</button>
  </>}
 </div>
}

export default SwitchContent