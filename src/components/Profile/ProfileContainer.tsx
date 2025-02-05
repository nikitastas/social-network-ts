import React, { useEffect } from 'react'
import { Profile } from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import {AppThunkDispatch, RootState} from '../../redux/redux-store'
import { getUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const ProfileContainer = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const profile = useSelector((state: RootState) => state.profilePage.profile)
  const { isAuth } = useAuth() // Используем контекст для проверки аутентификации
  const { userId } = useParams<{ userId: string }>()
  const resolvedUserId = userId ?? '22469'

  useEffect(() => {
    dispatch(getUserProfile(resolvedUserId))
  }, [resolvedUserId, dispatch])

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Profile profile={profile} />
    </div>
  )
}

export default ProfileContainer