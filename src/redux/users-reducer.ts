
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
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

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export type ActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType
    | SetCurrentPageActionType | SetUsersTotalCountActionType

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId} as const)

export const setUsersAC = (users: UserType[]): SetUsersActionType => (
    {
        type: SET_USERS,
        users
    } as const
)

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)
export const setUsersTotalCountAC = (totalUsersCount: number): SetUsersTotalCountActionType => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
)