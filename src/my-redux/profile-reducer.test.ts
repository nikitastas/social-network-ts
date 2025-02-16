import { addPostAC, deletePostAC, profileReducer } from 'my-redux/profile-reducer'
import { v1 } from 'uuid'

let initialState = {
  posts: [
    { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
    { id: v1(), message: "It's my first post", likesCount: 11 },
    { id: v1(), message: 'Bla bla', likesCount: 9 },
    { id: v1(), message: 'Da da', likesCount: 19 },
  ],
  profile: null,
  status: '',
}

test('length of post should be incremented', () => {
  let newState = profileReducer(initialState, addPostAC('it-kamasutra.com'))

  expect(newState.posts.length).toBe(5)
})

test('message of new post should be correct', () => {
  let newState = profileReducer(initialState, addPostAC('it-kamasutra.com'))

  expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  let newState = profileReducer(initialState, deletePostAC('3'))

  expect(newState.posts.length).toBe(4)
})
