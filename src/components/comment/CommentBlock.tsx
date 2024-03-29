import { FC } from 'react'
import s from './CommentBlock.module.scss'
import { IComment } from '../../types/photosType'
import { NavLink } from 'react-router-dom'


interface IProps {
 Comment: IComment
}

const CommentBlock: FC<IProps> = ({ Comment }) => {
 return <div className={s.Comment}>
  <NavLink to={`/user/${Comment.autor.id}`} className='navlink'>
   <div className={s.Comment__autor}>
    <img className={s.Comment__image} src={Comment.autor.img} alt="" />
    <h2 className={s.Comment__title}>{Comment.autor.nickname}</h2>
   </div>
  </NavLink>
  <div className={s.Comment__content}>
   {Comment.content}
  </div>
 </div>
}


export default CommentBlock