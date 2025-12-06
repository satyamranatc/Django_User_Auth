import React,{useEffect,useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Auth from './pages/Auth.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {

  let [userData,setUserData] = useState({});

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    if(user)
    {
      setUserData(user);
    }
  },[])


  return (
    <div>
      <BrowserRouter>
        <NavBar user = {userData} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={
            <PrivateRoute userData = {userData} >
              <Profile user = {userData} setUser = {setUserData} />
            </PrivateRoute>
          }/>
          <Route path='/service' element={
            <PrivateRoute userData = {userData} >
              <Service/>
            </PrivateRoute>
          }/>
          <Route path='/auth' element={<Auth setUserData = {setUserData} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
