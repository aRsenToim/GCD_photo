import React, { FC, useState } from 'react'
import s from './regist.module.scss'
import { NavLink, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

interface IProps {
    sumbmitRegist: (password: string, email: string, nickname: string, img: string) => void
}

const RegistCompoenent: FC<IProps> = ({sumbmitRegist}) => {
    const dispath = useAppDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [img, setImg] = useState<string>('')

    return <div className={s.Regist}>
        <img src="/img/login/img.svg" alt="" />
        <div className={s.form}>
            <h1 className={s.title}>Добро пожаловать на GCD</h1>
            <form className={s.item}>
                <label>Адрес электронной почты</label>
                <input type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value) }} placeholder='Введите адрес электронной почты' />
            </form>
            <form className={s.item}>
                <label>Nickname</label>
                <input type="text" value={nickname} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNickname(e.currentTarget.value) }} placeholder='Введите ваш nickname' />
            </form>
            <form className={s.item}>
                <label>Аватар</label>
                <input type="text" value={img} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setImg(e.currentTarget.value) }} placeholder='Введите img' />
            </form>
            <form className={s.item}>
                <label>Пароль</label>
                <input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.currentTarget.value) }} placeholder='Введите пароль' />
            </form>
            <button className={s.login} onClick={() => {
                sumbmitRegist(password, email, nickname, img)
            }}>Зарегистрироваться</button>
            <p>У вас есть аккаунт? <NavLink className={s.link} to='/login'>Войти</NavLink></p>
        </div>
    </div>
}


export default RegistCompoenent