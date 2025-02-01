import React, { useEffect } from 'react'
import { Profile } from './Profile'
import {connect, useDispatch} from 'react-redux'
import {AppThunkDispatch, RootState} from '../../redux/redux-store'
import {getUserProfile, ProfileResponseType} from '../../redux/profile-reducer'
import {Navigate, useParams} from 'react-router-dom'

type MapStatePropsType = {
  profile: ProfileResponseType
  isAuth: boolean
}
type MapDispatchPropsType = {
  //setUserProfile: (profile: ProfileResponseType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

function ProfileContainer({ profile, isAuth }: PropsType) {
  const dispatch = useDispatch<AppThunkDispatch>()

  const { userId } = useParams<{ userId: string }>()
  const resolvedUserId = userId ?? '22469'

  useEffect(() => {
    dispatch(getUserProfile(resolvedUserId))
  }, [resolvedUserId])

  if (!isAuth) return <Navigate to={'/login'} />

  return (
    <div>
      <Profile profile={profile} />
    </div>
  )
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { /*setUserProfile*/ })(ProfileContainer)
