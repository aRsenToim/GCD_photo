import { FC } from 'react'
import s from './comments.module.scss'
import CommentBlock from '../comment/CommentBlock'
import { IComment } from '../../types/photosType'


interface IProps {
 comments: IComment[]
 deleteComment: (idComment: string) => void
 isProfile: boolean
}

const Comments: FC<IProps> = ({ comments, deleteComment, isProfile}) => {
 return <div className={s.Comments}>
  <h2 className={s.Comments__title}>Комментарий: </h2>
  <div className={s.Comments__blocks}>
   <>{comments.map((comment) => <CommentBlock isProfile={isProfile} key={comment.idComment} deleteComment={() => {deleteComment(comment.idComment)}} Comment={comment} />)}</>
  </div>
 </div>
}

export default Comments