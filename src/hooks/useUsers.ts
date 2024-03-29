import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUsersFetch } from "../store/actions/profileAction";




export function useUsers(){
 const dispatch = useAppDispatch()
 const {users} = useAppSelector(state => state.usersSlice)

 useEffect(() => {
  if (!users) {
   dispatch(getUsersFetch())
  }
 }, [])

 return {users}
}