import { Navigate } from "react-router-dom"
import LoginComponent from "../components/login/loginComponent"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {ILogin} from '../types/profileType'
import { loginProfileFetch } from "../store/actions/profileAction"

const Login = () => {
 const profile = useAppSelector(state => state.profileSlice.profile)
 const dispatch = useAppDispatch()
 if (profile) {
  return <Navigate to={`/profile`} />
 }
 const SumbmitLogin = (email: string, password: string) => {
  dispatch(loginProfileFetch({email, password}))
 }
 return <LoginComponent SumbmitLogin={SumbmitLogin}/>
}

export default Login