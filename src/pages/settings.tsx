import React, { FC, useEffect, useState } from 'react'
import Button from '../components/ui/button/button'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { logoutProfileFetch, setStatusFetch } from '../store/actions/profileAction'
import { Navigate } from 'react-router-dom'
import { setIsWindow, setWindowTitle } from '../store/slices/pageSlice'


const Settings: FC = () => {
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const profile = useAppSelector(state => state.profileSlice.profile)
 const [status, setStatus] = useState<string>('')

 if (isFetch) return <Navigate to={'/login'} />

 if (!profile) return <Navigate to={'/login'} />

 return <div>
  <h1>Настройки аккаунта:</h1>
  <div style={{ margin: "10px 0px" }}>
   <input type="text" value={status} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStatus(e.currentTarget.value) }} />
   <Button content='Изменить' isButton='regular' onclink={() => {
    if (status && status.length < 50) {
     dispatch(setStatusFetch(status, profile.id, profile))
     dispatch(setIsWindow(true))
     dispatch(setWindowTitle('Статус изменен'))
    }
   }} />
  </div>
  <Button isButton='red' content='Выйти из аккаунта' onclink={() => {
   dispatch(logoutProfileFetch())
   setIsFetch(true)
  }} />
 </div>
}

export default Settings