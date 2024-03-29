import s from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import Header from '../header/header'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logoutProfileFetch, setProfileFetch } from '../../store/actions/profileAction'
import { getTipsActive, setIsAlertPhoto, setIsOpenSearch, setIsWindow } from '../../store/slices/pageSlice'
import AlertPhoto from '../ui/alertPhoto/alertPhoto'
import Window from '../ui/window/window'

const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const isOpenSearch = useAppSelector(state => state.pageSlice.search.isOpen)
 const trips = useAppSelector(state => state.pageSlice.search.activeTips)
 const windowTitle = useAppSelector(state => state.pageSlice.window.title)
 const isWindow = useAppSelector(state => state.pageSlice.window.isWindow)

 const { isAlert, img } = useAppSelector(state => state.pageSlice.alertPhoto)

 useEffect(() => {
  dispatch(setProfileFetch())
  setIsFetch(true);
 }, [isFetch])
 return <>
  {isAlert ? <AlertPhoto img={img} setAlert={() => { dispatch(setIsAlertPhoto()) }} /> : undefined}
  {isWindow ? <Window title={windowTitle} closeWindow={() => { dispatch(setIsWindow(false)) }} /> : undefined}
  <div className={s.Layout}>
   <Header
    isOpenSearch={isOpenSearch} setIsOpenSearch={(value: boolean) => { dispatch(setIsOpenSearch(value)) }}
    tips={trips} getTripsActive={(value: string) => { dispatch(getTipsActive(value)) }}
    profile={profile} logout={() => { dispatch(logoutProfileFetch()) }} />
   <Outlet />
  </div>
 </>
}

export default Layout