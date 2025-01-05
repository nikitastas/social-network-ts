import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user-image.jpg'

export type UsersResponseType = {
	items: RootObjectItems[];
	totalCount: number;
	error?: any;
}
export type RootObjectItemsPhotos = {
	small?: any;
	large?: any;
}
export type RootObjectItems = {
	name: string;
	id: number;
	uniqueUrlName?: any;
	photos: RootObjectItemsPhotos;
	status?: any;
	followed: boolean;
}


type Props = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = ({users, follow, unfollow, setUsers}: Props) => {

	const getUsers = () => {
		if (users.length === 0) {
			axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(res => {
				console.log(res)
				setUsers(res.data.items)
			})
		}
	}

    /*useEffect(() => {
        setUsers([
            {
                id: v1(),
                photoUrl: 'https://cdn.7days.ru/pic/f68/1004510/1597471/86.jpg',
                followed: false,
                fullName: 'Nikita',
                status: 'developer',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://cdn.7days.ru/pic/f68/1004510/1597471/86.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: 'https://cdn.7days.ru/pic/f68/1004510/1597471/86.jpg',
                followed: false,
                fullName: 'Evgeny',
                status: 'developer',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }, [])*/

    return (
        <div>
			<button onClick={getUsers}>Get Users</button>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}