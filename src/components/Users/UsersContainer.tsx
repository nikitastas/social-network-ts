import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
import { follow, getUsers, unfollow } from 'my-redux/users-reducer'
import { AppThunkDispatch } from 'my-redux/redux-store'
import { useAuth } from 'contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from 'hooks/useAppSelector'
import {
  getCurrentPageSelector,
  getFollowingInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from 'my-redux/users-selectors'

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const { isAuth } = useAuth()

  const users = useAppSelector(getUsersSelector)
  const pageSize = useAppSelector(getPageSizeSelector)
  const totalUsersCount = useAppSelector(getTotalUsersCountSelector)
  const currentPage = useAppSelector(getCurrentPageSelector)
  const isFetching = useAppSelector(getIsFetchingSelector)
  const followingInProgress = useAppSelector(getFollowingInProgressSelector)

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize))
  }, [currentPage, pageSize, dispatch])

  // Обработка изменения страницы
  const onPageChanged = (pageNumber: number) => {
    //dispatch(setCurrentPage(pageNumber))
    dispatch(getUsers(pageNumber, pageSize))
  }

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return (
    <>
      {isFetching && <Preloader />}
      <Users
        users={users}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        follow={(userId: number) => {
          dispatch(follow(userId))
        }}
        unfollow={(userId: number) => {
          dispatch(unfollow(userId))
        }}
        onPageChanged={onPageChanged}
        followingInProgress={followingInProgress}
      />
    </>
  )
}

export default UsersContainer
