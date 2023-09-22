import { useState } from "react"
import CreateComponent from "../components/createComponent/createComponent"
import { generatorNumberId } from "../helpers/generatorID"
import { AuthorizedProfile } from "../hoc/authorizedProfile"
import { addPhotoFetch } from "../store/actions/profileAction"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { Navigate } from "react-router-dom"




const Create = () => {
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const profile = useAppSelector(state => state.profileSlice.profile)
 const addPhotoSubmit = (img: string, name: string, description: string) => {
  if (profile) {
   dispatch(addPhotoFetch({
    id: generatorNumberId(),
    img, 
    name, 
    description,
    likes: [],
    autor: profile
   }, profile.id, profile))
  }
  setIsFetch(true)
 }

 if (isFetch) {
  return <Navigate to={`/`} />
 }

 return <AuthorizedProfile><CreateComponent addPhotoSubmit={addPhotoSubmit} img={profile?.img ?? ''} nickname={profile?.nickname ?? ''}/></AuthorizedProfile>
}

export default Create