/*
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/redux-store'
import {
  follow, getUsersThunkCreator,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
  UserType,
} from '../../redux/users-reducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'
import {Dispatch} from "redux";

type Props = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setUsersTotalCount: (totalCount: number) => void
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  followingInProgress: number[]
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void
  getUsersThunkCreator: (currentPage: number, pageSize: number) => (dispatch: Dispatch) => void
}

export class UsersContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    /!*this.props.toggleIsFetching(true)
    if (this.props.users.length === 0) {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(res.items)
        this.props.setUsersTotalCount(res.totalCount)
      })
    }*!/
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((res) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(res.items)
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
})(UsersContainer)
*/

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Preloader } from '../common/Preloader/Preloader'
import { Users } from './Users'
import { getUsers, follow, unfollow } from '../../redux/users-reducer'
import { AppThunkDispatch, RootState } from '../../redux/redux-store'
import {useAuth} from "../../contexts/AuthContext";
import {Navigate} from "react-router-dom";

const UsersContainer: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>()
  const { isAuth } = useAuth();

  const usersPage = useSelector((state: RootState) => state.usersPage)
  const { users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress } = usersPage

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize))
  }, [currentPage, pageSize, dispatch])

  // Обработка изменения страницы
  const onPageChanged = (pageNumber: number) => {
    //dispatch(setCurrentPage(pageNumber))
    dispatch(getUsers(pageNumber, pageSize))
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
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
