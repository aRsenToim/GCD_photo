import { Navigate } from "react-router-dom"
import RegistCompoenent from "../components/regist/registCompoenent"
import { generatorId } from "../helpers/generatorID"
import { registProfileFetch } from "../store/actions/profileAction"
import { useAppDispatch, useAppSelector } from "../store/hooks"


const Regist = () => {
 const dispatch = useAppDispatch()
 const profile = useAppSelector(state => state.profileSlice.profile)
 const SumbmitRegist = (password: string, email: string, nickname: string, img: string) => {
  dispatch(registProfileFetch({
   dateAuth: new Date,
   id: generatorId(),
   password,
   status: 'status',
   email,
   nickname,
   photos: [],
   likes: [],
   img,
  }))
 } 
 if (profile) {
  return <Navigate to={`/profile`} />
 }

 return <RegistCompoenent sumbmitRegist={SumbmitRegist} />
}

export default Regist