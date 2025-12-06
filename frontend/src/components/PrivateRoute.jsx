import React from 'react'

export default function PrivateRoute({children,userData}) {
  if(userData.fullName!=null)
  {
    return children;
  }
  else
  {
    return <h1>Unauthorized</h1>
  }
}
