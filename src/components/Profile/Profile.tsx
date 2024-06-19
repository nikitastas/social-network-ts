import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

let posts: Array<PostsDataType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 2, message: "Bla bla", likesCount: 9},
    {id: 2, message: "Da da", likesCount: 19},
]

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}