import {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type Props = {
    posts: Array<PostDataType>
    newPostText: string
    dispatch: (action: any) => void
}

export const MyPostsContainer = ({posts, newPostText, dispatch}: Props) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        //addPost()
        dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            //updateNewPostText(newPostElement.current.value)
            //dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
            dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}