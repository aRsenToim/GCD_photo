import { FC, useEffect, useState } from 'react'
import Button from '../components/ui/button/button'
import { useAppDispatch } from '../store/hooks'
import { logoutProfileFetch } from '../store/actions/profileAction'
import { Navigate } from 'react-router-dom'


const Settings: FC = () => {
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)

 if (isFetch) return <Navigate to={'/login'} />

 return <div>
  <h1>Настройки аккаунта:</h1>
  <Button isButton='red' content='Выйти из аккаунта' onclink={() => {
   dispatch(logoutProfileFetch())
   setIsFetch(true)
  }} />
 </div>
}

export default Settings