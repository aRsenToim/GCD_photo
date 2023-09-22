import Catalog from "../components/catalog/catalog"
import {FC, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { getPhotosFetch } from "../store/actions/photosAction"


const Home: FC = () => {
 const photos = useAppSelector(state => state.photosSlice.photos)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (!photos) {
   dispatch(getPhotosFetch())
  }
 }, [photos])

 
 return <div>
  <Catalog photos={photos} title="Пины"/>
 </div>
}


export default Home