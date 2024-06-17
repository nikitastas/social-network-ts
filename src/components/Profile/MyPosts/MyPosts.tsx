import s from './MyPosts.module.css';
import {Post} from './Post/Post';

type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {
    let posts: Array<PostsDataType> = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 2, message: "Bla bla", likesCount: 9},
        {id: 2, message: "Da da", likesCount: 19},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>Add some text</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}