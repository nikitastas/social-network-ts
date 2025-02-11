import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'

export type HeaderProps = {
  login: string
  isAuth: boolean
  logoutTC: () => void
}

export const Header = ({ login, isAuth, logoutTC }: HeaderProps) => {
  return (
    <header className={s.header}>
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712966400&semt=ais"
        alt=""
      />

      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            {login} -{' '}
            <Button type={'submit'} variant={'contained'} color={'primary'} onClick={logoutTC}>
              Log out
            </Button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}
