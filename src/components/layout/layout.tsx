import s from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import Header from '../header/header'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logoutProfileFetch, setProfileFetch } from '../../store/actions/profileAction'

const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [isFetch, setIsFetch] = useState<boolean>(false)
 useEffect(() => {
  dispatch(setProfileFetch())
  setIsFetch(true);
 }, [isFetch])
 return <div className={s.Layout}>
  <Header profile={profile} logout={() => {dispatch(logoutProfileFetch())}} />
  <Outlet />
 </div>
}

export default Layout