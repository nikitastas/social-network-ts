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
	pageSize: number
	totalUsersCount: number
	currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<Props> {
	componentDidMount() {
		if (this.props.users.length === 0) {
			axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then(res => {
				    this.props.setUsers(res.data.items)
				    this.props.setTotalUsersCount(res.data.totalCount)
			})
		}
	}

	oncPageChanged = (pageNumber: number) => {
		this.props.setCurrentPage(pageNumber)
		axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(res => {
				this.props.setUsers(res.data.items)
			})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<div>
				<div>
					{pages.map(p => {
					return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
								 onClick={() => this.oncPageChanged(p)}>{p}</span>
					})}
				</div>
				{
					this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
								 alt={'avatar'}
								 className={styles.userPhoto}/>
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