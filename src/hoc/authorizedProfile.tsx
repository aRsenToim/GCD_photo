import { FC, useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import { Navigate } from 'react-router-dom'

interface IProps {
 children?: React.ReactNode
};

export const AuthorizedProfile: FC<IProps> = ({ children }) => {
 const profile = useAppSelector(state => state.profileSlice.profile)

 if (!profile) {
  return <Navigate to={`/login`} />
 }

 return <>
  {children}
 </>
}