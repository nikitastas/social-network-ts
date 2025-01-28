import React from 'react'
import s from './Post.module.css'

type PostType = {
  message: string
  likesCount: number
}

export const Post = (props: PostType) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img
          src="https://s13.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg"
          alt=""
        />
        {props.message}
        <div>
          <span>likes: {props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}
