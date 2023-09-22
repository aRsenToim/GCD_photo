import { IPhoto } from '../../types/photosType'
import Card from '../card/card'
import s from './catalog.module.scss'
import {FC} from 'react'

interface IProps {
 photos: IPhoto[] | null
 title: string
}

const Catalog: FC<IProps> = ({photos, title}) => {
 return <div className={s.Catalog}>
  <h1 className={s.Catalog__title}>{title}:</h1>
  <div className={s.Catalog__cards}>
   {photos?.map((photo: IPhoto) => <Card key={photo.id} photo={photo}/>)}
  </div>
 </div>
}

export default Catalog