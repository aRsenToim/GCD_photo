import s from './login.module.scss'
import { NavLink, Navigate } from "react-router-dom"
import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

interface IProps {
    SumbmitLogin: (email: string, password: string) => void
}

const LoginComponent: FC<IProps> = ({SumbmitLogin}) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispath = useAppDispatch()

    return <div className={s.Login}>
        <img src="/img/login/img.svg" alt="" />
        <div className={s.form}>
            <h1 className={s.title}>Добро пожаловать на GCD</h1>
            <form className={s.item}>
                <label>Адрес электронной почты</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value) }} value={email} type="text" placeholder='Введите адрес электронной почты' />
            </form>
            <form className={s.item}>
                <label>Пароль</label>
                <input type="password" onChange={(e) => { setPassword(e.currentTarget.value) }} value={password} placeholder='Введите пароль' />
            </form>
            <button className={s.login} onClick={() => {SumbmitLogin(email, password)}}>Войти</button>
            <p>У вас нет аккаунта? <NavLink className={s.link} to='/regist'>Зарегистрироваться</NavLink></p>
        </div>
    </div>
}


export default LoginComponent