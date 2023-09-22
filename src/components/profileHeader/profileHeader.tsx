import s from './profileHeader.module.scss'
import {FC} from 'react'

interface Props {
 id: string
}

const ProfileHeader: FC<Props> = ({id}) => {
 return <div className={s.profileHeader}>#{id}</div>
}

export default ProfileHeader