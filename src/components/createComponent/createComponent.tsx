import s from './createComponent.module.scss'
import { FC, useState } from 'react'

interface IProps {
 addPhotoSubmit: (img: string, name: string, description: string) => void
 img: string
 nickname: string
}

const CreateComponent: FC<IProps> = ({ addPhotoSubmit, img, nickname }) => {
 const [title, setTitle] = useState<string>('')
 const [description, setDescription] = useState<string>('')
 const [url, setUrl] = useState<string>("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ug8ZaPulAPsPhZ5M3d5rPG9TZtxPW0qaslaX7Ts&s")

 return <div className={s.Create}>
  <div className={s.Create__header}>
   <h2>Создать новый пин</h2>
   <button onClick={() => { addPhotoSubmit(url, title, description) }} className={s.Create__btn}>Сохранить</button>
  </div>
  <div className={s.Create__block}>
   <div className={s.Create__show}>
    <img src={url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ug8ZaPulAPsPhZ5M3d5rPG9TZtxPW0qaslaX7Ts&s"} className={s.Create__img} alt="" />
    <input type="text" className={s.Create__url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUrl(e.currentTarget.value) }} value={url} placeholder='Введите url изображения' />
   </div>
   <div className={s.Create__form}>
    <input className={s.Create__title} placeholder='Добавьте название' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value) }} value={title} type="text" />
    <div className={s.Create__account}>
     <img src={img} alt="" />
     <h3>{nickname}</h3>
    </div>
    <textarea placeholder='Добавьте описание' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.currentTarget.value) }} value={description} className={s.Create__description} />
   </div>
  </div>
 </div>
}


export default CreateComponent