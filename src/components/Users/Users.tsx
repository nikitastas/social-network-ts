import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user-image.jpg'
import { UserType } from '../../redux/users-reducer'
import { NavLink } from 'react-router-dom'

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
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span className={currentPage === p ? styles.selectedPage : ''} onClick={() => onPageChanged(p)}>
              {p}
            </span>
          )
        })}
      </div>
      {users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt={'avatar'}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
