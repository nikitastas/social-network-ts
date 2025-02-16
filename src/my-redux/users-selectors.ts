import { RootState } from 'my-redux/redux-store'
import { createSelector } from 'reselect'

export const users = (state: RootState) => {
  return state.usersPage.users
}
export const memoizedUsers = createSelector(users, (users) => {
  return users.filter((user) => true)
})
export const pageSize = (state: RootState) => {
  return state.usersPage.pageSize
}
export const totalUsersCount = (state: RootState) => {
  return state.usersPage.totalUsersCount
}
export const currentPage = (state: RootState) => {
  return state.usersPage.currentPage
}
export const isFetching = (state: RootState) => {
  return state.usersPage.isFetching
}
export const followingInProgress = (state: RootState) => {
  return state.usersPage.followingInProgress
}
