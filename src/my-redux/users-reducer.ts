import { Dispatch } from 'redux'
import { FollowResponse, usersAPI } from 'api/api'
import { updateObjectInArray } from 'utils/objects-helpers'

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
  isFetching: boolean
  followingInProgress: number[]
}

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case FOLLOW:
      return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }) }
    case UNFOLLOW:
      return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }) }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }
    default:
      return state
  }
}

type FollowActionType = ReturnType<typeof followSuccess>
type UnfollowActionType = ReturnType<typeof unfollowSuccess>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type ActionsTypes =
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetUsersTotalCountActionType
  | ToggleIsFetchingActionType
  | ToggleFollowingProgressActionType

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId }) as const
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId }) as const
export const setUsers = (users: UserType[]) => ({ type: SET_USERS, users }) as const
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage }) as const
export const setUsersTotalCount = (totalUsersCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount }) as const
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching }) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
  ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }) as const

export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))

  let response = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(response.items))
  dispatch(setUsersTotalCount(response.totalCount))
}

type ApiMethodType = (userId: number) => Promise<{ data: FollowResponse }>
type ActionCreatorType = (userId: number) => { type: string; userId: number }

const followUnfollowFlow = async (
  dispatch: Dispatch,
  userId: number,
  apiMethod: ApiMethodType,
  actionCreator: ActionCreatorType,
) => {
  dispatch(toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
