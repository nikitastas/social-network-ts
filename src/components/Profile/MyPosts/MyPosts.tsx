import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../../../redux/state';

type Props = {
    posts: Array<PostDataType>
}

export const MyPosts = ({posts}: Props) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
        alert('Hei')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>Add some text</textarea>
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