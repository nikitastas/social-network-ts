
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export type UserType = {
    id: number
    name: string
    status?: string
    photos: {
        small?: string
        large?: string
    }
    followed: boolean
    uniqueUrlName?: string
}

export type UsersType = {
    users: UserType[]
}

let initialState = {
    users: [
        /*{
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
        },*/
    ]
}

export const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export type SetUsersActionType = {
    type: typeof SET_USERS
    users: UserType[]
}

export type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users: UserType[]): SetUsersActionType => (
    {
        type: SET_USERS,
        users
    } as const
)