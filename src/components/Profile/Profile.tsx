import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type Props = {
    store: StoreType
}

export const Profile = ({store}: Props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}