import s from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import Header from '../header/header'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logoutProfileFetch, setProfileFetch } from '../../store/actions/profileAction'
import { getTipsActive, setIsAlertPhoto, setIsOpenSearch } from '../../store/slices/pageSlice'
import AlertPhoto from '../ui/alertPhoto/alertPhoto'

const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const isOpenSearch = useAppSelector(state => state.pageSlice.search.isOpen)
 const trips = useAppSelector(state => state.pageSlice.search.activeTips)

 const { isAlert, img } = useAppSelector(state => state.pageSlice.alertPhoto)

 useEffect(() => {
  dispatch(setProfileFetch())
  setIsFetch(true);
 }, [isFetch])
 return <>
  {isAlert ? <AlertPhoto img={img} setAlert={() => {dispatch(setIsAlertPhoto())}}/> : undefined}
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