import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { searchPhoto } from "../store/actions/photosAction"
import Catalog from "../components/catalog/catalog"


const Search: FC = () => {
 const { id } = useParams()
 const photosSearch = useAppSelector(state => state.photosSlice.photosSearch)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (!photosSearch && id) {
   dispatch(searchPhoto(id))
  }else if(id){
   dispatch(searchPhoto(id))
  }
 }, [id])
  
 return <div>
  <Catalog title={`Результат поиска ${id}`} photos={photosSearch}/>
 </div>
}


export default Search