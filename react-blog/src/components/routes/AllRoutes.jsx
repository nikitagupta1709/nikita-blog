import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../../Pages/home/Home'
import { Login } from '../../Pages/login/Login'
import { Register } from '../../Pages/register/Register'
import { Settings } from '../../Pages/settings/Settings'
import Write from '../../Pages/write/Write'
import Single from "../../Pages/single/Single"
import { NotFound } from '../../Pages/notFound/NotFound'
import { useContext } from 'react'
import {Context} from "../../context/context"

export const AllRoutes = () => {
    const {user} = useContext(Context);
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route path="/login" element= {user ? <Home /> : <Login />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}


