import { FC, useState } from 'react'
import s from './CommentBlock.module.scss'
import { IComment } from '../../types/photosType'
import { NavLink } from 'react-router-dom'


interface IProps {
 Comment: IComment
 deleteComment: () => void
 isProfile: boolean
}

const CommentBlock: FC<IProps> = ({ Comment, deleteComment, isProfile }) => {
 const [isSettings, setIsSettings] = useState<boolean>()
 return <div className={s.Comment}>
  <div className={s.Comment__header}>
   <NavLink to={`/user/${Comment.autor.id}`} className='navlink'>
    <div className={s.Comment__autor}>
     <img className={s.Comment__image} src={Comment.autor.img} alt="" />
     <h2 className={s.Comment__title}>{Comment.autor.nickname}</h2>
    </div>
   </NavLink>
   <div className={s.Comment__settings}>
     <div className={s.Comment__button} onClick={() => {setIsSettings(isSettings ? false : true)}}>
      ...
     </div>
     {isProfile ? <>{isSettings ? <ul className={s.Comment__settingBlocks}>
      <li className={s.Comment__settingBlock} onClick={() => {deleteComment()}}>Удалить</li>
      <li className={s.Comment__settingBlock}>Изменить</li>
     </ul> : undefined}</> : undefined}
    </div>
  </div>
  <div className={s.Comment__content}>
   {Comment.content}
  </div>
 </div>
}


export default CommentBlock