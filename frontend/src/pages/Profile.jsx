import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile({user,setUser}) {
    let navigate = useNavigate();
  return (
    <div>
        <center>

            <h2>Profile</h2>
            <h3>Welcome {user.fullName}</h3>
            <button onClick={()=>{
                localStorage.removeItem("user")
                setUser({})
                navigate("/auth")

            }} > Logout</button>

        </center>
    </div>
  )
}
