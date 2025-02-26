import React from 'react'
import styles from './Paginator.module.css'

type UserProps = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({ pageSize, totalUsersCount, currentPage, onPageChanged }: UserProps) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map((p, i) => {
        return (
          <span key={i} className={currentPage === p ? styles.selectedPage : ''} onClick={() => onPageChanged(p)}>
            {p}
          </span>
        )
      })}
    </div>
  )
}
