import React, { useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'

type UserProps = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize: number
}

export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }: UserProps) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              key={p}
              className={cn({ [styles.selectedPage]: currentPage === p }, styles.pageNumber)}
              onClick={() => onPageChanged(p)}
            >
              {p}
            </span>
          )
        })}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
  )
}
