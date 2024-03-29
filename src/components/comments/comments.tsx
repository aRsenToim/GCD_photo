import { FC } from 'react'
import s from './comments.module.scss'
import CommentBlock from '../comment/CommentBlock'
import { IComment } from '../../types/photosType'


interface IProps {
 comments: IComment[]
}

const Comments: FC<IProps> = ({ comments }) => {
 return <div className={s.Comments}>
  <h2 className={s.Comments__title}>Комментарий: </h2>
  <div className={s.Comments__blocks}>
   <>{comments.map((comment) => <CommentBlock key={comment.idComment} Comment={comment} />)}</>
  </div>
 </div>
}

export default Comments