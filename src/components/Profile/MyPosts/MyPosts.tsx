import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
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
                <Post message={"Hi, how are you?"} likesCount={15}/>
                <Post message={"It's my first post"} likesCount={20}/>
            </div>
        </div>
    )
}