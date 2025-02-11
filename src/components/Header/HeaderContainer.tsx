import React from 'react'
import { logoutTC } from 'my-redux/auth-reducer'
import { connect } from 'react-redux'
import { RootState } from 'my-redux/redux-store'
import { Header } from './Header'

type MapStatePropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchPropsType = {
  logoutTC: () => void
}

export type HeaderContainerProps = MapStatePropsType & MapDispatchPropsType

export const HeaderContainer = ({ login, isAuth, logoutTC }: HeaderContainerProps) => {
  return <Header login={login} isAuth={isAuth} logoutTC={logoutTC} />
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { logoutTC })(HeaderContainer)
