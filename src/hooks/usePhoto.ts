import { getPhotoFetch } from "../store/actions/photosAction";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from 'react'
import { setPhoto } from "../store/slices/photosSlice";

export function usePhoto(id: string) {
 const photo = useAppSelector(state => state.photosSlice.photo)
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)

 useEffect(() => {
  if (!isFetch) {
   dispatch(setPhoto(null))
   dispatch(getPhotoFetch(id))
   setIsFetch(true)
  }
 }, [photo])

 return photo
}