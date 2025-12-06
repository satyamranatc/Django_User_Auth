import React from 'react'
import { Link } from 'react-router-dom'
import {HomeIcon,BookIcon,UserIcon} from "lucide-react"

export default function NavBar({user}) {
  return (
    <nav className='bg-slate-100 flex items-center justify-between px-5 py-2' >
        <h2 className='text-3xl font-bold text-indigo-500' >The D Auth</h2>
        <ul className='flex items-center justify-between gap-5' >
            <li>
            <Link to={'/'}>
                <span className='flex gap-2 items-center' >
                    <HomeIcon/>
                    Home
                </span>
            </Link>
            </li>


           {
           user.fullName? 
            <>
            <li>
            <Link to={'/service'}>
                <span className='flex gap-2 items-center' >
                    <BookIcon/>
                    Service
                </span>
            </Link>
            </li>
            <li>
            <Link to={'/profile'}>
                <span className='flex gap-2 items-center' >
                    <UserIcon/>
                    Profile
                </span>
            </Link>
            </li>
            </>
           : <li>
            <Link to={'/auth'}>
                <span className='flex gap-2 items-center' >
                    <UserIcon/>
                    Auth
                </span>
            </Link>
            </li>
           }

        </ul>
    </nav>
  )
}
