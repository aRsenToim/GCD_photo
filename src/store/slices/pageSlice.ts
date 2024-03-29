import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IInitialState {
 isMode: string,
 isOpenAlertIsBoolean: {
  isOpen: boolean,
  fun: Function | undefined
 },
 alertPhoto: {
  img: string
  isAlert: boolean
 }
 search: {
  isOpen: boolean
  tips: string[]
  activeTips: string[]
 },
 window: {
  isWindow: boolean,
  title: string,
 }
}
const initialState: IInitialState = {
 isMode: "",
 isOpenAlertIsBoolean: {
  isOpen: false,
  fun: undefined
 },
 search: {
  isOpen: false,
  tips: [
   'IT',
   'programming',
   "code",
   "hacking",
   "прогроммирование",
   "кодинг",
   "айти"
  ],
  activeTips: []
 },
 alertPhoto: {
  img: '',
  isAlert: false
 },
 window: {
  isWindow: false,
  title: ''
 }
}

const pageSlice = createSlice({
 name: "pageSlice",
 initialState,
 reducers: {
  setIsMode(state, action: PayloadAction<string>) {
   state.isMode = action.payload
  },
  setIsOpenAlertIsBoolean(state) {
   state.isOpenAlertIsBoolean.isOpen = state.isOpenAlertIsBoolean ? false : true
  },
  setIsFunAlertIsBoolean(state, action: PayloadAction<Function>) {
   state.isOpenAlertIsBoolean.fun = action.payload
  },
  setIsOpenSearch(state, action: PayloadAction<boolean>) {
   state.search.isOpen = action.payload
  },
  getTipsActive(state, action: PayloadAction<string>) {
   if (!/\S/.test(action.payload)) {
    state.search.activeTips = []
    return
   }
   state.search.activeTips = state.search.tips.filter((item: string) => {
    return item.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
   })
  },
  setIsAlertPhoto(state) {
   state.alertPhoto.isAlert = state.alertPhoto.isAlert ? false : true
  },
  setIsImageAlertPhoto(state, action: PayloadAction<string>) {
   state.alertPhoto.img = action.payload
  },
  setIsWindow(state, action: PayloadAction<boolean>) {
   state.window.isWindow = action.payload
  },
  setWindowTitle(state, action: PayloadAction<string>){
   state.window.title = action.payload
  }
 }
})


export default pageSlice.reducer
export const { setIsMode, setIsWindow, setWindowTitle, getTipsActive, setIsOpenSearch, setIsImageAlertPhoto, setIsAlertPhoto, setIsOpenAlertIsBoolean, setIsFunAlertIsBoolean } = pageSlice.actions