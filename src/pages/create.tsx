import { useState } from "react"
import CreateComponent from "../components/createComponent/createComponent"
import { generatorNumberId } from "../helpers/generatorID"
import { AuthorizedProfile } from "../hoc/authorizedProfile"
import { addPhotoFetch, addPhotoProfile } from "../store/actions/profileAction"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { Navigate } from "react-router-dom"




const Create = () => {
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const profile = useAppSelector(state => state.profileSlice.profile)
 const addPhotoSubmit = (img: string, name: string, description: string) => {
  const idPhoto = generatorNumberId()
  if (profile) {
   dispatch(addPhotoFetch({
    id: idPhoto,
    img, 
    name, 
    description,
    likes: [],
    autor: {
     img: profile.img,
     nickname: profile.nickname,
     id: profile.id
    },
    comments: []
   }))
   dispatch(addPhotoProfile({
    img,
    id: idPhoto
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