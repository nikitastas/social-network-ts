import React from 'react'
import { UserType } from 'my-redux/users-reducer'
import { Paginator } from 'components/common/Paginator/Paginator'
import { User } from 'components/Users/User'

type UserProps = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  followingInProgress: number[]
}

export const Users = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  follow,
  unfollow,
  onPageChanged,
  followingInProgress,
}: UserProps) => {
  return (
    <div>
      <Paginator
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((u) => (
          <User key={u.id} user={u} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} />
        ))}
      </div>
    </div>
  )
}
