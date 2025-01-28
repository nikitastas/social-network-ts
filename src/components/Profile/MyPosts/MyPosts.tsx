import { useRef } from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { PostDataType } from '../../../redux/profile-reducer'

type Props = {
  posts: Array<PostDataType>
  newPostText: string
  updateNewPostText: (text: string) => void
  addPost: () => void
}

export const MyPosts = ({ posts, newPostText, addPost, updateNewPostText }: Props) => {
  let postsElements = posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  const onAddPost = () => {
    addPost()
  }

  const onPostChange = () => {
    if (newPostElement.current) {
      updateNewPostText(newPostElement.current.value)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}
