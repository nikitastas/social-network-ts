import React, { useEffect } from 'react'
import { Profile } from './Profile'
import {connect, useDispatch} from 'react-redux'
import {AppThunkDispatch, RootState} from '../../redux/redux-store'
import {getUserProfile, ProfileResponseType} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'

type MapStatePropsType = {
  profile: ProfileResponseType
}
type MapDispatchPropsType = {
  //setUserProfile: (profile: ProfileResponseType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

function ProfileContainer({ profile }: PropsType) {
  const dispatch = useDispatch<AppThunkDispatch>()

  const { userId } = useParams<{ userId: string }>()
  const resolvedUserId = userId ?? '22469'

  useEffect(() => {
    dispatch(getUserProfile(resolvedUserId))
  }, [resolvedUserId])

  return (
    <div>
      <Profile profile={profile} />
    </div>
  )
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { /*setUserProfile*/ })(ProfileContainer)
