import React, { useEffect } from 'react'
import { getAuthUserData } from 'my-redux/auth-reducer'
import { connect, useDispatch } from 'react-redux'
import { AppThunkDispatch, RootState } from 'my-redux/redux-store'
import { Header } from './Header'

type MapStatePropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchPropsType = {}

export type HeaderContainerProps = MapStatePropsType & MapDispatchPropsType

export const HeaderContainer = ({ login, isAuth }: HeaderContainerProps) => {
  const dispatch = useDispatch<AppThunkDispatch>()

  useEffect(() => {
    dispatch(getAuthUserData())
  }, [])

  return <Header login={login} isAuth={isAuth} />
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, {})(HeaderContainer)
