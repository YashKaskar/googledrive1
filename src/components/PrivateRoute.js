import React from "react"
import { Navigate, Route  } from "react-router-dom"
import { useAuth } from "../context/Authcontext"

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? < Element {...props} /> : < Navigate to = '/login'/>
      }}
    ></Route>
  )
}
