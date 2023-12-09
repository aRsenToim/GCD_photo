import { IPhoto } from '../../types/photosType'
import { ILikesPhoto } from '../../types/profileType'
import Card from '../card/card'
import s from './catalog.module.scss'
import {FC} from 'react'

interface IProps {
 photos: ILikesPhoto[] | null
 title: string
}

const Catalog: FC<IProps> = ({photos, title}) => {
 return <div className={s.Catalog}>
  <h1 className={s.Catalog__title}>{title}:</h1>
  <div className={s.Catalog__cards}>
   {photos?.map((photo: ILikesPhoto) => <Card key={photo.id} id={photo.id} img={photo.img}/>)}
  </div>
 </div>
}

export default Catalog