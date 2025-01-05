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

export class Users extends React.Component<Props> {
	constructor(props: Props) {
		super(props)

		if (this.props.users.length === 0) {
			axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(res => {
				console.log(res)
				this.props.setUsers(res.data.items)
			})
		}
	}

	getUsers = () => {

	}
    render() {
		return (
			<div>
				{
					this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
								? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
								: <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}