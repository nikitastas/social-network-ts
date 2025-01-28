import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '55e3cbbe-3654-424a-9e92-9780c79ddca9',
  },
})

export type UsersResponseType = {
  items: RootObjectItems[]
  totalCount: number
  error?: any
}
export type RootObjectItemsPhotos = {
  small?: any
  large?: any
}
export type RootObjectItems = {
  name: string
  id: number
  uniqueUrlName?: any
  photos: RootObjectItemsPhotos
  status?: any
  followed: boolean
}
type FollowResponse = {
  resultCode: number
  messages: string[]
  data: {}
}

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
  },
  follow(userId: number) {
    return instance.post<FollowResponse>(`follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete<FollowResponse>(`follow/${userId}`)
  },
}
