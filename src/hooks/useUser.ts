import {useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getUserFetch } from '../store/actions/profileAction'


export function useUser(id: string){
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const dispatch = useAppDispatch()
 const user = useAppSelector(state => state.usersSlice.user)

 useEffect(() => {
  if (!isFetch) {
   dispatch(getUserFetch(id))
  }
 }, [isFetch])


 return {user}
}