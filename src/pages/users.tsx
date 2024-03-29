import { FC } from "react"
import { useUsers } from "../hooks/useUsers"
import UserCard from "../components/userCard/userCard"





const Users: FC = () => {
 const { users } = useUsers()
 return <>
  <h1>Пользователи:</h1>
  {users ? <>{users?.map(user => <UserCard title={user.nickname} email={user.email} id={user.id} image={user.img} />)}</> : undefined}
 </>
}


export default Users