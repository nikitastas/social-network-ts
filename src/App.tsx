import './App.css'
import { Navbar } from 'components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Login } from 'components/Login/Login'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { AppThunkDispatch, RootState } from 'my-redux/redux-store'
import React, { Suspense, useEffect } from 'react'
import { setIsInitializedTC } from 'my-redux/app-reducer'
import { CircularProgress } from '@mui/material'
import s from './App.module.css'
import { AuthProvider } from 'contexts/AuthContext'
import { Preloader } from 'components/common/Preloader/Preloader'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

function App() {
  const dispatch = useDispatch<AppThunkDispatch>()
  const isInitialized = useSelector((state: RootState) => state.app.isInitialized)

  useEffect(() => {
    dispatch(setIsInitializedTC())
  }, [dispatch])

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
            <Route
              path="/profile/:userId?"
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>
              }
            />
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

const SamuraiAppJS = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  )
}

export default SamuraiAppJS
