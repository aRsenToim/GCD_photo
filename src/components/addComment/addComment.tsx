import { FC, useState } from 'react'
import s from './addComment.module.scss'
import Button from '../ui/button/button'

interface IProps {
 img: string
 addComment: () => void
 commentInput: string
 setCommentInput: (value: string) => void
}

const AddComment: FC<IProps> = ({ img, addComment, commentInput, setCommentInput }) => {
 return <div className={s.AddComment}>
  <img src={img} className={s.AddComment__image} alt="" />
  <div className={s.AddComment__form}>
   <input type="text" className={s.AddComment__input} value={commentInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCommentInput(e.currentTarget.value) }} />
   <div className={s.AddComment__buttons}>
    <Button content='Отмена' isButton='' onclink={() => { setCommentInput('') }} />
    <Button content='Добавить комментарий' isButton='blue' onclink={() => {
     addComment()
     setCommentInput('')
     }} />
   </div>
  </div>
 </div>
}


export default AddComment