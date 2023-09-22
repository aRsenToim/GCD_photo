import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { usePhoto } from '../hooks/usePhoto'

const Photo: FC = () => {
 const { id } = useParams()
 const photo = usePhoto(id ?? '')
 
 return <div>
  <img src={photo?.img} />
 </div>
}

export default Photo