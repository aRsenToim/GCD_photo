import { FC } from 'react'
import s from './button.module.scss'


interface IProps {
 content: string
 isButton: string
 onclink: () => void
}



const Button: FC<IProps> = ({ content, isButton, onclink }) => {
 switch (isButton) {
  case 'red':
   return <button onClick={onclink} className={s.Button__red}>{content}</button>
   break;
  case 'green':
   return <button onClick={onclink} className={s.Button__green}>{content}</button>
   break;
  default:
   return <button onClick={onclink} >{content}</button>
   break;
 }
}


export default Button