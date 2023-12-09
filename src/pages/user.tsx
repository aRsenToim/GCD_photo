import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useParams } from "react-router-dom"
import { getUserFetch } from "../store/actions/profileAction"
import ProfileHeader from "../components/profileHeader/profileHeader"
import ProfileInfo from "../components/profileInfo/profileInfo"
import Catalog from "../components/catalog/catalog"



const UserPage: FC = () => {
 const dispatch = useAppDispatch()
 const { id } = useParams()
 const user = useAppSelector(state => state.usersSlice.user)

 
 useEffect(() => {
  if (!user && id) {
   dispatch(getUserFetch(id))
  }else if(user?.id !== id && id){
   dispatch(getUserFetch(id))
  }
 })


 return <>{user ? <div style={{
  width: '1000px',
  margin: "0px auto"
 }}>
  <ProfileHeader id={user.id ?? ''} />
  <ProfileInfo id={user.id ?? ''} nickname={user.nickname} img={user.img} likes={user.likes.length} photos={user.photos.length} />
  <Catalog photos={user.photos} title={`Пины ${user.nickname}`} />
 </div> : <>test</>}</>
}


export default UserPage