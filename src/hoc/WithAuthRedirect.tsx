import React from 'react'
import {Navigate} from "react-router-dom"

type RedirectComponentProps = {
  isAuth: boolean
}

export const WithAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {

  const RedirectComponent = (props: RedirectComponentProps & P) => {
    if (!props.isAuth) return <Navigate to={'/login'} />

      return <Component {...props} />
  }

  return RedirectComponent
}