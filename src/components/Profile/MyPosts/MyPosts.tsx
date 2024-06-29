import {useRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';


type Props = {
    posts: Array<PostDataType>
    addPost: (postMessage: string) => void
}

export const MyPosts = ({posts, addPost}: Props) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPostHandler = () => {
        if (newPostElement.current) addPost(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>Add some text</textarea>
                </div>
                <div>
                    <button onClick={ addPostHandler }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}