import { Navigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { FC, useEffect, useState } from 'react'
import { ILikesPhoto, IProfile } from "../types/profileType"
import ProfileHeader from "../components/profileHeader/profileHeader"
import ProfileInfo from "../components/profileInfo/profileInfo"
import Catalog from "../components/catalog/catalog"
import SwitchContent from "../components/switchContent/switchContent"
import { setIsMode } from "../store/slices/pageSlice"
import { IPhoto } from "../types/photosType"
import { getUserFetch } from "../store/actions/profileAction"
import { AuthorizedProfile } from "../hoc/authorizedProfile"

const Profile: FC = () => {
  const profile = useAppSelector(state => state.profileSlice.profile)
  const [isMode, setIsMode] = useState<string>('')
  const dispatch = useAppDispatch()
  const [content, setIsContent] = useState<ILikesPhoto[] | null>(null)


  useEffect(() => {
    if (isMode == 'Likes') {
      setIsContent(profile?.likes ?? [])
      return
    }
    setIsContent(profile?.photos ?? [])
  })

  return <AuthorizedProfile>
    {!profile ? undefined : <div style={{
      width: '1000px',
      margin: "0px auto"
    }}>
      <ProfileHeader id={profile.id ?? ''} />
      <ProfileInfo id={profile.id ?? ''} nickname={profile.nickname} img={profile.img} likes={profile.likes.length} photos={profile.photos.length} />
      {profile.id == profile?.id ? <SwitchContent arg={{
        title: "My publications",
        callback: () => { setIsMode('') }
      }} endArg={{
        title: "Likes",
        callback: () => { setIsMode('Likes') }
      }} /> : undefined}
      <Catalog photos={content} title={`Пины ${profile.nickname}`} />
    </div>}
  </AuthorizedProfile>
}

export default Profile