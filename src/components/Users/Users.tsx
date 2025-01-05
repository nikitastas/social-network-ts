import React, {useEffect} from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {v1} from "uuid";

type Props = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = ({users, follow, unfollow, setUsers}: Props) => {

    useEffect(() => {
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
    }, [])

    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}