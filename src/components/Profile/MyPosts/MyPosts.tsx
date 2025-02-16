import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'my-redux/redux-store'
import { AddNewPostForm } from 'components/Profile/MyPosts/AddNewPostForm/AddNewPostForm'
import { addPostAC } from 'my-redux/profile-reducer'
import { memo } from 'react'

export const MyPosts = memo(() => {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.profilePage.posts)

  let postsElements = posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const onAddPost = (newPostText: string) => {
    dispatch(addPostAC(newPostText))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostForm onAddPost={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
})
