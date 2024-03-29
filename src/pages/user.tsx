import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { Navigate, useParams } from "react-router-dom"
import { getUserFetch } from "../store/actions/profileAction"
import ProfileHeader from "../components/profileHeader/profileHeader"
import ProfileInfo from "../components/profileInfo/profileInfo"
import Catalog from "../components/catalog/catalog"
import { setIsAlertPhoto, setIsImageAlertPhoto, setIsOpenSearch } from "../store/slices/pageSlice"



const UserPage: FC = () => {
 const dispatch = useAppDispatch()
 const { id } = useParams()
 const user = useAppSelector(state => state.usersSlice.user)
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [isProfile, setIsProfile] = useState(false)

 useEffect(() => {
  if (!user && id) {
   dispatch(getUserFetch(id))
  } else if (user?.id !== id && id) {
   dispatch(getUserFetch(id))
  }
 })

 useEffect(() => {
  if (profile?.id == id) {
   setIsProfile(true)
  }
 })

 if (isProfile) {
  return <Navigate to={`/profile`} />
 }

 return <>{user ? <div style={{
  width: '1000px',
  margin: "0px auto"
 }}>
  <ProfileHeader id={user.id ?? ''} />
  <ProfileInfo dateAuth={`${user.dateAuth}`} openPhoto={() => {
   dispatch(setIsImageAlertPhoto(user.img))
   dispatch(setIsAlertPhoto())
  }} id={user.id ?? ''} nickname={user.nickname} status={user.status} img={user.img} likes={user.likes.length} photos={user.photos.length} />
  <Catalog photos={user.photos} title={`Пины ${user.nickname}`} />
 </div> : <>test</>}</>
}


export default UserPage