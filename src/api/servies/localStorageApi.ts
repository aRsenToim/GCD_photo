import { IProfile } from '../../types/profileType'

export const localStorageProfileApi = {
 key: "profileGCD",
 setProfile(profile: IProfile) {
  localStorage.setItem(this.key, JSON.stringify(profile))
 },
 getProfile(): IProfile | null {
  const data = localStorage.getItem(this.key)
  if (!data) return null
  return JSON.parse(data)
 }
}