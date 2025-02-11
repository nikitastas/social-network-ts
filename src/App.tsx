import './App.css'
import { Navbar } from 'components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DialogsContainer } from 'components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Login } from 'components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { AppThunkDispatch, RootState } from 'my-redux/redux-store'
import { useEffect } from 'react'
import { setIsInitializedTC } from 'my-redux/app-reducer'
import { CircularProgress } from '@mui/material'
import s from './App.module.css'

function App() {
  const dispatch = useDispatch<AppThunkDispatch>()
  const isInitialized = useSelector((state: RootState) => state.app.isInitialized)

  useEffect(() => {
    dispatch(setIsInitializedTC())
  }, [])

  if (!isInitialized) {
    return (
      <div className={s.circularProgressContainer}>
        <CircularProgress size={150} thickness={3} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<h1>News</h1>} />
            <Route path="/music" element={<h1>Music</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
