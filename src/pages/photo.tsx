import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { usePhoto } from '../hooks/usePhoto'
import PhotoCard from '../components/photoCard/photoCard'

const Photo: FC = () => {
 const { id } = useParams()
 const photo = usePhoto(id ?? '')
 console.log(photo);

 return <div>
  <PhotoCard name={photo?.name ?? ''} desc={photo?.description ?? ''} image={photo?.img ?? ''} nameAutor={photo?.autor.nickname ?? ''} descAutor={photo?.autor.photos.length ?? 0} avatarAutor={photo?.autor.img ?? ''}/>
 </div>
}

export default Photo