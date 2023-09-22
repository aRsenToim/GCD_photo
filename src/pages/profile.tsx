import { Navigate, useParams } from "react-router-dom"
import { useAppSelector } from "../store/hooks"
import {FC, useEffect, useState} from 'react'
import { IProfile } from "../types/profileType"
import ProfileHeader from "../components/profileHeader/profileHeader"
import ProfileInfo from "../components/profileInfo/profileInfo"
import Catalog from "../components/catalog/catalog"

const Profile: FC = () => {
 const [isUser, setIsUser] = useState<IProfile | null>(null)
 const profile = useAppSelector(state => state.profileSlice.profile)
 const { id } = useParams()

 useEffect(() => {
  if (id == profile?.id) {
   setIsUser(profile)
  }else {
  }
 }, [])

 return <>
  {!profile ? <Navigate to='/login' /> : <div style={{
    width: '1000px',
    margin: "0px auto"
  }}>
   <ProfileHeader id={profile.id}/>
   <ProfileInfo id={profile.id} nickname={profile.nickname} img={profile.img} likes={profile.likes.length} photos={profile.photos.length}/>
   <Catalog photos={profile.photos} title={`Пины ${profile.nickname}`}/>
 </div>}
 </>
}

export default Profile