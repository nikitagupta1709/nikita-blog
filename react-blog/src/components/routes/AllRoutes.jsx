import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../../Pages/home/Home'
import { Login } from '../../Pages/login/Login'
import { Register } from '../../Pages/register/Register'
import { Settings } from '../../Pages/settings/Settings'
import { Write } from '../../Pages/write/Write'
import   Single  from "../../Pages/single/Single"
import { NotFound } from '../../Pages/notFound/NotFound'

export const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}


