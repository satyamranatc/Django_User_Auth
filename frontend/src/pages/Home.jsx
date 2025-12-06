import React,{useEffect,useState} from 'react'

export default function Home() {

  let [userData,setUserData] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setUserData(user);
  }, [])
  return (
    <div>
        <center>
            <h1 className='text-8xl m-5' >HOME</h1>
            <h1 className='text-4xl m-5' >Welcome {userData?.fullName}</h1>
        </center>
    </div>
  )
}
