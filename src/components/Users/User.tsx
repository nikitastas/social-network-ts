import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user-image.jpg'
import { UserType } from 'my-redux/users-reducer'
import { NavLink } from 'react-router-dom'

type UserProps = {
  user: UserType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: number[]
}

export const User = ({ user, follow, unfollow, followingInProgress }: UserProps) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt={'avatar'}
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </span>
      </span>
    </div>
  )
}
