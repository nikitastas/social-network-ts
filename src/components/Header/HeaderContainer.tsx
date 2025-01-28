import React, { useEffect } from 'react'
import axios from 'axios'
import { AuthResponseType, setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { RootState } from '../../redux/redux-store'
import { Header } from './Header'

type MapStatePropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchPropsType = {
  setAuthUserData: (data: { id: number; login: string; email: string }) => void
}

export type HeaderContainerProps = MapStatePropsType & MapDispatchPropsType

export const HeaderContainer = ({ setAuthUserData, login, isAuth }: HeaderContainerProps) => {
  useEffect(() => {
    axios
      .get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          setAuthUserData(res.data.data)
        }
      })
  }, [])

  return <Header login={login} isAuth={isAuth} />
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
